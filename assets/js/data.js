/* ============================================================
   PROJECT DATA - Smail Lotmani
   ------------------------------------------------------------
   Media paths per project (add files later):
     thumbnail : images/projects/{id}/thumb.jpg
     photos    : images/projects/{id}/1.jpg and /2.jpg
     videos    : videos/projects/{id}/1.mp4 and /2.mp4
   If a path 404s, the card falls back to a placeholder icon.
   ============================================================ */

const PROJECTS = [
  {
    id: 1,
    featured: true,
    title: "Crawler Robot Control System",
    org: "Arris Electronics & Robotics",
    period: "2023 - 2024",
    thumbnail: "images/projects/1/thumb.jpg",
    link: null,
    description:
      "Designed the complete embedded control system for an industrial crawler robot used in pipeline inspection and painting.\n\n" +
      "Hardware Architecture: three custom PCBs:\n" +
      "• Main Control Board: PIC16F876A MCU, GPIO interface to sensor board\n" +
      "• Power Board: Relays, ULN2803 drivers, voltage regulators, boost converter\n" +
      "• HMI Board: PIC16F876A MCU, keypad, LCD display, navigation buttons\n\n" +
      "Sensor interface uses a PIC16F88 handling ping sensors, water sensors, and a magnetic switch for automatic startup. " +
      "Custom serial UART protocol with acknowledgment and data verification links HMI and main board. " +
      "A second HMI connects via Ethernet for remote control.\n\n" +
      "Firmware is bare-metal C with a custom mini-RTOS built on a switch-loop and interrupts. " +
      "Autonomous error recovery: sensor detects void → \"Track Fail\" error → motors reverse automatically.\n\n" +
      "Key debugging story: LCD displayed garbage characters with no compiler errors. After two days of investigation, " +
      "a stack overflow corrupting adjacent memory was identified. Code was optimized by moving large structures to the heap, " +
      "reducing stack usage, and storing string constants in EEPROM with indexing.\n\n" +
      "Outcome: Successfully deployed in real industrial environments.",
    skills: ["PIC16F876A", "PIC16F88", "Bare-metal C", "PCB Design", "UART", "Custom mini-RTOS"],
    keywords: [
      "Crawler Robot", "Pipeline Inspection", "Power Board", "HMI",
      "Sensor Fusion", "Autonomous Recovery", "Stack Overflow Debug"
    ],
    photos: ["images/projects/1/1.jpg", "images/projects/1/2.jpg"],
    videos: ["videos/projects/1/1.mp4", "videos/projects/1/2.mp4"]
  },
  {
    id: 2,
    featured: true,
    title: "Eurobot Competition Robots",
    org: "Eurobot",
    period: "2011 - 2013",
    thumbnail: "images/projects/2/thumb.jpg",
    link: null,
    description:
      "Three fully autonomous mobile robots designed and built from scratch for the Eurobot international competition. " +
      "Achieved 2nd place in Algeria and 32nd place at the World Cup (France).\n\n" +
      "2012 Robot (Solo, 4 months):\n" +
      "• Mechanical: 3D modeled and built full frame, drivetrain, and gripper mechanism\n" +
      "• Electronics: Custom PCBs, power board with L298 H-bridges and L297 stepper controllers\n" +
      "• Firmware: Bare-metal C on PIC16F876A and PIC16F84, modular libraries for SRF02 ultrasonic sensors " +
      "using register-level I²C, I²C motor drivers, and servo control\n\n" +
      "DIY Color Sensor: Two LDRs and two LEDs (red and blue) with an op-amp comparator. " +
      "The LED that reflected more light onto its LDR determined the color. Pure discrete analog electronics, " +
      "no camera or image processing.",
    skills: ["PIC16F876A", "PIC16F84", "Bare-metal C", "I²C", "Robotics", "Stepper Control"],
    keywords: [
      "Autonomous Robot", "SRF02 Ultrasonic", "Stepper Motors", "Servo Control",
      "Custom Optic Sensor", "Mechanical Design", "Eurobot"
    ],
    photos: ["images/projects/2/1.jpg", "images/projects/2/2.jpg"],
    videos: ["videos/projects/2/1.mp4", "videos/projects/2/2.mp4"]
  },
  {
    id: 3,
    featured: true,
    title: "Wheelchair Electronic Control System",
    org: "Arris Electronics & Robotics",
    period: "2022 - 2023",
    thumbnail: "images/projects/3/thumb.jpg",
    link: null,
    description:
      "Safety-critical embedded firmware for a motorized wheelchair with fault detection and graceful degradation.\n\n" +
      "Custom joystick interface PCB and high-performance power board using MOSFETs and relays. " +
      "Built around a PIC microcontroller for precise PWM motor speed control. " +
      "Integrated blinkers and brake controls for enhanced safety.",
    skills: ["PIC", "Power Electronics", "PWM", "PCB Design", "Safety-Critical"],
    keywords: ["Wheelchair", "Joystick PCB", "MOSFET", "Relays", "Assistive Technology"],
    photos: ["images/projects/3/1.jpg", "images/projects/3/2.jpg"],
    videos: ["videos/projects/3/1.mp4", "videos/projects/3/2.mp4"]
  },
  {
    id: 4,
    featured: true,
    title: "CAN Bus / J1939 Protocol Simulator",
    org: "LVSC Mediterranee",
    period: "2012 - 2013",
    thumbnail: "images/projects/4/thumb.jpg",
    link: null,
    description:
      "Designed, built, and tested CAN Bus and J1939 protocol simulators for GPS and telematics system validation.\n\n" +
      "Hardware and firmware from scratch on ARM Cortex-M3 (LPC1768) using the LPCXpresso IDE. " +
      "Low-level communication drivers for CAN and serial interfaces.\n\n" +
      "The simulator generates and transmits CAN frames replicating vehicle parameters such as engine RPM, speed, " +
      "and sensor outputs, allowing ECUs, diagnostic tools, and CAN-based systems to be validated in a lab " +
      "environment without live vehicle data.",
    skills: ["ARM Cortex-M3", "LPC1768", "CAN Bus", "J1939", "Firmware"],
    keywords: [
      "Automotive Electronics", "Telematics", "GPS", "Signal Simulation",
      "ECU Testing"
    ],
    photos: ["images/projects/4/1.jpg", "images/projects/4/2.jpg"],
    videos: ["videos/projects/4/1.mp4", "videos/projects/4/2.mp4"]
  },
  {
    id: 5,
    title: "Traffic Light Controllers & Garage Door Openers",
    org: "Arris Electronics & Robotics",
    period: "2017 - 2019",
    thumbnail: "images/projects/5/thumb.jpg",
    link: null,
    description:
      "Custom embedded control systems with timers, relays, sensors, and safety interlocks.\n\n" +
      "Bicolor LED innovation: used two relays to reverse current direction and bidirectional buffers " +
      "to allow current to pass back and forth, more economical than H-bridges for multiple LEDs.\n\n" +
      "Traffic light controller included three interconnected PCBs handling timing logic, power distribution, " +
      "and LED control. Garage door controllers use rolling-code remote control and configurable parameters " +
      "(opening time, auto-close delay). Design went into series production and nationwide distribution.",
    skills: ["PIC16F628A", "PCB Design", "Embedded Systems", "Rolling Code"],
    keywords: [
      "Traffic Light", "Bicolor LED", "Current Reversal", "Garage Door",
      "Access Control", "Mass Production"
    ],
    photos: ["images/projects/5/1.jpg", "images/projects/5/2.jpg"],
    videos: ["videos/projects/5/1.mp4", "videos/projects/5/2.mp4"]
  },
  {
    id: 6,
    title: "In-House SMT Production Line",
    org: "Arris Electronics & Robotics",
    period: "2015 - 2025",
    thumbnail: "images/projects/6/thumb.jpg",
    link: null,
    description:
      "Managed the complete SMT assembly line end-to-end: pick-and-place programming, reflow profiling, " +
      "stencil design, and quality control. Produced over 1,000 assembled PCBs for prototyping and mid-range manufacturing.\n\n" +
      "Closed the loop between firmware, hardware, and manufacturing, enabling rapid iteration on new designs " +
      "without depending on external assembly houses.",
    skills: ["SMT Assembly", "Reflow Profiling", "Pick-and-Place", "QC", "DFM"],
    keywords: ["Manufacturing", "Stencil Design", "Prototyping", "Mid-Range Production"],
    photos: ["images/projects/6/1.jpg", "images/projects/6/2.jpg"],
    videos: ["videos/projects/6/1.mp4", "videos/projects/6/2.mp4"]
  },
  {
    id: 7,
    title: "Medical Laser Systems: Service & Automation",
    org: "Skin Medical System",
    period: "2021 - 2022",
    thumbnail: "images/projects/7/thumb.jpg",
    link: null,
    description:
      "Maintained and repaired Class IV dermatological laser systems in the field. " +
      "Diagnostics, calibration, and preventive maintenance with high first-visit resolution rate.\n\n" +
      "Developed custom Excel VBA automation tools for service operations: automated report generation, " +
      "customer and equipment database tracking, and auto-filled intervention logs with date handling " +
      "and client-specific history.",
    skills: ["Class IV Lasers", "Field Service", "Excel VBA", "Diagnostics", "Calibration"],
    keywords: [
      "Medical Devices", "After-Sales", "Maintenance Log", "Laser Equipment",
      "Service Reporting"
    ],
    photos: ["images/projects/7/1.jpg", "images/projects/7/2.jpg"],
    videos: ["videos/projects/7/1.mp4", "videos/projects/7/2.mp4"]
  },
  {
    id: 8,
    title: "Legacy Thermostat Redesign",
    org: "Arris Electronics & Robotics",
    period: "2015 - 2020",
    thumbnail: "images/projects/8/thumb.jpg",
    link: null,
    description:
      "Reverse-engineered an obsolete industrial thermostat control board to bring it back into production. " +
      "Replaced discontinued components with modern equivalents, redesigned the PCB layout, and improved EMC robustness.\n\n" +
      "Delivered a drop-in replacement that extended product life without a full redesign of the surrounding system.",
    skills: ["Reverse Engineering", "PCB Redesign", "EMC", "Component Substitution"],
    keywords: ["Legacy Support", "Industrial Control", "Thermostat"],
    photos: ["images/projects/8/1.jpg", "images/projects/8/2.jpg"],
    videos: ["videos/projects/8/1.mp4", "videos/projects/8/2.mp4"]
  },
  {
    id: 9,
    title: "Automotive Electronics: Security Systems",
    org: "Self-Employed",
    period: "2022 - 2025",
    thumbnail: "images/projects/9/thumb.jpg",
    link: null,
    description:
      "Installed and diagnosed alarm, immobilizer, and GPS anti-theft systems for over 200 vehicles. " +
      "Advanced troubleshooting and full system integration across a wide range of makes and models.",
    skills: ["Automotive", "Alarm Systems", "GPS Tracking", "Diagnostics"],
    keywords: ["Immobilizer", "Anti-Theft", "System Integration"],
    photos: ["images/projects/9/1.jpg", "images/projects/9/2.jpg"],
    videos: ["videos/projects/9/1.mp4", "videos/projects/9/2.mp4"]
  },
  {
    id: 10,
    title: "PIC Assembly Chronometer",
    org: "University of Tizi Ouzou",
    period: "2008",
    thumbnail: "images/projects/10/thumb.jpg",
    link: "https://github.com/Liams1982",
    description:
      "First microcontroller system design, completed two years before graduation. " +
      "PIC microcontroller programmed in Microchip assembly language.\n\n" +
      "Custom two-wire serial protocol using shift registers to drive seven-segment displays. " +
      "working around the PIC's limited I/O pins. Careful delay loops and instruction-cycle counting " +
      "keep the chronometer accurate.\n\n" +
      "Project available on GitHub.",
    skills: ["PIC", "Assembly Language", "Shift Registers", "Seven-Segment"],
    keywords: ["Microchip Assembly", "Custom Serial Protocol", "Student Project"],
    photos: ["images/projects/10/1.jpg", "images/projects/10/2.jpg"],
    videos: ["videos/projects/10/1.mp4", "videos/projects/10/2.mp4"]
  },
  {
    id: 11,
    title: "STM32 FreeRTOS Learning Project",
    org: "Personal",
    period: "2025",
    thumbnail: "images/projects/11/thumb.jpg",
    link: null,
    description:
      "Hands-on exploration of FreeRTOS on STM32 (Nucleo-F446RE) using STM32CubeIDE and CubeMX. " +
      "Blinking LED driven by FreeRTOS tasks, applying OOP principles in embedded C.",
    skills: ["STM32", "FreeRTOS", "STM32CubeIDE", "CubeMX"],
    keywords: ["RTOS", "Task Scheduling", "Embedded C"],
    photos: ["images/projects/11/1.jpg", "images/projects/11/2.jpg"],
    videos: []
  },
  {
    id: 12,
    title: "Zynq-7010 / FPGA Exploration",
    org: "Personal",
    period: "2025",
    thumbnail: "images/projects/12/thumb.jpg",
    link: null,
    description:
      "Exploration of the EBAZ4205 board (Zynq-7010) with the Vivado toolchain. " +
      "Builds on earlier VHDL experience with the Xilinx Basys2 (2012).",
    skills: ["VHDL", "Zynq-7010", "Vivado", "FPGA"],
    keywords: ["FPGA", "Xilinx", "EBAZ4205", "Basys2"],
    photos: ["images/projects/12/1.jpg", "images/projects/12/2.jpg"],
    videos: []
  }
];

