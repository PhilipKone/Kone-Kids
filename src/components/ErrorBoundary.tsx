import React, { Component, ErrorInfo, ReactNode } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';

interface Props {
  children?: ReactNode;
  fallbackMessage?: string;
  appName?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  public componentDidMount() {
    // Catch global window errors
    window.addEventListener('error', this.handleGlobalError);
    // Catch unhandled promise rejections (like failed API calls)
    window.addEventListener('unhandledrejection', this.handleGlobalPromiseRejection);
  }

  public componentWillUnmount() {
    window.removeEventListener('error', this.handleGlobalError);
    window.removeEventListener('unhandledrejection', this.handleGlobalPromiseRejection);
  }

  private handleGlobalError = (event: ErrorEvent) => {
    this.logError(event.error || new Error(event.message), { componentStack: 'Global Window Error' });
  };

  private handleGlobalPromiseRejection = (event: PromiseRejectionEvent) => {
    this.logError(event.reason || new Error('Unhandled Promise Rejection'), { componentStack: 'Global Promise Rejection' });
  };

  public async componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error caught by ErrorBoundary:', error, errorInfo);
    await this.logError(error, errorInfo);
  }

  private async logError(error: Error, errorInfo: { componentStack?: string }) {
    // Log the error to Firestore
    try {
      await addDoc(collection(db, 'client_errors'), {
        appName: this.props.appName || 'Kone-Kids',
        errorMessage: error.message,
        errorStack: error.stack,
        componentStack: errorInfo.componentStack,
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: serverTimestamp()
      });
      console.log('Error successfully logged to Firestore.');
    } catch (e) {
      console.error('Failed to log error to Firestore:', e);
    }
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '2rem', 
          textAlign: 'center', 
          fontFamily: 'system-ui, -apple-system, sans-serif', 
          color: '#f8fafc', 
          background: '#0a0a0f', 
          minHeight: '100vh', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          <h2 style={{ color: '#ec4899', marginBottom: '1rem', fontSize: '2rem' }}>Oops, something went wrong.</h2>
          <p style={{ color: '#94a3b8', marginBottom: '2rem', maxWidth: '500px', lineHeight: '1.6' }}>
            {this.props.fallbackMessage || "We're sorry, but an unexpected error occurred. Our engineering team has been notified. Please try refreshing the page."}
          </p>
          <button 
            onClick={() => window.location.reload()}
            style={{ 
              padding: '12px 24px', 
              background: '#ec4899', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '8px', 
              cursor: 'pointer', 
              fontWeight: '600',
              fontSize: '1rem',
              boxShadow: '0 0 15px rgba(236, 72, 153, 0.4)'
            }}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
