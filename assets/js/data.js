/* ============================================================
   PROJECT DATA - Smail Lotmani
   ------------------------------------------------------------
   Media paths per project (add files later):
     thumbnail : assets/images/projects/{id}/thumb.jpg
     photos    : assets/images/projects/{id}/1.jpg and /2.jpg
     videos    : assets/videos/projects/{id}/1.mp4 and /2.mp4
   If a path 404s, the card falls back to a placeholder icon.
   ============================================================ */

const PROJECTS = [
  {
    id: 1,
    featured: true,
    title: "Vertex - Programming Language and IDE",
    org: null,
    period: "2026",
    thumbnail: "assets/images/projects/1/thumb.jpg",
    link: "https://github.com/Liams1982/Vertex_IDE",
    description:
      "A brand new programming language inspired by Delphi and C++, with a companion IDE. " +
      "Built to explore how classic Pascal-style syntax can meet modern C++ performance.",
    skills: ["C++", "Python", "Compiler Design", "IDE"],
    keywords: ["Programming Language", "Delphi", "C++", "Toolchain"],
    photos: [
      "assets/images/projects/1/1.jpg",
      "assets/images/projects/1/2.jpg"
    ],
    videos: [
      "assets/videos/projects/1/1.mp4",
      "assets/videos/projects/1/2.mp4"
    ]
  },
  {
    id: 2,
    featured: true,
    title: "Crawler Robot Control System",
    org: "Arris Electronics and Robotics",
    period: "2023 - 2024",
    thumbnail: "assets/images/projects/2/thumb.jpg",
    link: null,
    description:
      "Designed the complete embedded control system for an industrial crawler robot used in " +
      "pipeline inspection. Three custom PCBs: main control board, power board, and HMI board " +
      "with keypad, LCD, and navigation buttons.\n\n" +
      "The power board carries relays, ULN2803 drivers, voltage regulators, and a boost converter. " +
      "Two PIC16F876A MCUs handle main control and HMI, with a PIC16F88 for sensor interface. " +
      "A custom serial UART protocol with acknowledgment and data verification links the boards. " +
      "Ping sensors, water sensors, and a magnetic switch enable automatic startup. A second HMI " +
      "via Ethernet cable allows remote control.\n\n" +
      "Firmware is bare-metal C with a custom mini-RTOS built on a switch-loop and interrupts, " +
      "no FreeRTOS. Autonomous error recovery detects voids under the tracks and reverses the " +
      "motors automatically after a Track Fail event.",
    skills: ["PIC16F876A", "PIC16F88", "Bare-metal C", "PCB Design", "UART"],
    keywords: [
      "Crawler Robot", "Pipeline Inspection", "Power Board", "HMI",
      "Sensor Fusion", "Autonomous Recovery"
    ],
    photos: [
      "assets/images/projects/2/1.jpg",
      "assets/images/projects/2/2.jpg"
    ],
    videos: [
      "assets/videos/projects/2/1.mp4",
      "assets/videos/projects/2/2.mp4"
    ]
  },
  {
    id: 3,
    featured: true,
    title: "Eurobot Competition Robots",
    org: "Eurobot",
    period: "2011 - 2013",
    thumbnail: "assets/images/projects/3/thumb.jpg",
    link: null,
    description:
      "Three fully autonomous mobile robots designed and built from scratch for the Eurobot " +
      "international competition. Placed 2nd in the Algerian national tournament and 32nd at " +
      "the World Cup. The 2012 robot was designed and built solo in four months.\n\n" +
      "Custom PCBs, bare-metal C on PIC16F876A and PIC16F84. Modular libraries for SRF02 " +
      "ultrasonic sensors using register-level I2C, L298 and L297 motor drivers for steppers, " +
      "and servo control. The gripper used a DIY optical sensor built from an op-amp comparator, " +
      "two LDRs, and red and blue LEDs.\n\n" +
      "Full mechanical design, 3D modeling, drivetrain, and frame built by hand.",
    skills: ["PIC16F876A", "PIC16F84", "Bare-metal C", "I2C", "Robotics"],
    keywords: [
      "Autonomous Robot", "SRF02 Ultrasonic", "Stepper Motors", "Servo Control",
      "Custom Optic Sensor", "Mechanical Design"
    ],
    photos: [
      "assets/images/projects/3/1.jpg",
      "assets/images/projects/3/2.jpg"
    ],
    videos: [
      "assets/videos/projects/3/1.mp4",
      "assets/videos/projects/3/2.mp4"
    ]
  },
  {
    id: 4,
    featured: true,
    title: "Wheelchair Electronic Control System",
    org: "Arris Electronics and Robotics",
    period: "2022 - 2023",
    thumbnail: "assets/images/projects/4/thumb.jpg",
    link: null,
    description:
      "Embedded firmware for a motorized wheelchair, built as a safety-critical system with " +
      "fault detection and graceful degradation. Custom joystick PCB and a high-performance " +
      "power board using MOSFETs and relays. Built around a PIC microcontroller for precise " +
      "PWM motor speed control. Integrated blinkers and brake controls for enhanced safety.",
    skills: ["PIC", "Power Electronics", "PWM", "PCB Design", "Safety"],
    keywords: ["Wheelchair", "Joystick PCB", "MOSFET", "Relays", "Assistive Tech"],
    photos: [
      "assets/images/projects/4/1.jpg",
      "assets/images/projects/4/2.jpg"
    ],
    videos: [
      "assets/videos/projects/4/1.mp4",
      "assets/videos/projects/4/2.mp4"
    ]
  },
  {
    id: 5,
    title: "Traffic Light Controllers and Garage Door Openers",
    org: "Arris Electronics and Robotics",
    period: "2017 - 2019",
    thumbnail: "assets/images/projects/5/thumb.jpg",
    link: null,
    description:
      "Custom embedded control systems with timers, relays, sensors, and safety interlocks. " +
      "Bi-color LED driving uses current reversal with relays and bidirectional buffers, which " +
      "is more economical than H-bridges for this application.\n\n" +
      "Traffic light controller project included three interconnected PCBs handling timing logic, " +
      "power distribution, and LED control. Sliding door and garage door controllers use rolling " +
      "code remote control and configurable parameters like opening time and auto-close delay, " +
      "with a design that went into series production and nationwide distribution.",
    skills: ["PIC16F628A", "PCB Design", "Embedded Systems", "Rolling Code"],
    keywords: [
      "Traffic Light", "Bicolor LED", "Current Reversal", "Garage Door",
      "Access Control", "Mass Production"
    ],
    photos: [
      "assets/images/projects/5/1.jpg",
      "assets/images/projects/5/2.jpg"
    ],
    videos: [
      "assets/videos/projects/5/1.mp4",
      "assets/videos/projects/5/2.mp4"
    ]
  },
  {
    id: 6,
    title: "CAN Bus and J1939 Protocol Simulator",
    org: "LVSC Mediterranee",
    period: "2012 - 2013",
    thumbnail: "assets/images/projects/6/thumb.jpg",
    link: null,
    description:
      "Designed, built, and tested prototypes for GPS and telematics system validation. " +
      "Hardware and firmware from scratch on ARM Cortex-M3 (LPC1768) using the LPCXpresso IDE. " +
      "Low-level communication drivers for CAN and serial interfaces.\n\n" +
      "The simulator generates and transmits CAN frames replicating vehicle parameters such as " +
      "engine RPM, speed, and sensor outputs, allowing ECUs, diagnostic tools, and CAN-based " +
      "systems to be validated in a lab environment without needing live vehicle data.",
    skills: ["ARM Cortex-M3", "LPC1768", "CAN Bus", "J1939", "Firmware"],
    keywords: [
      "Automotive Electronics", "Telematics", "GPS", "Signal Simulation",
      "ECU Testing", "FreeRTOS"
    ],
    photos: [
      "assets/images/projects/6/1.jpg",
      "assets/images/projects/6/2.jpg"
    ],
    videos: [
      "assets/videos/projects/6/1.mp4",
      "assets/videos/projects/6/2.mp4"
    ]
  },
  {
    id: 7,
    title: "In-House SMT Production Line",
    org: "Arris Electronics and Robotics",
    period: "2015 - 2025",
    thumbnail: "assets/images/projects/7/thumb.jpg",
    link: null,
    description:
      "Managed the complete SMT assembly line end to end: pick-and-place programming, reflow " +
      "profiling, stencil design, and quality control. Produced over 1,000 assembled PCBs for " +
      "prototyping and mid-range manufacturing.\n\n" +
      "This closed the loop between firmware, hardware, and manufacturing, letting the practice " +
      "iterate quickly on new designs without depending on external assembly houses.",
    skills: ["SMT Assembly", "Reflow Profiling", "Pick-and-Place", "QC", "DFM"],
    keywords: ["Manufacturing", "Stencil Design", "Prototyping", "Mid-Range Production"],
    photos: [
      "assets/images/projects/7/1.jpg",
      "assets/images/projects/7/2.jpg"
    ],
    videos: [
      "assets/videos/projects/7/1.mp4",
      "assets/videos/projects/7/2.mp4"
    ]
  },
  {
    id: 8,
    title: "Medical Laser Systems - Service and Automation",
    org: "Skin Medical System",
    period: "2021 - 2022",
    thumbnail: "assets/images/projects/8/thumb.jpg",
    link: null,
    description:
      "Maintained and repaired Class IV dermatological laser systems in the field. " +
      "Achieved a high first-visit resolution rate through systematic diagnostics.\n\n" +
      "Developed a custom Excel VBA application to streamline installation, maintenance, and " +
      "after-sales service. The tool handles automated report generation, customer and equipment " +
      "database tracking, and auto-filled intervention logs with automatic date handling and " +
      "client-specific history.",
    skills: ["Class IV Lasers", "Field Service", "Excel VBA", "Diagnostics"],
    keywords: [
      "Medical Devices", "After-Sales", "Maintenance Log", "Laser Equipment",
      "Service Reporting"
    ],
    photos: [
      "assets/images/projects/8/1.jpg",
      "assets/images/projects/8/2.jpg"
    ],
    videos: [
      "assets/videos/projects/8/1.mp4",
      "assets/videos/projects/8/2.mp4"
    ]
  },
  {
    id: 9,
    title: "Legacy Thermostat Redesign",
    org: "Arris Electronics and Robotics",
    period: "2015 - 2020",
    thumbnail: "assets/images/projects/9/thumb.jpg",
    link: null,
    description:
      "Reverse-engineered an obsolete industrial thermostat control board to bring it back into " +
      "production. Replaced discontinued components with modern equivalents, redesigned the PCB " +
      "layout, and improved EMC robustness.\n\n" +
      "Delivered a drop-in replacement that extended the product life without a full redesign " +
      "of the surrounding system.",
    skills: ["Reverse Engineering", "PCB Redesign", "EMC", "Component Substitution"],
    keywords: ["Legacy Support", "Industrial Control", "Thermostat"],
    photos: [
      "assets/images/projects/9/1.jpg",
      "assets/images/projects/9/2.jpg"
    ],
    videos: [
      "assets/videos/projects/9/1.mp4",
      "assets/videos/projects/9/2.mp4"
    ]
  },
  {
    id: 10,
    title: "Automotive Electronics - Security Systems",
    org: "Self-Employed",
    period: "2022 - 2025",
    thumbnail: "assets/images/projects/10/thumb.jpg",
    link: null,
    description:
      "Installed and diagnosed alarm, immobilizer, and GPS anti-theft systems for over 200 " +
      "vehicles. Advanced troubleshooting and full system integration across a wide range of " +
      "makes and models.",
    skills: ["Automotive", "Alarm Systems", "GPS Tracking", "Diagnostics"],
    keywords: ["Immobilizer", "Anti-Theft", "System Integration"],
    photos: [
      "assets/images/projects/10/1.jpg",
      "assets/images/projects/10/2.jpg"
    ],
    videos: [
      "assets/videos/projects/10/1.mp4",
      "assets/videos/projects/10/2.mp4"
    ]
  },
  {
    id: 11,
    title: "PIC Assembly Chronometer",
    org: "University of Tizi Ouzou",
    period: "2008",
    thumbnail: "assets/images/projects/11/thumb.jpg",
    link: null,
    description:
      "First microcontroller system design, completed two years before graduation. Built on a " +
      "PIC MCU in Microchip assembly language.\n\n" +
      "To work around the PIC's limited I/O pins, the design uses a custom two-wire serial " +
      "protocol driving shift registers to control four seven-segment displays. Careful delay " +
      "loops and instruction cycle counting keep the chronometer accurate.",
    skills: ["PIC", "Assembly Language", "Shift Registers", "Seven-Segment"],
    keywords: ["Microchip Assembly", "Custom Serial Protocol", "Student Project"],
    photos: [
      "assets/images/projects/11/1.jpg",
      "assets/images/projects/11/2.jpg"
    ],
    videos: [
      "assets/videos/projects/11/1.mp4",
      "assets/videos/projects/11/2.mp4"
    ]
  }
];

