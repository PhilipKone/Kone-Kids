export interface KitComponent {
  name: string;
  qty: string;
  detail: string;
}

export interface StemKit {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: 'Junior' | 'Robotics' | 'IoT' | 'AI';
  ageRange: string;
  ageMin: number;
  ageMax: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  priceGHS: number;
  priceUSD: number;
  badge: string;
  accentColor: string;
  gradient: string;
  image: string;
  labRoute: string;
  labName: string;
  overview: string;
  skills: string[];
  components: KitComponent[];
  curriculumMatches: {
    missionTitle: string;
    description: string;
  }[];
  whatsIncluded: string[];
  requiresSoldering: boolean;
  batteryInfo: string;
}

export const STEM_KITS: StemKit[] = [
  {
    id: 'kone-junior-inventor',
    slug: 'junior-inventor-kit',
    title: 'Kone Junior Inventor Snap Circuit Kit',
    tagline: 'Snap-together visual circuitry, sound buzzers, and multi-color lights for early STEM thinkers.',
    category: 'Junior',
    ageRange: 'Ages 5–8',
    ageMin: 5,
    ageMax: 8,
    difficulty: 'Beginner',
    priceGHS: 280,
    priceUSD: 24,
    badge: 'Best for Beginners',
    accentColor: '#f97316',
    gradient: 'linear-gradient(135deg, #f97316 0%, #fbbf24 100%)',
    image: '/programs/coding.webp',
    labRoute: '/coding',
    labName: 'Coding Lab (Sequences & Logic)',
    overview: 'The ideal launchpad into the world of hardware. With large, colorful, magnetic snap modules, young kids safely learn polarity, closed loops, and boolean logic without dangerous wires, heat, or tools.',
    skills: [
      'Basic Electricity & Closed Loops',
      'Cause-and-Effect Logic Sequencing',
      'Sensory Engineering (Light & Sound)',
      'Fine Motor & Spatial Construction'
    ],
    components: [
      { name: 'Magnetic Snap Breadboard Base', qty: '1 unit', detail: 'Rugged modular baseplate designed for small hands' },
      { name: 'Ultra-Bright RGB LED Module', qty: '2 units', detail: 'Color-mixing diode with built-in current protection' },
      { name: 'Dual-Tone Acoustic Buzzer', qty: '1 unit', detail: 'Safe piezo sounder for building audio alarm circuits' },
      { name: 'Tactile Push-Button Switches', qty: '2 units', detail: 'Momentary and toggle switches for inputs' },
      { name: 'Light-Dependent Resistor (LDR)', qty: '1 unit', detail: 'Optical sensor block that detects light and darkness' },
      { name: 'Battery Power Station (AA)', qty: '1 unit', detail: 'Enclosed 3V battery holder with master power switch' }
    ],
    curriculumMatches: [
      { missionTitle: 'Mission 1: The First Spark', description: 'Complete a closed-loop circuit to light the mascot lamp.' },
      { missionTitle: 'Mission 3: Secret Night Alarm', description: 'Wire the LDR sensor and buzzer to sound when the lights turn off.' },
      { missionTitle: 'Mission 5: Traffic Light Sequencer', description: 'Alternate red and green LED blocks using dual-switch logic.' }
    ],
    whatsIncluded: [
      '12 modular snap-circuit hardware blocks',
      'Full-color 28-page illustrated mission comic book',
      'Kone Kids Explorer sticker sheet & certificate voucher',
      'Durable storage case with sorting slots'
    ],
    requiresSoldering: false,
    batteryInfo: 'Requires 2x AA batteries (included)'
  },
  {
    id: 'kone-explorer-rover',
    slug: 'explorer-robotics-rover-kit',
    title: 'Kone Explorer 2WD Autonomous Robotics Rover',
    tagline: 'Assemble, wire, and code an autonomous obstacle-avoiding smart rover with ultrasonic eyes.',
    category: 'Robotics',
    ageRange: 'Ages 8–14',
    ageMin: 8,
    ageMax: 14,
    difficulty: 'Intermediate',
    priceGHS: 460,
    priceUSD: 39,
    badge: 'Bestseller • Robotics Lab Official',
    accentColor: '#0ea5e9',
    gradient: 'linear-gradient(135deg, #0284c7 0%, #06b6d4 100%)',
    image: '/programs/robotics.webp',
    labRoute: '/robotics',
    labName: 'Robotics Lab (Microcontrollers & Motors)',
    overview: 'The centerpiece of the Kone Kids Robotics Lab! Students bolt together an acrylic mobile chassis, connect dual DC gear motors, wire an ultrasonic bat-sensor for distance detection, and upload autonomous obstacle-avoidance code.',
    skills: [
      'Microcontroller Architecture & Pinouts',
      'Dual DC Motor PWM Speed & Direction Control',
      'Ultrasonic Wave Distance Sensing',
      'Closed-Loop Autonomous Navigation Algorithms'
    ],
    components: [
      { name: 'Laser-Cut Clear Acrylic Chassis', qty: '1 set', detail: 'Pre-drilled mounting holes for sensors and Arduino boards' },
      { name: 'Kone Core Microcontroller Board', qty: '1 unit', detail: 'Type-C programmable Arduino/micro:bit compatible controller' },
      { name: 'Dual DC Gearmotors & Rubber Grip Wheels', qty: '2 sets', detail: '1:48 gear ratio motors with high-traction tires' },
      { name: 'HC-SR04 Ultrasonic Distance Sensor', qty: '1 unit', detail: 'Accurate radar sonar eyes measuring distance from 2cm to 400cm' },
      { name: 'L298N Dual H-Bridge Motor Driver', qty: '1 unit', detail: 'High-current motor bridge with individual wheel direction control' },
      { name: 'Front Swivel Omnidirectional Caster Wheel', qty: '1 unit', detail: 'Smooth 360-degree rotation for sharp turning radius' },
      { name: 'Multi-Color Jumper Wire Ribbon & Hardware', qty: '40 pcs', detail: 'Dupont wires, brass standoffs, and mini screwdriver' }
    ],
    curriculumMatches: [
      { missionTitle: 'Robotics Lab Mission 4: First Ignition', description: 'Wire motor driver pins and calibrate straight-line wheel speeds.' },
      { missionTitle: 'Robotics Lab Mission 7: Ultrasonic Radar', description: 'Read distance centimeters and brake when an obstacle is within 20cm.' },
      { missionTitle: 'Robotics Lab Mission 11: The Autonomous Maze Escape', description: 'Program the rover to explore, reverse, scan left/right, and choose open paths.' }
    ],
    whatsIncluded: [
      'Full mechanical chassis, motors, and wheels',
      'Pre-flashed Kone Core microcontroller with USB-C cable',
      'All sensors, motor driver board, and jumper wires',
      'Step-by-step video assembly guide access QR card',
      'Robotics Lab digital badge & completion certificate'
    ],
    requiresSoldering: false,
    batteryInfo: 'Rechargeable 18650 Li-ion battery cradle included (or 6x AA cradle)'
  },
  {
    id: 'kone-iot-smart-farm',
    slug: 'iot-smart-greenhouse-kit',
    title: 'Kone IoT Smart Greenhouse & Farm Telemetry Kit',
    tagline: 'Connect real soil probes, humidity sensors, and automatic water pumps to cloud Wi-Fi dashboards.',
    category: 'IoT',
    ageRange: 'Ages 10–16',
    ageMin: 10,
    ageMax: 16,
    difficulty: 'Intermediate',
    priceGHS: 520,
    priceUSD: 44,
    badge: 'Agritech Innovation Award',
    accentColor: '#16a34a',
    gradient: 'linear-gradient(135deg, #16a34a 0%, #10b981 100%)',
    image: '/programs/robotics.webp',
    labRoute: '/robotics',
    labName: 'Robotics & Environmental Telemetry',
    overview: 'Inspired by real West African agricultural innovation! Students build an automated climate station that measures real soil moisture and air humidity, displaying data on an OLED screen and automatically activating a water pump when plants get thirsty.',
    skills: [
      'Analog vs. Digital Sensor Calibration',
      'ESP32 Wi-Fi Telemetry & Cloud Dashboards',
      'Relay Switching for High-Power Actuators',
      'Closed-Loop Soil Hydration Dynamics'
    ],
    components: [
      { name: 'ESP32 Wi-Fi & Bluetooth Microcontroller', qty: '1 unit', detail: 'Dual-core IoT processor with integrated wireless telemetry' },
      { name: 'Capacitive Soil Moisture Probe V2.0', qty: '1 unit', detail: 'Corrosion-resistant analog probe with high precision' },
      { name: 'DHT11 Temperature & Relative Humidity Sensor', qty: '1 unit', detail: 'Calibrated environmental sensor for climate tracking' },
      { name: 'Submersible 5V Mini Water Pump & Tubing', qty: '1 set', detail: 'Compact DC pump with 1 meter food-grade silicone hose' },
      { name: '5V Optocoupler Isolated Relay Module', qty: '1 unit', detail: 'Safe electronic switch module to pulse the irrigation pump' },
      { name: '0.96" I2C Blue/Yellow OLED Display Screen', qty: '1 unit', detail: 'Crystal-clear screen showing live temp, humidity & moisture %' },
      { name: 'Solderless Prototyping Breadboard & Wires', qty: '1 set', detail: '400-tie point breadboard and flexible connector wires' }
    ],
    curriculumMatches: [
      { missionTitle: 'IoT Mission 2: Reading the Soil', description: 'Calibrate bone-dry soil versus saturated moisture analog levels.' },
      { missionTitle: 'IoT Mission 5: The OLED HUD', description: 'Render custom icons, temperature graphs, and moisture warnings on screen.' },
      { missionTitle: 'IoT Mission 9: Automatic Smart Irrigation', description: 'Trigger the water pump for exactly 3 seconds whenever soil moisture drops below 35%.' }
    ],
    whatsIncluded: [
      'ESP32 IoT board with USB programming cord',
      'Soil probe, DHT11 sensor, OLED display, and relay switch',
      'Submersible water pump with 1m delivery tube',
      'Starter seeds and germination peat-pellet pot',
      'Full access to the Kone IoT Cloud telemetry simulator'
    ],
    requiresSoldering: false,
    batteryInfo: 'Operates via USB-C power bank or 5V DC adapter'
  },
  {
    id: 'kone-ai-vision-companion',
    slug: 'ai-vision-voice-companion-kit',
    title: 'Kone AI Vision & Voice Companion Kit',
    tagline: 'Train computer vision models to recognize gestures, faces, and voice commands on a moving robot head.',
    category: 'AI',
    ageRange: 'Ages 12–17',
    ageMin: 12,
    ageMax: 17,
    difficulty: 'Advanced',
    priceGHS: 680,
    priceUSD: 58,
    badge: 'Flagship AI Studio Hardware',
    accentColor: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
    image: '/programs/ai.webp',
    labRoute: '/ai',
    labName: 'AI Studio (Machine Learning & Neural Logic)',
    overview: 'Physical Artificial Intelligence made tangible! Students connect an onboard camera module to a dual-servo pan-tilt robot eye, train edge machine learning models in the browser, and watch their robot mechanically track human faces, identify colors, and respond to voice prompts.',
    skills: [
      'Edge Machine Learning & Neural Inference',
      'Computer Vision Coordinates & Pan-Tilt Geometry',
      'Audio Waveform Processing & Keyword Spotting',
      'Responsible AI Ethics & Training Dataset Balancing'
    ],
    components: [
      { name: 'ESP32-CAM AI Vision Processor Board', qty: '1 unit', detail: 'High-speed OV2640 camera with Wi-Fi video streaming' },
      { name: '2-Axis Pan-Tilt Mechanical Servo Head', qty: '1 set', detail: 'Dual SG90 micro-servos for 180-degree X-Y gaze tracking' },
      { name: 'Digital I2S Audio Microphone Board', qty: '1 unit', detail: 'MEMS acoustic sensor for speech and claps detection' },
      { name: 'WS2812B 8-Pixel NeoPixel RGB Ring', qty: '1 unit', detail: 'Interactive expressive mood ring showing AI status & emotions' },
      { name: 'Heavy-Duty Anti-Tip Desktop Stand', qty: '1 unit', detail: 'Stable acrylic mounting platform for desktop vision tracking' },
      { name: 'FTDI USB-to-UART Programmer & Interface Cables', qty: '1 set', detail: 'High-reliability firmware flash and data transfer module' }
    ],
    curriculumMatches: [
      { missionTitle: 'AI Studio Mission 3: The Robotic Eye', description: 'Convert camera pixel coordinates (X, Y) into servo steering degrees.' },
      { missionTitle: 'AI Studio Mission 6: Color Sorting Robot', description: 'Train a neural model to recognize red apples versus green leaves and track them.' },
      { missionTitle: 'AI Studio Mission 10: The Expressive Companion', description: 'Program the NeoPixel ring to flash green when a friendly face is detected.' }
    ],
    whatsIncluded: [
      'AI Camera module and pan-tilt servo gimbal',
      'I2S microphone, NeoPixel emotion ring, and desktop stand',
      'USB programming bridge and all ribbon cables',
      'Lifetime access to Kone Kids AI Studio Web tools & model exporter',
      'AI Engineering Certificate of Accomplishment'
    ],
    requiresSoldering: false,
    batteryInfo: 'Powered via standard USB-C cable (included)'
  }
];

export const SCHOOL_PACK_OFFERING = {
  title: 'Kone Academy School & Club STEM Lab Pack',
  subtitle: 'Equip an entire classroom or coding club with classroom-ready hardware kits, multi-seat teacher dashboards, and curriculum lesson plans.',
  minQuantity: 10,
  features: [
    '10x or 20x STEM Kits of your choice (Rover, IoT, or Junior)',
    '1x Teacher Master Station with replacement spare parts kit',
    'Curriculum Lesson Plans mapped to Ghana GES & International STEM standards',
    'Free 3-hour virtual or in-person teacher training workshop (Accra & online)',
    'Teacher Dashboard multi-student progress tracking licenses included',
    'Dedicated WhatsApp priority hardware support channel'
  ],
  contactPhone: '+233 55 199 3820',
  contactEmail: 'admissions@koneacademy.io'
};
