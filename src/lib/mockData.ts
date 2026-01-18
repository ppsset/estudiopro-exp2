export const standards = ["NFPA", "IEC", "BS"] as const;
export const categories = [
  "Protection",
  "Cables",
  "Power Quality",
  "Codes",
  "Case Study"
] as const;

export const newsFeed = [
  {
    id: "news-1",
    title: "NFPA 70 update: coordination guidance for critical facilities",
    summary:
      "A quick overview of coordination considerations for mission-critical sites and how to document selective coordination assumptions.",
    source: "NFPA Journal",
    standard: "NFPA",
    category: "Protection",
    time: "2h ago",
    region: "North America",
    thumbnail: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=800&auto=format&fit=crop",
    saved: 142,
    link: "https://www.nfpa.org/"
  },
  {
    id: "news-2",
    title: "IEC 60364: Voltage drop design checklist for commercial towers",
    summary:
      "Key notes on allowable voltage drop, feeder sizing, and documentation for multi-tenant commercial buildings.",
    source: "IEC Insights",
    standard: "IEC",
    category: "Cables",
    time: "5h ago",
    region: "EMEA",
    thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
    saved: 98,
    link: "https://www.iec.ch/"
  },
  {
    id: "news-3",
    title: "BS 7671 amendments: documenting protective device settings",
    summary:
      "How to annotate protective device settings and labeling requirements for compliance reviews.",
    source: "BSI Update",
    standard: "BS",
    category: "Codes",
    time: "1d ago",
    region: "UK",
    thumbnail: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=800&auto=format&fit=crop",
    saved: 76,
    link: "https://www.bsigroup.com/"
  }
];

export const designModules = [
  {
    slug: "estimation-load",
    title: "Estimation Load",
    description: "Estimate connected and demand load profiles."
  },
  {
    slug: "protective-device-setting",
    title: "Protective Device Setting",
    description: "Set trip curves and coordination points."
  },
  {
    slug: "short-circuit",
    title: "Short Circuit",
    description: "Calculate initial symmetrical fault current."
  },
  {
    slug: "voltage-drop",
    title: "Voltage Drop",
    description: "Evaluate feeder and branch voltage drop."
  },
  {
    slug: "power-factor-correction",
    title: "Power Factor Correction",
    description: "Size capacitors and correction targets."
  },
  {
    slug: "power-quality",
    title: "Power Quality",
    description: "Assess harmonics and distortion."
  },
  {
    slug: "conductor-sizing",
    title: "Conductor Sizing",
    description: "Select conductor size with derating."
  },
  {
    slug: "raceway-sizing",
    title: "Raceway Sizing",
    description: "Choose raceway size and fill limits."
  }
];

export const projectSummaries = [
  {
    id: "project-1",
    name: "Riverside Medical Center",
    location: "Austin, TX",
    client: "Riverside Health",
    voltage: "480/277V",
    systemType: "Commercial",
    updated: "Today",
    status: "On track",
    tags: ["hospital", "critical"]
  },
  {
    id: "project-2",
    name: "North Loop Data Campus",
    location: "Dublin, IE",
    client: "Nordic Cloud",
    voltage: "400/230V",
    systemType: "Infrastructure",
    updated: "Yesterday",
    status: "Needs review",
    tags: ["data center", "IEC"]
  }
];

export const moduleRuns = [
  {
    id: "run-1",
    module: "Short Circuit",
    updated: "2024-06-21 09:22",
    result: "42 kA",
    status: "Current"
  },
  {
    id: "run-2",
    module: "Voltage Drop",
    updated: "2024-06-20 14:08",
    result: "2.1%",
    status: "Current"
  },
  {
    id: "run-3",
    module: "Protective Device Setting",
    updated: "2024-06-19 16:55",
    result: "Coordination ok",
    status: "Draft"
  }
];

export const knowledgeTopics = [
  {
    id: "knowledge-1",
    title: "Fundamentals of 1-Phase and 3-Phase Systems",
    category: "Fundamentals",
    summary: "Foundational electrical quantities and system behavior.",
    outline: ["Power triangle", "Three-phase balance", "Demand factors"],
    terms: ["kVA", "kW", "PF", "Line voltage"]
  },
  {
    id: "knowledge-2",
    title: "Earthing & Grounding Concepts",
    category: "Earthing/Grounding",
    summary: "Core grounding methods, electrodes, and bonding.",
    outline: ["Earthing objectives", "Equipment bonding", "Ground resistance"],
    terms: ["NEC 250", "Earth electrode", "Bonding jumper"]
  },
  {
    id: "knowledge-3",
    title: "Protection Fundamentals",
    category: "Protection",
    summary: "OCPD basics, coordination, and selectivity.",
    outline: ["Device types", "Trip curves", "Coordination study"],
    terms: ["OCPD", "Selective coordination", "Coordination time"]
  },
  {
    id: "knowledge-4",
    title: "Short Circuit Basics",
    category: "Short Circuit",
    summary: "Understanding fault current sources and calculation steps.",
    outline: ["Utility contribution", "Motor contribution", "X/R ratio"],
    terms: ["Isc", "X/R", "Symmetrical fault"]
  },
  {
    id: "knowledge-5",
    title: "Voltage Drop Essentials",
    category: "Voltage Drop",
    summary: "Key voltage drop limits and feeder sizing reminders.",
    outline: ["Feeder vs branch", "Length impacts", "Temperature correction"],
    terms: ["VD%", "Impedance", "Load length"]
  },
  {
    id: "knowledge-6",
    title: "Power Factor & Correction",
    category: "Power Factor",
    summary: "What drives PF and how to select correction targets.",
    outline: ["Power triangle", "Capacitor banks", "Utility penalties"],
    terms: ["kVAR", "PF", "Capacitive"]
  },
  {
    id: "knowledge-7",
    title: "Harmonics & Power Quality",
    category: "Power Quality",
    summary: "Harmonic sources, distortion limits, and mitigation.",
    outline: ["THD basics", "Filters", "Neutral loading"],
    terms: ["THD", "IEEE 519", "Filters"]
  },
  {
    id: "knowledge-8",
    title: "Cable & Conductor Basics",
    category: "Cables/Conductors",
    summary: "Insulation types, ampacity, and derating factors.",
    outline: ["Insulation ratings", "Ampacity tables", "Bundling effects"],
    terms: ["XLPE", "PVC", "Ampacity"]
  },
  {
    id: "knowledge-9",
    title: "Raceway Sizing & Fill",
    category: "Raceway",
    summary: "Raceway sizing, fill percentages, and routing.",
    outline: ["Fill limits", "Bend radius", "Supports"],
    terms: ["Conduit fill", "Bends", "Raceway"]
  },
  {
    id: "knowledge-10",
    title: "Documentation Basics",
    category: "Documentation",
    summary: "Single-line diagrams, panel schedules, and load schedules.",
    outline: ["SLD basics", "Panel schedule format", "Load schedule data"],
    terms: ["SLD", "Panel schedule", "Load schedule"]
  }
];

export const moduleInputs = {
  voltageSystem: ["400/230V", "480/277V", "208/120V"],
  insulation: ["XLPE", "PVC", "EPR"],
  conductorMaterial: ["Copper", "Aluminum"]
};