/* ============================================================
   EXPERIENCE
   ============================================================ */
const EXPERIENCE = [
  {
    role: "SMT Electronics Technician & NPI Support",
    company: "BRP Megatech",
    location: "Shawinigan, QC",
    period: "Feb 2026 - Jul 2026"
  },
  {
    role: "Embedded Systems Engineer / Founder",
    company: "Arris Electronics & Robotics",
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
    role: "Automotive Electronics Engineer (Self-Employed)",
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
    role: "Production Engineer & Maintenance Engineer",
    company: "SAEMO Sidi Rached",
    location: "Algeria",
    period: "May 2013 - Jul 2013"
  },
  {
    role: "Electronics Engineering Designer (R&D)",
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
    title: "Embedded Systems & Firmware",
    items: [
      "Bare-metal C", "FreeRTOS", "Register-level programming",
      "PIC (16F84, 876A, 88, 628A, 1827)", "ARM Cortex-M3 (LPC1768)",
      "STM32 (Nucleo-F446RE)", "AVR", "Real-time applications",
      "Firmware optimization", "Custom state machines"
    ]
  },
  {
    title: "Communication Protocols",
    items: [
      "I²C (register-level)", "SPI", "UART", "RS-232", "RS-485",
      "CAN Bus", "J1939", "Modbus", "TCP/IP", "Ethernet",
      "GSM/GPS (AT commands)"
    ]
  },
  {
    title: "Motor Control & Robotics",
    items: [
      "DC / Stepper / Servo control", "PID", "Trajectory planning",
      "Sensor integration (ultrasonic, optical, LDR, water)"
    ]
  },
  {
    title: "Hardware & PCB Design",
    items: [
      "Eagle", "Proteus", "DesignSpark PCB", "KiCad", "OrCAD",
      "Schematic capture", "PCB layout", "30+ boards designed",
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
    title: "Tools & Software",
    items: [
      "STM32CubeIDE", "Keil", "mikroC", "LPCXpresso", "mbed",
      "Arduino IDE", "SolidWorks", "Git", "CMake"
    ]
  },
  {
    title: "Testing & Diagnostics",
    items: [
      "Oscilloscopes", "Logic analyzers", "Power meters",
      "Multimeters", "JTAG/SWD", "Root cause analysis", "Field testing"
    ]
  },
  {
    title: "FPGA & Mechanical",
    items: [
      "VHDL (Xilinx Basys2)", "Zynq-7010 (EBAZ4205)",
      "Lathes, mills, CNC, G-code"
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
      "Specialization: Embedded Systems, Instrumentation, and Control Systems.",
      "One of the last graduates of the Ingénieur d'État program (5-year traditional engineering degree, no longer offered).",
      "First two years: quantum mechanics, atomic physics, statistical mechanics, vibrations and waves, relativity, rational mechanics, linear algebra, calculus, mechanical fabrication (lathes, mills, CNC, G-code).",
      "Instrumentation specialization: semiconductor fabrication, photolithography, wafer characterization, acoustics, magnetism, dielectrics, measurement instruments, optoelectronics."
    ]
  }
];
