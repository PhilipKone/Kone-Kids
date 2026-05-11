import React, { useState, useEffect, useImperativeHandle, forwardRef, useRef } from 'react';
import { Car, Radar } from 'lucide-react';
import './RoboticsSimulator.css';

export interface RoboticsHandle {
  move: (direction: 'forward' | 'backward', duration: number) => Promise<void>;
  turn: (direction: 'left' | 'right', duration: number) => Promise<void>;
  stop: () => void;
  getDistance: () => number;
  reset: () => void;
}

const RoboticsSimulator = forwardRef<RoboticsHandle>((_, ref) => {
  const [pos, setPos] = useState({ x: 150, y: 150 });
  const [rotation, setRotation] = useState(0); // in degrees
  const [isMoving, setIsMoving] = useState(false);
  const [distance, setDistance] = useState(100);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  // Imperative API for the IDE
  useImperativeHandle(ref, () => ({
    move: async (direction, duration) => {
      setIsMoving(true);
      const speed = direction === 'forward' ? 2 : -2;
      const startTime = Date.now();

      return new Promise((resolve) => {
        const animate = () => {
          const elapsed = Date.now() - startTime;
          if (elapsed < duration) {
            setPos(prev => {
              const rad = (rotation * Math.PI) / 180;
              const newX = prev.x + Math.cos(rad) * speed;
              const newY = prev.y + Math.sin(rad) * speed;
              
              // Simple bounds check
              if (newX < 10 || newX > 290 || newY < 10 || newY > 290) return prev;
              return { x: newX, y: newY };
            });
            animationRef.current = requestAnimationFrame(animate);
          } else {
            setIsMoving(false);
            resolve();
          }
        };
        animationRef.current = requestAnimationFrame(animate);
      });
    },
    turn: async (direction, duration) => {
      setIsMoving(true);
      const turnSpeed = direction === 'right' ? 3 : -3;
      const startTime = Date.now();

      return new Promise((resolve) => {
        const animate = () => {
          const elapsed = Date.now() - startTime;
          if (elapsed < duration) {
            setRotation(prev => (prev + turnSpeed) % 360);
            animationRef.current = requestAnimationFrame(animate);
          } else {
            setIsMoving(false);
            resolve();
          }
        };
        animationRef.current = requestAnimationFrame(animate);
      });
    },
    stop: () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      setIsMoving(false);
    },
    getDistance: () => {
      // Logic for calculating distance to walls or obstacles
      return distance;
    },
    reset: () => {
      setPos({ x: 150, y: 150 });
      setRotation(0);
      setIsMoving(false);
    }
  }));

  // Update distance sensor reading
  useEffect(() => {
    const updateSensor = () => {
      const rad = (rotation * Math.PI) / 180;
      const dx = Math.cos(rad);
      const dy = Math.sin(rad);
      
      // Calculate distance to nearest wall in current direction
      let distToWall = 300;
      if (dx > 0) distToWall = Math.min(distToWall, (300 - pos.x) / dx);
      if (dx < 0) distToWall = Math.min(distToWall, (pos.x) / -dx);
      if (dy > 0) distToWall = Math.min(distToWall, (300 - pos.y) / dy);
      if (dy < 0) distToWall = Math.min(distToWall, (pos.y) / -dy);
      
      setDistance(Math.round(distToWall));
    };
    
    updateSensor();
  }, [pos, rotation]);

  return (
    <div className="robotics-simulator glass-panel" ref={containerRef}>
      <div className="sim-grid">
        {/* Grid lines */}
        {[...Array(10)].map((_, i) => (
          <React.Fragment key={i}>
            <div className="grid-line horizontal" style={{ top: `${i * 10}%` }} />
            <div className="grid-line vertical" style={{ left: `${i * 10}%` }} />
          </React.Fragment>
        ))}
        
        {/* The Robot */}
        <div 
          className={`robot-car ${isMoving ? 'engine-on' : ''}`}
          style={{ 
            left: `${pos.x}px`, 
            top: `${pos.y}px`, 
            transform: `translate(-50%, -50%) rotate(${rotation}deg)` 
          }}
        >
          <div className="sensor-beam" style={{ width: `${distance}px` }} />
          <Car size={32} className="car-body" />
          <div className="car-wheels front" />
          <div className="car-wheels back" />
          <Radar size={12} className="radar-icon" />
        </div>
      </div>
      
      <div className="sim-stats">
        <div className="stat-item">
          <span className="stat-label">DIST:</span>
          <span className="stat-value">{distance}cm</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">ROT:</span>
          <span className="stat-value">{Math.round(rotation)}°</span>
        </div>
      </div>
    </div>
  );
});

export default RoboticsSimulator;
