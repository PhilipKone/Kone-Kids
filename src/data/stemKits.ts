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
  category: 'Junior' | 'Robotics' | 'IoT' | 'AI' | 'Basic 4' | 'Basic 5' | 'Basic 6';
  gesCurriculumCode?: string;
  gradeLevel?: string;
  term?: string;
  experiments?: string[];
  ageRange: string;
  ageMin: number;
  ageMax: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  priceGHS: number;
  originalPriceGHS: number;
  priceUSD: number;
  originalPriceUSD: number;
  rating: number;
  reviewsCount: number;
  salesCount: number;
  stockCount: number;
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
    originalPriceGHS: 350,
    priceUSD: 24,
    originalPriceUSD: 30,
    rating: 4.9,
    reviewsCount: 58,
    salesCount: 194,
    stockCount: 8,
    badge: 'BESTSELLER • AGES 5–8',
    accentColor: '#f97316',
    gradient: 'linear-gradient(135deg, #f97316 0%, #fbbf24 100%)',
    image: '/images/kits/junior-circuit-kit.jpg',
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
    originalPriceGHS: 580,
    priceUSD: 39,
    originalPriceUSD: 49,
    rating: 5.0,
    reviewsCount: 142,
    salesCount: 438,
    stockCount: 5,
    badge: '🔥 #1 BESTSELLER IN GHANA',
    accentColor: '#0ea5e9',
    gradient: 'linear-gradient(135deg, #0284c7 0%, #06b6d4 100%)',
    image: '/images/kits/explorer-robotics-rover.jpg',
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
    originalPriceGHS: 650,
    priceUSD: 44,
    originalPriceUSD: 55,
    rating: 4.8,
    reviewsCount: 49,
    salesCount: 126,
    stockCount: 9,
    badge: 'AGRITECH INNOVATION AWARD',
    accentColor: '#16a34a',
    gradient: 'linear-gradient(135deg, #16a34a 0%, #10b981 100%)',
    image: '/images/kits/iot-smart-farm.jpg',
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
    originalPriceGHS: 850,
    priceUSD: 58,
    originalPriceUSD: 72,
    rating: 4.9,
    reviewsCount: 36,
    salesCount: 88,
    stockCount: 3,
    badge: 'FLAGSHIP AI STUDIO HARDWARE',
    accentColor: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
    image: '/images/kits/ai-companion-kit.jpg',
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
  },
  {
    id: 'science-set-4-1',
    slug: 'ges-science-set-basic-4-1',
    title: 'Science Set 4.1 — Living Things, Seed Germination & Soil Ecology',
    tagline: 'Curriculum-aligned practical science kit for Basic 4 Term 1: Seed germination, plant structures, and soil drainage.',
    category: 'Basic 4',
    gesCurriculumCode: 'NaCCA / GES B4.1.1.1 & B4.1.2.1',
    gradeLevel: 'Primary 4 (Basic 4)',
    term: 'Term 1',
    experiments: [
      'Living & non-living things classification',
      'Plant anatomy & root structure observation',
      'Seed germination stages under varied moisture',
      'Comparative soil drainage & absorption (Sand, Loam, Clay)'
    ],
    ageRange: 'Ages 8–10',
    ageMin: 8,
    ageMax: 10,
    difficulty: 'Beginner',
    priceGHS: 125,
    originalPriceGHS: 155,
    priceUSD: 10,
    originalPriceUSD: 13,
    rating: 4.9,
    reviewsCount: 34,
    salesCount: 145,
    stockCount: 14,
    badge: '🌱 BASIC 4 • TERM 1 (GES / NaCCA)',
    accentColor: '#22c55e',
    gradient: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)',
    image: '/images/kits/science-set-4-1.jpg',
    labRoute: '/stem',
    labName: 'Basic Science & Biology Lab',
    overview: 'A complete practical experiment set tailored to the Ghana NaCCA curriculum for Basic 4 Term 1. Young learners observe seed germination in transparent petri dishes, test soil porosity, and dissect plant structures with safe optical lenses.',
    skills: [
      'Observation & Recording',
      'Plant Biology Basics',
      'Soil Texture & Porosity',
      'Hypothesis Testing'
    ],
    components: [
      { name: 'Seed Germination Observation Chamber & Trays', qty: '2 units', detail: 'Vented clear containers for tracking root and shoot growth' },
      { name: 'Dual-Power Optical Hand Lens (3x/6x)', qty: '1 unit', detail: 'Shatter-resistant magnifier for leaf venation and seed coats' },
      { name: 'Graduated Measuring Cylinder (50ml)', qty: '1 unit', detail: 'Clear polypropylene cylinder for soil water drainage tests' },
      { name: 'Soil Sample Filter Funnels & Filter Paper', qty: '3 sets', detail: 'For comparing sandy, loamy, and clay water retention' },
      { name: 'Specimen Tweezers & Petri Dishes', qty: '2 sets', detail: 'Safe plastic tools for delicate seedling handling' }
    ],
    curriculumMatches: [
      { missionTitle: 'Strand 1: Diversity of Matter (B4.1.1.1)', description: 'Sort and classify living vs non-living specimens using tactile physical criteria.' },
      { missionTitle: 'Strand 2: Cycles — Life Cycle of Plants (B4.1.2.1)', description: 'Measure and record daily dicot vs monocot seed germination.' },
      { missionTitle: 'Strand 3: Soil Types & Water Flow (B4.1.2.2)', description: 'Calculate soil drainage rates using measured water volumes.' }
    ],
    whatsIncluded: [
      'Basic 4.1 experiment apparatus & sorting trays',
      'Full-color NaCCA-aligned student experiment handbook',
      'Observation chart & growth measurement ruler',
      'Seed packets (beans & maize) for immediate setup'
    ],
    requiresSoldering: false,
    batteryInfo: 'No batteries required'
  },
  {
    id: 'science-set-4-2',
    slug: 'ges-science-set-basic-4-2',
    title: 'Science Set 4.2 — Sun, Shadows, Earth Cycles & Magnetism',
    tagline: 'Hands-on physics and astronomy kit for Basic 4 Term 2: Sundial shadow tracking, earth rotation, and magnetic poles.',
    category: 'Basic 4',
    gesCurriculumCode: 'NaCCA / GES B4.2.1.1, B4.2.2.1 & B4.4.1.1',
    gradeLevel: 'Primary 4 (Basic 4)',
    term: 'Term 2',
    experiments: [
      'Sun & shadow length tracking throughout the day',
      'Constructing and calibrating an improvised sundial',
      'Magnetic attraction, repulsion, and pole orientation',
      'Observing weather factors with an improvised rain gauge'
    ],
    ageRange: 'Ages 8–10',
    ageMin: 8,
    ageMax: 10,
    difficulty: 'Beginner',
    priceGHS: 125,
    originalPriceGHS: 155,
    priceUSD: 10,
    originalPriceUSD: 13,
    rating: 4.8,
    reviewsCount: 29,
    salesCount: 118,
    stockCount: 11,
    badge: '☀️ BASIC 4 • TERM 2 (GES / NaCCA)',
    accentColor: '#f59e0b',
    gradient: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)',
    image: '/images/kits/science-set-4-2.jpg',
    labRoute: '/stem',
    labName: 'Earth Science & Astronomy Lab',
    overview: 'Bring earth science and magnetism alive! Pupils build a functional sundial, discover how the Earth’s rotation creates daytime shadows, measure local rainfall, and explore invisible magnetic forces with bar and ring magnets.',
    skills: [
      'Shadow Geometry & Solar Angles',
      'Magnetic Force Fields',
      'Weather Metric Tracking',
      'Directional Compass Navigation'
    ],
    components: [
      { name: 'Precision Magnetic Bar & Horseshoe Magnets', qty: '2 units', detail: 'Color-coded North/South poles with iron filings capsule' },
      { name: 'Gnomon Sundial Baseplate & Solar Compass', qty: '1 unit', detail: 'Calibrated protractor base for plotting shadow movements' },
      { name: 'Clear Funnel Rain Gauge Tube (100mm)', qty: '1 unit', detail: 'Weather measurement collector for daily precipitation tracking' },
      { name: 'Magnetic Floating Ring Pole Stand', qty: '1 set', detail: 'Demonstrates magnetic levitation and repulsion' },
      { name: 'Mini Directional Pocket Compass', qty: '1 unit', detail: 'Liquid-filled dial for magnetic meridian alignment' }
    ],
    curriculumMatches: [
      { missionTitle: 'Strand 2: Earth & Space Cycles (B4.2.1.1)', description: 'Plot hourly shadow lengths and determine true solar noon.' },
      { missionTitle: 'Strand 3: Weather Systems (B4.2.2.1)', description: 'Collect and record rainfall millimeters across a 5-day school week.' },
      { missionTitle: 'Strand 4: Forces & Energy — Magnetism (B4.4.1.1)', description: 'Map invisible magnetic flux lines using the iron filings chamber.' }
    ],
    whatsIncluded: [
      'Sundial gnomon apparatus & angle plate',
      'Rain gauge tube and magnetic pole test kit',
      'Sealed iron filings flux visualizer',
      'Step-by-step experiment activity manual'
    ],
    requiresSoldering: false,
    batteryInfo: 'No batteries required'
  },
  {
    id: 'science-set-4-3',
    slug: 'ges-science-set-basic-4-3',
    title: 'Science Set 4.3 — Dry Cells, Elasticity & Simple Circuits',
    tagline: 'Directly aligned to Basic 4 Term 3: Chemical dry cell creation, elastic force laws, and basic closed loops.',
    category: 'Basic 4',
    gesCurriculumCode: 'NaCCA / GES B4.4.2.1, B4.4.2.2 & B4.4.3.1',
    gradeLevel: 'Primary 4 (Basic 4)',
    term: 'Term 3',
    experiments: [
      'Making a dry cell (Electrochemical battery)',
      'Elastic forces & spring extension (Hooke’s principle)',
      'Compression force & load-bearing structures',
      'Building a simple electrical circuit with switch & bulb'
    ],
    ageRange: 'Ages 8–10',
    ageMin: 8,
    ageMax: 10,
    difficulty: 'Beginner',
    priceGHS: 130,
    originalPriceGHS: 160,
    priceUSD: 11,
    originalPriceUSD: 14,
    rating: 5.0,
    reviewsCount: 41,
    salesCount: 189,
    stockCount: 16,
    badge: '⚡ BASIC 4 • TERM 3 (CIRCUITS & FORCES)',
    accentColor: '#eab308',
    gradient: 'linear-gradient(135deg, #ca8a04 0%, #eab308 100%)',
    image: '/images/kits/science-set-4-3.jpg',
    labRoute: '/coding',
    labName: 'Circuits & Mechanical Physics Lab',
    overview: 'A hands-on physical science triumph! As featured in the GES curriculum, students construct an improvised dry cell from zinc and carbon electrodes, test elastic extension with calibrated springs, and wire their first lighted circuit.',
    skills: [
      'Electrochemical Reactions',
      'Tension & Compression Physics',
      'Closed Circuit Mechanics',
      'Electrical Polarity'
    ],
    components: [
      { name: 'Electrochemical Cell Assembly Canister', qty: '1 unit', detail: 'Zinc casing, carbon rod electrode, and electrolyte paste chamber' },
      { name: 'Precision Steel Helical Spring & Indicator Pointer', qty: '2 units', detail: 'Dual calibrated spring scales for tension & elastic load tests' },
      { name: 'Miniature Screw-Base Bulbs & Bulb Holders', qty: '2 sets', detail: '2.5V 0.3A incandescent lamps with screw sockets' },
      { name: 'Knife Switch & Alligator Clip Lead Wires', qty: '4 pcs', detail: 'High-visibility mechanical circuit breaker and copper wires' },
      { name: 'AA Cell Battery Cradle Station', qty: '1 unit', detail: 'Sturdy battery holder with positive/negative color coding' }
    ],
    curriculumMatches: [
      { missionTitle: 'Strand 4: Electricity & Energy — Dry Cell (B4.4.2.1)', description: 'Assemble carbon-zinc electrodes to generate measurable voltage.' },
      { missionTitle: 'Strand 4: Forces — Elastic & Compression (B4.4.2.2)', description: 'Plot weight vs spring stretch to visualize Hooke’s elastic response.' },
      { missionTitle: 'Strand 4: Electricity — Simple Circuit (B4.4.3.1)', description: 'Connect lamp, power supply, and knife switch to control a lamp.' }
    ],
    whatsIncluded: [
      'Electrochemical cell parts (zinc, carbon, separator)',
      'Dual spring dynamometer setup and slotted masses',
      '2x bulbs, 2x holders, knife switch, and jumper leads',
      'Student practical guide with Ghana curriculum indicators'
    ],
    requiresSoldering: false,
    batteryInfo: '1x AA battery cradle included'
  },
  {
    id: 'science-set-5-1',
    slug: 'ges-science-set-basic-5-1',
    title: 'Science Set 5.1 — Clouds in a Bottle, Day & Night, Phototropism',
    tagline: 'Basic 5 Term 1 science kit: Atmospheric condensation, globe orbital mechanics, and plant light tropism.',
    category: 'Basic 5',
    gesCurriculumCode: 'NaCCA / GES B5.1.1.1, B5.2.1.1 & B5.2.1.3',
    gradeLevel: 'Primary 5 (Basic 5)',
    term: 'Term 1',
    experiments: [
      'Clouds in a bottle (Pressure & condensation nuclei)',
      'Day and night rotation model with illuminated globe',
      'Phototropism (Light-seeking plant stem bending)'
    ],
    ageRange: 'Ages 9–11',
    ageMin: 9,
    ageMax: 11,
    difficulty: 'Intermediate',
    priceGHS: 135,
    originalPriceGHS: 165,
    priceUSD: 11,
    originalPriceUSD: 14,
    rating: 4.9,
    reviewsCount: 38,
    salesCount: 162,
    stockCount: 12,
    badge: '☁️ BASIC 5 • TERM 1 (CLOUDS & TROPISM)',
    accentColor: '#06b6d4',
    gradient: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
    image: '/images/kits/science-set-5-1.jpg',
    labRoute: '/stem',
    labName: 'Earth, Atmosphere & Botanical Lab',
    overview: 'Recreate natural planetary phenomena right inside the classroom! Students build atmospheric pressure to generate instant indoor fog clouds, simulate how Earth’s 24-hour spin creates sunrise and sunset in Ghana, and construct a light maze to observe botanical phototropism.',
    skills: [
      'Thermodynamic Phase Changes',
      'Axial Rotation & Solar Illumination',
      'Hormonal Plant Directional Growth',
      'Atmospheric Dew Point'
    ],
    components: [
      { name: 'Pneumatic Cloud Chamber Flask & Pump Stopper', qty: '1 set', detail: 'Rapid pressure valve and aerosol condensation chamber' },
      { name: 'Axial Rotating Earth Globe & Pivot Stand', qty: '1 unit', detail: 'Pre-printed continental sphere with Ghana latitude marker' },
      { name: 'Collimated LED Sun-Beam Torch', qty: '1 unit', detail: 'Parallel light beam emitter simulating distant sunlight rays' },
      { name: 'Phototropism Baffled Growth Chamber', qty: '1 set', detail: 'Light-tight seedling box with adjustable aperture baffles' },
      { name: 'Quick-Germinating Fast Seed Pods', qty: '2 packs', detail: 'High-vigor seeds ideal for rapid 48-hour tropism bending' }
    ],
    curriculumMatches: [
      { missionTitle: 'Strand 1: Earth Atmosphere (B5.1.1.1)', description: 'Pressurize vapor and trigger instant cloud formation via decompression.' },
      { missionTitle: 'Strand 2: Earth & Space — Day & Night (B5.2.1.1)', description: 'Simulate Accra sunrise, midday meridian, and night cycle with globe and beam.' },
      { missionTitle: 'Strand 2: Plant Sensitivity & Responses (B5.2.1.3)', description: 'Guide plant stems through maze baffles toward single light slit.' }
    ],
    whatsIncluded: [
      'Cloud creation chamber with hand pressure bulb',
      'Desktop rotating globe with solar beam torch',
      'Tropism dark-box with optical light aperture slides',
      'Illustrated step-by-step NaCCA student worksheet'
    ],
    requiresSoldering: false,
    batteryInfo: 'Torch requires 2x AAA batteries (included)'
  },
  {
    id: 'science-set-5-2',
    slug: 'ges-science-set-basic-5-2',
    title: 'Science Set 5.2 — Human Respiratory Model & Food Nutrient Testing',
    tagline: 'Basic 5 Term 2 anatomy & chemistry kit: Working diaphragm lungs, iodine starch testing, and chemical separation.',
    category: 'Basic 5',
    gesCurriculumCode: 'NaCCA / GES B5.2.2.1, B5.3.1.1 & B5.3.2.1',
    gradeLevel: 'Primary 5 (Basic 5)',
    term: 'Term 2',
    experiments: [
      'Modelling the human respiratory system (Diaphragm & lungs)',
      'Testing food nutrients for starch using safe iodine indicator',
      'Separating mixtures through filtration and evaporation',
      'Observing reversible physical vs irreversible chemical changes'
    ],
    ageRange: 'Ages 9–11',
    ageMin: 9,
    ageMax: 11,
    difficulty: 'Intermediate',
    priceGHS: 135,
    originalPriceGHS: 170,
    priceUSD: 11,
    originalPriceUSD: 14,
    rating: 4.9,
    reviewsCount: 47,
    salesCount: 173,
    stockCount: 15,
    badge: '🫁 BASIC 5 • TERM 2 (ORGANS & NUTRITION)',
    accentColor: '#a855f7',
    gradient: 'linear-gradient(135deg, #9333ea 0%, #a855f7 100%)',
    image: '/images/kits/science-set-5-2.jpg',
    labRoute: '/stem',
    labName: 'Human Biology & Chemistry Lab',
    overview: 'An unforgettable practical biology journey. Pupils construct a mechanical lung model with latex diaphragms to see how thoracic cavity pressure expands lung lobes, and use food-safe chemical indicators to detect complex carbohydrates in Ghanaian staple foods (yam, plantain, rice).',
    skills: [
      'Respiratory Anatomy & Pressure',
      'Qualitative Chemical Reagents',
      'Mixture Separation Methods',
      'Biochemical Nutrition Analysis'
    ],
    components: [
      { name: 'Clear Bell-Jar Thoracic Chamber & Y-Trachea Tube', qty: '1 set', detail: 'Transparent chest model with twin expandable latex lungs' },
      { name: 'Rubber Elastic Diaphragm Sheet & Handle', qty: '1 unit', detail: 'Demonstrates downward inhale pull and upward exhale push' },
      { name: 'Safe Starch Iodine Indicator Dropper Bottle (15ml)', qty: '1 unit', detail: 'Food reagent turning blue-black in the presence of starch' },
      { name: 'Borosilicate Glass Test Tubes & Rack Stand', qty: '4 tubes', detail: 'Chemical-resistant tubes with cleaning brush and rack' },
      { name: 'Ceramic Evaporating Dish & Wire Gauze Mat', qty: '1 set', detail: 'Heat-resistant labware for water evaporation experiments' }
    ],
    curriculumMatches: [
      { missionTitle: 'Strand 2: Human Body Systems (B5.2.2.1)', description: 'Assemble and pull the diaphragm to demonstrate lung gas exchange.' },
      { missionTitle: 'Strand 3: Food Nutrients & Diets (B5.3.1.1)', description: 'Spot-test bread, cassava, and oil for starch color change.' },
      { missionTitle: 'Strand 3: Separation of Mixtures (B5.3.2.1)', description: 'Recover pure table salt from sand-salt solution via filtration and evaporation.' }
    ],
    whatsIncluded: [
      'Lung model assembly (jar, Y-tube, balloons, diaphragm)',
      'Test tube rack, 4x tubes, and reagent droppers',
      'Safe iodine solution bottle & spot plate',
      'Ghana curriculum student activity workbook'
    ],
    requiresSoldering: false,
    batteryInfo: 'No batteries required'
  },
  {
    id: 'science-set-5-3',
    slug: 'ges-science-set-basic-5-3',
    title: 'Science Set 5.3 — Friction, Energy Conversion & Series/Parallel Circuits',
    tagline: 'Basic 5 Term 3 physics powerhouse: Kinetic friction comparison, energy conversion, and multi-bulb circuit branches.',
    category: 'Basic 5',
    gesCurriculumCode: 'NaCCA / GES B5.4.3.1, B5.5.4.1.1 & B5.5.4.1.2',
    gradeLevel: 'Primary 5 (Basic 5)',
    term: 'Term 3',
    experiments: [
      'Friction testing across diverse surface textures',
      'Transformation of electrical energy to light, sound, and mechanical motion',
      'Constructing a series electrical circuit (voltage division)',
      'Constructing a parallel electrical circuit (independent branches)'
    ],
    ageRange: 'Ages 9–11',
    ageMin: 9,
    ageMax: 11,
    difficulty: 'Intermediate',
    priceGHS: 140,
    originalPriceGHS: 175,
    priceUSD: 12,
    originalPriceUSD: 15,
    rating: 5.0,
    reviewsCount: 52,
    salesCount: 215,
    stockCount: 10,
    badge: '🔋 BASIC 5 • TERM 3 (SERIES/PARALLEL)',
    accentColor: '#3b82f6',
    gradient: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
    image: '/images/kits/science-set-5-3.jpg',
    labRoute: '/coding',
    labName: 'Electricity & Classical Mechanics Lab',
    overview: 'The quintessential physics set! Students measure frictional resistance over sandpaper, glass, and wood with a spring balance, convert electrical energy into spinning motors, acoustic buzzers, and bulbs, and master the fundamental difference between series and parallel household wiring.',
    skills: [
      'Frictional Coefficients',
      'Energy Transformation Laws',
      'Series Circuit Voltage Division',
      'Parallel Circuit Current Division'
    ],
    components: [
      { name: 'Multi-Surface Friction Sled (Wood, Sandpaper, Felt, Acrylic)', qty: '1 unit', detail: 'Standardized mass block with side pull hook' },
      { name: 'Direct-Reading Newton Spring Dynamometer (5N)', qty: '1 unit', detail: 'Calibrated force meter measuring frictional pull force' },
      { name: 'Twin Miniature DC Motors & Propeller Blades', qty: '2 units', detail: 'Converts electricity to mechanical kinetic motion' },
      { name: 'Twin Screw-Base Bulbs & Dual SPST Toggle Switches', qty: '2 sets', detail: 'Independent branch switches for parallel circuit control' },
      { name: 'Heavy-Duty 3V Battery Power Holder with Leads', qty: '1 unit', detail: 'Series-parallel connection terminals with quick-clips' }
    ],
    curriculumMatches: [
      { missionTitle: 'Strand 4: Forces & Motion — Friction (B5.4.3.1)', description: 'Measure dynamic and static friction across 4 texture types.' },
      { missionTitle: 'Strand 5: Energy Transformation (B5.5.4.1.1)', description: 'Chain chemical energy (cell) -> electrical -> kinetic (fan) & sound (buzzer).' },
      { missionTitle: 'Strand 5: Series vs Parallel Circuits (B5.5.4.1.2)', description: 'Prove why unscrewing one parallel bulb keeps the other illuminated.' }
    ],
    whatsIncluded: [
      '4-sided textured friction sled & 5N spring balance',
      '2x DC motors with fan blades & acoustic buzzer',
      '3x bulbs with holders and 2x circuit switches',
      '6x color-coded alligator jumper cables and user manual'
    ],
    requiresSoldering: false,
    batteryInfo: 'Requires 2x AA batteries (included)'
  },
  {
    id: 'science-set-6-1',
    slug: 'ges-science-set-basic-6-1',
    title: 'Science Set 6.1 — Frog/Mosquito Life Cycles, Skin Anatomy & Filtration',
    tagline: 'Basic 6 Term 1 biology & ecology: Amphibian & vector metamorphosis, integumentary skin layers, and multi-tier water filtration.',
    category: 'Basic 6',
    gesCurriculumCode: 'NaCCA / GES B6.2.1.1, B6.2.1.2 & B6.2.1.4',
    gradeLevel: 'Primary 6 (Basic 6)',
    term: 'Term 1',
    experiments: [
      'Complete life cycle of the mosquito (Egg -> Larva -> Pupa -> Adult)',
      'Metamorphosis life cycle of the frog (Tadpole to adult)',
      'Structure and function of human skin (Epidermis, Dermis, Sweat pores)',
      'Building a multi-stage water purification filtration column'
    ],
    ageRange: 'Ages 10–13',
    ageMin: 10,
    ageMax: 13,
    difficulty: 'Intermediate',
    priceGHS: 145,
    originalPriceGHS: 180,
    priceUSD: 12,
    originalPriceUSD: 15,
    rating: 4.9,
    reviewsCount: 44,
    salesCount: 198,
    stockCount: 9,
    badge: '🔬 BASIC 6 • TERM 1 (LIFE CYCLES & WATER)',
    accentColor: '#10b981',
    gradient: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
    image: '/images/kits/science-set-6-1.jpg',
    labRoute: '/stem',
    labName: 'Life Sciences & Environmental Lab',
    overview: 'Deepen scientific mastery in Basic 6! Pupils explore entomological life cycles to understand malaria prevention in Ghana, study tactile 3D skin layer models showing thermal regulation through perspiration, and engineer clean water filters using activated charcoal, quartz sand, and gravel.',
    skills: [
      'Biological Metamorphosis',
      'Disease Vector Prevention',
      'Integumentary Biology',
      'Multi-Layer Water Purification'
    ],
    components: [
      { name: '4-Stage Metamorphosis Specimen Replicas (Mosquito & Frog)', qty: '2 sets', detail: 'Realistic detailed developmental stages from egg to adult' },
      { name: '3D Cross-Sectional Human Skin Anatomy Model', qty: '1 unit', detail: 'Color-coded layers highlighting hair follicles, sebaceous glands & nerve endings' },
      { name: 'Tiered Water Purification Filter Column & Sieve Disks', qty: '1 unit', detail: 'Stackable transparent filtration tube with collection beaker' },
      { name: 'Natural Filter Media (Activated Carbon, Quartz, Fine Sand)', qty: '3 packs', detail: 'High-purity media for removing physical particulates and odor' },
      { name: 'Micro-Observation Dish & Hand Lens', qty: '1 set', detail: 'For examining sediment turbidity before and after filtration' }
    ],
    curriculumMatches: [
      { missionTitle: 'Strand 2: Cycles — Mosquito Life Cycle (B6.2.1.1)', description: 'Identify breeding stages and determine optimal points for malaria intervention.' },
      { missionTitle: 'Strand 2: Cycles — Frog Metamorphosis (B6.2.1.2)', description: 'Trace gill-to-lung transition and tail resorption in amphibians.' },
      { missionTitle: 'Strand 2: Organ Systems — Human Skin (B6.2.1.4)', description: 'Explore sweat gland evaporative cooling and tactile sensations.' }
    ],
    whatsIncluded: [
      'Mosquito & frog lifecycle models in storage blister',
      'Human skin anatomical cross-section display piece',
      'Complete multi-tier water filter column & media pouches',
      'Comprehensive Ghana GES-aligned project logbook'
    ],
    requiresSoldering: false,
    batteryInfo: 'No batteries required'
  },
  {
    id: 'science-set-6-2',
    slug: 'ges-science-set-basic-6-2',
    title: 'Science Set 6.2 — Improvised Thermometer, Kidney Model & Solar System',
    tagline: 'Basic 6 Term 2 hands-on laboratory: Thermal fluid expansion, excretory kidney clay model, and planetary solar orbits.',
    category: 'Basic 6',
    gesCurriculumCode: 'NaCCA / GES B6.2.2.1, B6.3.1.1, B6.3.2.1 & B6.4.1.1',
    gradeLevel: 'Primary 6 (Basic 6)',
    term: 'Term 2',
    experiments: [
      'Making an improvised liquid thermometer (Thermal liquid expansion)',
      'Modelling the human kidney & urinary system with modeling dough',
      'Maize plant seed germination & cotyledon development',
      'Modelling the 8 planets of the Solar System with orbital scale'
    ],
    ageRange: 'Ages 10–13',
    ageMin: 10,
    ageMax: 13,
    difficulty: 'Advanced',
    priceGHS: 145,
    originalPriceGHS: 180,
    priceUSD: 12,
    originalPriceUSD: 15,
    rating: 5.0,
    reviewsCount: 49,
    salesCount: 204,
    stockCount: 13,
    badge: '🌡️ BASIC 6 • TERM 2 (THERMOMETER & SPACE)',
    accentColor: '#ec4899',
    gradient: 'linear-gradient(135deg, #db2777 0%, #ec4899 100%)',
    image: '/images/kits/science-set-6-2.jpg',
    labRoute: '/stem',
    labName: 'Applied Physics & Human Anatomy Lab',
    overview: 'A masterpiece of practical STEM learning! Basic 6 pupils build their own liquid thermometer with colored alcohol and narrow bore capillary tubes to measure Celsius thermal expansion, sculpt a working kidney model showing renal filtration, track monocot maize growth, and assemble the solar system.',
    skills: [
      'Thermal Fluid Dynamics & Temperature Scales',
      'Excretory Filtration Anatomy',
      'Monocot Agricultural Biology',
      'Planetary Astronomy'
    ],
    components: [
      { name: 'Improvised Thermometer Flask & Capillary Scale Tube', qty: '1 set', detail: 'Sealed bulb with millimeter graduation scale and colored fluid' },
      { name: 'Medical-Grade Modeling Dough & Organ Sculpting Tools', qty: '4 colors', detail: 'Non-toxic clay for kidney cortex, medulla & ureter construction' },
      { name: 'Maize Germination Grid & Nutrient Matrix', qty: '1 unit', detail: 'Clear grid dish for monitoring tap roots and shoot coleoptiles' },
      { name: '3D Solar System Planet Spheres & Revolving Arm Stand', qty: '1 set', detail: 'Color-accurate planets on calibrated orbital radius wire arms' },
      { name: 'Temperature Calibration Reference Card (0°C to 100°C)', qty: '1 unit', detail: 'Guide for ice bath and hot water calibration markers' }
    ],
    curriculumMatches: [
      { missionTitle: 'Strand 2: Temperature & Heat (B6.2.2.1)', description: 'Calibrate liquid rising height against hot vs cold water baths.' },
      { missionTitle: 'Strand 3: Excretory Systems — The Kidney (B6.3.1.1)', description: 'Model renal blood vessels, nephron filters, and ureter tubes.' },
      { missionTitle: 'Strand 3: Plant Reproduction — Maize (B6.3.2.1)', description: 'Record radical emergence and monocot leaf sheath development.' },
      { missionTitle: 'Strand 4: Earth & Space — Solar System (B6.4.1.1)', description: 'Sequence 8 planets by distance from the Sun and orbital periods.' }
    ],
    whatsIncluded: [
      'Thermometer flask, capillary tube, rubber stopper and dye',
      '4-color anatomy dough kit and sculpting spatula',
      'Monocot maize seed germination station',
      'Full revolving 8-planet mechanical solar system model'
    ],
    requiresSoldering: false,
    batteryInfo: 'No batteries required'
  },
  {
    id: 'science-set-6-3',
    slug: 'ges-science-set-basic-6-3',
    title: 'Science Set 6.3 — Electromagnets, Conductors & Circuit Buzzers',
    tagline: 'Basic 6 Term 3 physics & electromagnetism: Soft iron core coils, electrical conductivity testing, and security buzzers.',
    category: 'Basic 6',
    gesCurriculumCode: 'NaCCA / GES B6.4.2.1, B6.4.3.1 & B6.5.1.1',
    gradeLevel: 'Primary 6 (Basic 6)',
    term: 'Term 3',
    experiments: [
      'Building an electromagnet using soft iron core & enameled copper coil',
      'Testing electrical conductivity of common materials (Metals vs Non-metals)',
      'Wiring an electric door buzzer & alarm indicator circuit',
      'Reversible vs irreversible chemical changes'
    ],
    ageRange: 'Ages 10–13',
    ageMin: 10,
    ageMax: 13,
    difficulty: 'Advanced',
    priceGHS: 150,
    originalPriceGHS: 185,
    priceUSD: 13,
    originalPriceUSD: 16,
    rating: 5.0,
    reviewsCount: 56,
    salesCount: 230,
    stockCount: 8,
    badge: '🧲 BASIC 6 • TERM 3 (ELECTROMAGNETS)',
    accentColor: '#0d9488',
    gradient: 'linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)',
    image: '/images/kits/science-set-6-3.jpg',
    labRoute: '/robotics',
    labName: 'Electromagnetism & Electronics Lab',
    overview: 'The capstone science kit for Basic 6! Pupils harness electromagnetic fields by winding insulated copper around high-permeability iron cores, test magnetic pick-up strength against turns of wire, construct acoustic security alarm circuits, and classify chemical reactions.',
    skills: [
      'Electromagnetic Induction',
      'Conductor vs Insulator Testing',
      'Circuit Alarm Engineering',
      'Chemical Reaction Dynamics'
    ],
    components: [
      { name: 'Soft Iron Core Core Rod & Enameled Copper Wire Spool (10m)', qty: '1 set', detail: 'High magnetic saturation core with sandpaper lead strippers' },
      { name: 'Steel Paperclip & Iron Tack Strength Load Tester', qty: '1 box', detail: 'For measuring electromagnetic force as current or turns increase' },
      { name: 'Material Conductivity Testing Probe Station', qty: '1 set', detail: 'Assorted copper, graphite, zinc, rubber, plastic, and wood test swatches' },
      { name: 'Electronic Magnetic Buzzer & Tactile Push Button', qty: '1 unit', detail: 'High-decibel acoustic indicator for alarm circuits' },
      { name: 'Double D-Cell High-Current Battery Station', qty: '1 unit', detail: 'Delivers continuous amperage needed for strong magnetic fields' }
    ],
    curriculumMatches: [
      { missionTitle: 'Strand 4: Electromagnetism (B6.4.2.1)', description: 'Wind 50 vs 100 turns of copper wire and compare paperclip lifting counts.' },
      { missionTitle: 'Strand 4: Electrical Conductivity (B6.4.3.1)', description: 'Categorize copper, water, graphite, and plastics by conductivity.' },
      { missionTitle: 'Strand 5: Chemical Changes (B6.5.1.1)', description: 'Compare reversible phase changes with irreversible rusting and oxidation.' }
    ],
    whatsIncluded: [
      'Soft iron core bar, 10m enameled wire, and lead stripper',
      'Conductivity tester block with 8 material coupons',
      'Acoustic buzzer, indicator switch, and lamp holder',
      'Double battery station and step-by-step experiment handbook'
    ],
    requiresSoldering: false,
    batteryInfo: 'Requires 2x AA or D batteries (included)'
  }
];

export const SCHOOL_PACK_OFFERING = {
  title: 'Kone Academy School & Club STEM Lab Pack',
  subtitle: 'Equip an entire classroom or coding club with classroom-ready hardware kits, multi-seat teacher dashboards, and curriculum lesson plans.',
  minQuantity: 10,
  image: '/images/kits/school-stem-pack.jpg',
  features: [
    '10x or 20x STEM Kits of your choice (Rover, IoT, or Junior)',
    '1x Teacher Master Station with replacement spare parts kit',
    'Curriculum Lesson Plans mapped to Ghana GES & International STEM standards',
    'Free 3-hour virtual or in-person teacher training workshop (Accra & online)',
    'Teacher Dashboard multi-student progress tracking licenses included',
    'Dedicated WhatsApp priority hardware support channel'
  ],
  contactPhone: '+233 55 199 3820',
  contactEmail: 'philipkone45@gmail.com'
};
