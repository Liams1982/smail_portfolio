/* ============================================================
   PROJECT DATA — Smail Lotmani
   To add a project, copy a block and edit the fields.
   ------------------------------------------------------------
   thumbnail : path to image, or null for a placeholder icon
   org       : company / institution (or null)
   period    : display string, e.g. "Aug 2023 – Apr 2024"
   link      : external URL (or null)
   skills    : short list shown as accent tags
   keywords  : longer list shown as muted tags
   ============================================================ */

const PROJECTS = [
  {
    id: 1,
    featured: true,
    title: "Vertex — Programming Language & IDE",
    org: null,
    period: "Aug 2026 – Aug 2026",
    thumbnail: null,
    link: "https://github.com/Liams1982/Vertex_IDE",
    description:
      "A brand new programming language inspired by Delphi and C++. " +
      "Includes a companion IDE and a compiler/toolchain built to explore " +
      "how classic Pascal-style syntax can meet modern C++ performance.",
    skills: ["C++", "Python"],
    keywords: ["Programming Language", "Compiler", "IDE", "Delphi", "C++"],
    photos: [],
    videos: []
  },
  {
    id: 2,
    featured: true,
    title: "Electronic Control System for Crawler Pipeline Painting Robot",
    org: null,
    period: "Aug 2023 – Apr 2024",
    thumbnail: null,
    link: null,
    description:
      "Designed an electronic control system for a crawler pipeline painting robot, " +
      "integrating four interconnected circuits powered by Microchip PIC microcontrollers. " +
      "The system manages wheel motors and the paint ejection system, enabling precise operation. " +
      "The interface includes a keyboard and LCD display, allowing users to input various settings, " +
      "monitor performance, and initiate the robot's tasks — ensuring effective and controlled " +
      "painting operations on pipelines.",
    skills: ["Microchip PIC", "Microcontrollers", "Motor Control", "Embedded Systems", "PCB Design"],
    keywords: [
      "Crawler Robot", "Pipeline Painting", "Paint Ejection", "User Interface", "LCD Display"
    ],
    photos: [],
    videos: []
  },
  {
    id: 3,
    featured: true,
    title: "Electronic Control System for Wheelchairs",
    org: "Arris Electronics and Robotics",
    period: "Aug 2022 – Oct 2023",
    thumbnail: null,
    link: null,
    description:
      "Led design and development of an advanced electronic control system for wheelchairs, " +
      "featuring a custom joystick PCB and a high-performance power board with MOSFETs and relays. " +
      "Built around a PIC microcontroller for precise PWM motor speed control, the system integrates " +
      "blinkers and brake controls for enhanced safety and functionality. The project demonstrates " +
      "expertise in electronics engineering and innovative problem-solving, delivering a solution " +
      "that improves mobility and user experience.",
    skills: ["Power Electronics", "Motor Control", "PIC", "PCB Design", "PWM", "Embedded Systems"],
    keywords: ["Joystick PCB", "MOSFET", "Relays", "Assistive Technology"],
    photos: [],
    videos: []
  },
  {
    id: 4,
    featured: true,
    title: "Autonomous Mobile Robot — Eurobot International Competition",
    org: "Eurobot",
    period: "Dec 2011 – Apr 2012",
    thumbnail: null,
    link: null,
    description:
      "Designed and built a fully autonomous mobile robot for the Eurobot international competition, " +
      "achieving 2nd place in the national (Algerian) tournament. The robot integrated ultrasonic " +
      "and optical sensors, servo and stepper motors, and DC drive systems. Developed using a " +
      "PIC16F876A microcontroller programmed in mikroC, with custom PCB and power supply design " +
      "to support robust, real-time operation.",
    skills: ["PIC16F876A", "mikroC", "Embedded Systems", "PCB Design"],
    keywords: [
      "Autonomous Robot", "Ultrasonic Sensors", "Optical Sensor", "Servo Motors",
      "Stepper Motors", "DC Motors", "Eurobot"
    ],
    photos: [],
    videos: []
  },
  {
    id: 5,
    title: "Design of an Embedded Pulse Oximeter",
    org: "University Mouloud Mammeri Tizi-Ouzou",
    period: "Feb 2010 – Jul 2010",
    thumbnail: null,
    link: null,
    description:
      "Designed and developed a wireless, low-cost pulse oximeter for real-time monitoring of heart " +
      "rate and blood oxygen saturation (SpO₂). The system includes an optical sensor, analog signal " +
      "conditioning, microcontroller-based digital processing (PIC16F877), and 433 MHz FM/FSK wireless " +
      "transmission to a PC interface. Tested successfully on volunteers, the device demonstrated " +
      "reliable performance for telemedicine and home healthcare applications.\n\n" +
      "Published in Measurement Science Review, Vol. 10, No. 5, 2010.",
    skills: ["PIC16F877", "Embedded Systems", "Analog Design", "RF"],
    keywords: [
      "Pulse Oximeter", "SpO2", "Wireless", "Telemedicine", "Medical Devices",
      "433 MHz", "FM/FSK"
    ],
    photos: [],
    videos: []
  },
  {
    id: 6,
    title: "Excel-Based After-Sales & Maintenance Tool for Laser Medical Devices",
    org: null,
    period: "Nov 2021 – May 2022",
    thumbnail: null,
    link: null,
    description:
      "Designed and developed a custom Excel VBA application to streamline installation, maintenance, " +
      "and after-sales service for laser medical machines. The tool features automated report generation, " +
      "customer and equipment database tracking, and auto-filled intervention logs. Each maintenance " +
      "action is recorded with automatic date handling, machine type tracking, and client-specific " +
      "history for efficient follow-up and service traceability.",
    skills: ["Excel VBA", "Automation"],
    keywords: [
      "After-Sales Management", "Maintenance Log", "Medical Devices",
      "Customer Database", "Service Reporting", "Laser Equipment"
    ],
    photos: [],
    videos: []
  },
  {
    id: 7,
    title: "Refrigerator Control Circuit Design",
    org: "Arris Electronics and Robotics",
    period: "Mar 2021 – Sep 2021",
    thumbnail: null,
    link: null,
    description:
      "Developed an ultra-compact control circuit for refrigerators using the PIC16F1825 microcontroller. " +
      "The system includes NTC thermistor-based temperature monitoring, compressor control, and various " +
      "safety features for optimal refrigerator operation. Designed the schematic and PCB layout, " +
      "ensuring a compact and efficient design that meets performance and space constraints.",
    skills: ["PIC16F1825", "PCB Design", "Embedded Systems"],
    keywords: [
      "Refrigerator Control", "NTC Thermistor", "Compressor Control",
      "Ultra-Compact PCB", "Schematic Design", "Temperature Monitoring"
    ],
    photos: [],
    videos: []
  },
  {
    id: 8,
    title: "Remotely Controlled Sliding Door Controller",
    org: "Arris Electronics and Robotics",
    period: "Mar 2018 – Feb 2019",
    thumbnail: null,
    link: null,
    description:
      "Developed a PIC16F628A-based control box for automated sliding doors, featuring secure " +
      "rolling-code remote control. Integrated multiple programmable parameters such as door opening " +
      "time, auto-close delay, and user-configurable settings. Designed for mass production, the system " +
      "was manufactured in series and distributed nationwide, contributing to the modernization of " +
      "automated access systems across the region.",
    skills: ["PIC16F628A", "Microcontrollers", "PCB Design", "Embedded Systems"],
    keywords: [
      "Rolling Code", "Sliding Door Automation", "Remote Control",
      "Parameter Programming", "Mass Production", "Access Control"
    ],
    photos: [],
    videos: []
  },
  {
    id: 9,
    title: "Bi-Color LED Countdown Timer for Traffic Lights",
    org: "Arris Electronics and Robotics",
    period: "Jun 2018 – Sep 2018",
    thumbnail: null,
    link: null,
    description:
      "Designed and implemented a bi-color (red/green) LED countdown circuit for traffic signal systems " +
      "using a PIC microcontroller. The project included the complete hardware development of three " +
      "interconnected PCBs, managing timing logic, power distribution, and LED control. The system " +
      "provides a visual countdown for traffic lights, enhancing road safety and traffic flow.",
    skills: ["PIC", "PCB Design", "Embedded Systems"],
    keywords: [
      "Traffic Light Countdown", "Bi-Color LED", "Timing Control", "Signal Automation"
    ],
    photos: [],
    videos: []
  },
  {
    id: 10,
    title: "USB HID-Controlled LED Matrix Display",
    org: null,
    period: "Jun 2017 – Mar 2018",
    thumbnail: null,
    link: null,
    description:
      "Designed and developed a custom LED matrix display controlled via USB HID protocol, using a PIC " +
      "microcontroller. The system allows users to send text or patterns from a PC directly to the LED " +
      "matrix without needing special drivers, enabling real-time updates and interactive displays. " +
      "Focused on low-level USB communication, firmware development in C, and efficient LED control " +
      "for smooth visual output.",
    skills: ["USB HID", "PIC", "Firmware", "C", "PCB Design"],
    keywords: ["LED Matrix", "USB Communication", "Embedded Systems"],
    photos: [],
    videos: []
  },
  {
    id: 11,
    title: "CAN Bus Signal Simulator — Vehicle Communication Testing",
    org: null,
    period: "Feb 2013 – May 2013",
    thumbnail: null,
    link: null,
    description:
      "Developed a CAN bus signal simulator using the LPCXpresso platform paired with a custom-designed " +
      "PCB to emulate real-time automotive communication signals. The system generates and transmits " +
      "CAN frames replicating various vehicle parameters such as engine RPM, speed, and sensor outputs. " +
      "This simulator is designed for testing and validating ECUs, diagnostic tools, and other CAN-based " +
      "systems in a controlled lab environment — eliminating the need for live vehicle data.",
    skills: ["CAN Bus", "LPCXpresso", "PCB Design", "Embedded Systems"],
    keywords: [
      "Automotive Electronics", "Signal Simulation", "ECU Testing", "Real-Time Communication"
    ],
    photos: [],
    videos: []
  },
  {
    id: 12,
    title: "ChronoAsm — PIC16F84 Chronometer",
    org: "University Mouloud Mammeri Tizi-Ouzou",
    period: "2009",
    thumbnail: null,
    link: null,
    description:
      "A digital chronometer (stopwatch) built using the PIC16F84 microcontroller programmed in Microchip " +
      "assembly language. It solves the PIC's limited I/O pin problem by using 74HC164 shift registers to " +
      "control four 7-segment displays via a custom serial protocol.\n\n" +
      "Thanks to carefully crafted delay loops and precise instruction cycle counting, the chronometer " +
      "maintains high accuracy.",
    skills: ["Microchip PIC", "Assembly Language", "PIC16F84"],
    keywords: ["Shift Registers", "74HC164", "7-Segment Display", "Serial Protocol"],
    photos: [],
    videos: []
  },
  {
    id: 13,
    title: "Design of a Robot — Eurobot Competition",
    org: "Eurobot",
    period: "Nov 2010 – Jun 2011",
    thumbnail: null,
    link: null,
    description:
      "Design of a robot for the Eurobot competition — mechanical structure, drive system, " +
      "sensor integration, and embedded control.",
    skills: ["Robotics", "Embedded Systems"],
    keywords: ["Eurobot"],
    photos: [],
    videos: []
  }
];