/* ============================================================
   EXPERIENCE
   ============================================================ */
const EXPERIENCE = [
  {
    role: "SMT Electronics Technician and NPI Support",
    company: "BRP Megatech",
    location: "Shawinigan, QC",
    period: "Feb 2026 - Jul 2026"
  },
  {
    role: "Embedded Systems Engineer and Founder",
    company: "Arris Electronics and Robotics",
    location: "Algeria",
    period: "Mar 2015 - Dec 2025"
  },
  {
    role: "Electronics Field Service Engineer",
    company: "ETS Boukhalfa",
    location: "Algeria",
    period: "Dec 2024 - Dec 2025"
  },
  {
    role: "Automotive Electronics Engineer (Self-Employed, Part-Time)",
    company: "Custom Automotive Security",
    location: "Algeria",
    period: "Jul 2022 - Dec 2025"
  },
  {
    role: "Medical Equipment Field Service Engineer",
    company: "Skin Medical System",
    location: "Algeria",
    period: "Jun 2021 - Jul 2022"
  },
  {
    role: "Production and Maintenance Engineer",
    company: "SAEMO Sidi Rached",
    location: "Algeria",
    period: "May 2013 - Jul 2013"
  },
  {
    role: "Electronics Engineering Designer (R&D), Embedded Firmware",
    company: "LVSC Mediterranee",
    location: "Algeria",
    period: "Dec 2012 - Apr 2013"
  }
];

/* ============================================================
   SKILL GROUPS
   ============================================================ */
const SKILL_GROUPS = [
  {
    title: "Embedded Systems and Firmware",
    items: [
      "Bare-metal C", "FreeRTOS (working knowledge)", "Register-level programming",
      "PIC (16F84, 876A, 88, 628A, 1827)", "ARM Cortex-M3 (LPC1768)",
      "STM32 (Nucleo-F446RE)", "AVR", "Real-time applications",
      "Firmware optimization", "Custom state machines"
    ]
  },
  {
    title: "Communication Protocols",
    items: [
      "I2C (register-level)", "SPI", "UART", "RS-232", "RS-485",
      "CAN Bus", "J1939", "Modbus", "TCP/IP", "Ethernet",
      "GSM/GPS (AT commands)"
    ]
  },
  {
    title: "Motor Control and Robotics",
    items: [
      "DC motor control", "Stepper motor control", "Servo control",
      "PID", "Trajectory planning",
      "Sensor integration (ultrasonic, optical, LDR, water)"
    ]
  },
  {
    title: "Hardware and PCB Design",
    items: [
      "Altium", "Eagle", "KiCad", "DesignSpark", "OrCAD",
      "Schematic capture", "Layout", "30+ boards designed",
      "SMT assembly", "DFM"
    ]
  },
  {
    title: "Programming Languages",
    items: [
      "C", "C++", "Python", "Delphi", "JavaScript",
      "PHP", "HTML", "MySQL", "Excel VBA"
    ]
  },
  {
    title: "Tools and Software",
    items: [
      "STM32CubeIDE", "Keil", "mikroC", "LPCXpresso", "mbed",
      "Arduino IDE", "SolidWorks", "Git", "CMake"
    ]
  },
  {
    title: "Testing and Diagnostics",
    items: [
      "Oscilloscopes", "Logic analyzers", "Power meters",
      "JTAG/SWD", "Root cause analysis", "Field testing"
    ]
  }
];

const LANGUAGES = [
  { name: "Berber", level: "Native" },
  { name: "Arabic", level: "Fluent" },
  { name: "French", level: "Fluent" },
  { name: "English", level: "Fluent" }
];

const EDUCATION = [
  {
    degree: "Master's Degree in Electronics Engineering",
    school: "University of Tizi Ouzou, Algeria",
    period: "2002 - 2010",
    notes: [
      "Specialization in Embedded Systems, Instrumentation, and Control Systems.",
      "One of the last graduates of the Ingenieur d'Etat program, which is no longer offered.",
      "Two years of general engineering: quantum mechanics, atomic physics, statistical mechanics, waves, relativity, rational mechanics, linear algebra, calculus.",
      "Instrumentation specialization: semiconductor fabrication, photolithography, wafer characterization, acoustics, magnetism, dielectrics, measurement instruments.",
      "Mechanical fabrication training: lathes, mills, CNC, G-code."
    ]
  }
];