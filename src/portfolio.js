/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Shaans's Portfolio",
  description:
    "Specialized in full-cycle hardware development, from FPGA design to PCB fabrication. Proficient in Python, C++, and SystemVerilog with a background in GPU programming and VLSI design.",
  og: {
    title: "Shaan Patel Portfolio",
    type: "website",
    url: "http://shaanpatel00.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Shaan Patel",
  subHeading: "Computer Engineering Student @ Georgia Tech",
  logo_name: "ShaanPatel",
  nickname: "",
  subTitle:
    "Specialized in full-cycle hardware development, from FPGA design to PCB fabrication. Proficient in Python, C++, and SystemVerilog with a background in GPU programming and VLSI design.",
  resumeLink: "/Shaan_Patel_Resume.pdf",
  portfolio_repository:
    "https://github.com/shaanpatel00/shaanpatel00.github.io",
  githubProfile: "https://github.com/shaanpatel00",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/shaanpatel00",
  // linkedin: "https://www.linkedin.com/in/shaanpatel00/",
  // gmail: "shaanpatel00@gmail.com",
  // gitlab: "",
  // facebook: "",
  // twitter: "",
  // instagram: ""

  {
    name: "Github",
    link: "https://github.com/shaanpatel00",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shaanpatel00/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:shaanpatel00@gmail.com",
    fontAwesomeIcon: "far fa-envelope", //Reference https://fontawesome.com/icons/envelope?f=classic&s=solid
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  /*
  {
    name: "Resume",
    link: "/Shaan_Patel_Resume.pdf",
    fontAwesomeIcon: "fas fa-file-alt",
    backgroundColor: "#1A8300",
  },
  */
];

const skills = {
  data: [
    {
      title: "RTL Microarchitecture & Silicon Verification",
      fileName: "VisionaryTechImg",
      skills: [
        "◈ Architecting 32-bit RISC-V SoC microarchitectures with custom single-cycle ALU ISA extensions.",
        "◈ Designing multi-tier L1/L2 cache controllers with LRU replacement and virtual memory MMUs.",
        "◈ Building automated C++/Verilator cycle-accurate simulation harnesses and regression testbenches.",
        "◈ Executing logic synthesis, PPA analysis, and timing closure on Intel FPGAs using Quartus Prime.",
      ],
      softwareSkills: [
        {
          skillName: "SystemVerilog",
          fontAwesomeClassname: "mdi:chip",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Verilog",
          fontAwesomeClassname: "ph:cpu-bold",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "RISC-V Architecture",
          fontAwesomeClassname: "simple-icons:riscv",
          style: {
            color: "#252C4A",
          },
        },
        {
          skillName: "Verilator",
          fontAwesomeClassname: "ph:gear-six-bold",
          style: {
            color: "#00599C",
          },
        },
        {
          skillName: "Quartus Prime / FPGA",
          fontAwesomeClassname: "simple-icons:intel",
          style: {
            color: "#0071C5",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "logos:c-plusplus",
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "logos:linux-tux",
        },
      ],
    },
    {
      title: "PCB Layout, Embedded & Hardware Systems",
      fileName: "FullStackImg",
      skills: [
        "◈ Scripting bare-metal C++ firmware for ESP32/ARM microcontrollers with hardware ISRs & NVM drivers.",
        "◈ Designing and fabricating multi-layer PCBs in KiCad & Altium with high-current MOSFET arrays.",
        "◈ Characterizing signal integrity, power supply ripple, and transient response using digital oscilloscopes.",
        "◈ Modeling thermal enclosures and mechanical CAD assemblies in SolidWorks for 3D prototyping.",
      ],
      softwareSkills: [
        {
          skillName: "C++",
          fontAwesomeClassname: "logos:c-plusplus",
        },
        {
          skillName: "C",
          fontAwesomeClassname: "logos:c",
        },
        {
          skillName: "KiCad",
          fontAwesomeClassname: "simple-icons:kicad",
          style: {
            color: "#314182",
          },
        },
        {
          skillName: "Altium Designer",
          fontAwesomeClassname: "simple-icons:altiumdesigner",
          style: {
            color: "#A59162",
          },
        },
        {
          skillName: "ESP32 / Arduino",
          fontAwesomeClassname: "logos:arduino",
        },
        {
          skillName: "Raspberry Pi",
          fontAwesomeClassname: "logos:raspberry-pi",
        },
        {
          skillName: "SolidWorks / CAD",
          fontAwesomeClassname: "mdi:cube-outline",
          style: {
            color: "#E2231A",
          },
        },
      ],
    },
    {
      title: "GPU Clusters & Distributed Systems",
      fileName: "LocalServerImg",
      skills: [
        "◈ Assembling 2.5kW parallel GPU computing clusters optimized for high-throughput compute workloads.",
        "◈ Building socket-based distributed render engines in C++/SFML with low-latency synchronization.",
        "◈ Automating distributed workload scheduling and fault recovery using Tcl & Bash across cluster nodes.",
        "◈ Harnessing CUDA programming, PyTorch tensor acceleration, and AWS Cloud backend infrastructure.",
      ],
      softwareSkills: [
        {
          skillName: "CUDA / GPU Programming",
          fontAwesomeClassname: "ph:cpu-bold",
          style: {
            color: "#76B900",
          },
        },
        {
          skillName: "NVIDIA",
          fontAwesomeClassname: "simple-icons:nvidia",
          style: {
            color: "#76B900",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "logos:c-plusplus",
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
        },
        {
          skillName: "AWS Cloud",
          fontAwesomeClassname: "logos:aws",
        },
        {
          skillName: "Linux / Bash",
          fontAwesomeClassname: "ph:terminal-window-bold",
          style: {
            color: "#2D3748",
          },
        },
        {
          skillName: "PostgreSQL / SQL",
          fontAwesomeClassname: "logos:postgresql",
        },
      ],
    },
    {
      title: "Material Science & Polymer Fabrication",
      fileName: "DataScienceImg",
      skills: [
        "◈ Synthesizing eco-friendly saline-soluble polymer alternatives to single-use petrochemical plastics.",
        "◈ Formulating hydrogels using 3D-printed molds, conducting Young's modulus tensile testing & SEM analysis.",
        "◈ Conducting 150+ international laboratory research trials (Yale Outstanding Project Award recipient).",
        "◈ Modeling complex experimental datasets and statistical simulations using Python, MATLAB & Excel.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
        },
        {
          skillName: "MATLAB",
          fontAwesomeClassname: "devicon:matlab",
        },
        {
          skillName: "Data Analysis / Excel",
          fontAwesomeClassname: "vscode-icons:file-type-excel2",
        },
        {
          skillName: "Electron Microscopy / SEM",
          fontAwesomeClassname: "mdi:microscope",
          style: {
            color: "#613400",
          },
        },
        {
          skillName: "Elsevier",
          fontAwesomeClassname: "simple-icons:elsevier",
          style: {
            color: "#ff4103",
          },
        },
      ],
    },
    {
      title: "Crypto Mining & Blockchain Infrastructure",
      fileName: "CloudInfraImg",
      skills: [
        "◈ Constructing high-density 2.5kW multi-GPU parallel compute rigs with custom voltage/power tuning.",
        "◈ Building and maintaining proof-of-work infrastructure across Ethereum, Bitcoin, and altcoin networks.",
        "◈ Managing digital asset security, Web3 wallets, and decentralized finance (DeFi) protocols.",
      ],
      softwareSkills: [
        {
          skillName: "Metamask",
          fontAwesomeClassname: "logos:metamask-icon",
        },
        {
          skillName: "Coinbase",
          fontAwesomeClassname: "simple-icons:coinbase",
          style: {
            color: "#0052FF",
          },
        },
        {
          skillName: "Exodus",
          fontAwesomeClassname: "ph:wallet-bold",
          style: {
            color: "#6B46C1",
          },
        },
        {
          skillName: "Ethereum",
          fontAwesomeClassname: "logos:ethereum",
        },
        {
          skillName: "Bitcoin",
          fontAwesomeClassname: "logos:bitcoin",
        },
      ],
    },
    {
      title: "3D Design, Animation & Graphics",
      fileName: "DesignImg",
      skills: [
        "◈ Modeling, texturing, and rendering 3D products with procedural PBR materials and HDRI lighting.",
        "◈ Designing vector brand assets, multi-layer graphics, and logos in Adobe Illustrator & Inkscape.",
        "◈ Producing motion graphic animations and product visualizers in Blender, After Effects & Unity.",
        "◈ Engineering 3D assets optimized for additive manufacturing (3D printing), CNC, and laser cutting.",
      ],
      softwareSkills: [
        {
          skillName: "Adobe Premiere Pro",
          fontAwesomeClassname: "logos:adobe-premiere",
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "logos:adobe-illustrator",
        },
        {
          skillName: "Adobe After Effects",
          fontAwesomeClassname: "logos:adobe-after-effects",
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Blender",
          fontAwesomeClassname: "logos:blender",
        },
        {
          skillName: "Unity",
          fontAwesomeClassname: "logos:unity",
          style: {
            color: "#222c37",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/shaanpatel00/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/shaanpatel00",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Georgia Institute of Technology",
      subtitle: "B.S. in Computer Engineering",
      logo_path: "gt_logo.png",
      alt_name: "Georgia Tech",
      duration: "Aug 2023 – May 2027",
      descriptions: [
        "◈ Minor: Applications of AI & ML | Cumulative GPA: 3.57",
        "◈ Relevant Coursework: Computer Architecture & Microarchitecture, SystemVerilog & FPGA Design, Operating Systems, Advanced VLSI, CUDA Parallel Programming, Data Structures & Algorithms, Signals & Systems, Linear Algebra, PCB Layout & Embedded Firmware.",
      ],
      leadershipBadges: [
        "SiliconJackets Digital Design Team Lead",
        "GTXR Executive Board",
        "Captain of GT Ramblin' Raas",
        "GT HIVE Makerspace Student Leader",
      ],
      website_link: "https://gatech.edu",
    },
    {
      title: "Georgia Institute of Technology",
      subtitle: "M.S. in Electrical and Computer Engineering (BS/MS Program)",
      logo_path: "gt_logo.png",
      alt_name: "Georgia Tech",
      duration: "Aug 2027 – May 2028",
      descriptions: [
        "◈ Accelerated BS/MS degree program at Georgia Tech ECE.",
        "◈ Advanced Specialization in Computer Architecture, Microarchitecture, VLSI Systems & High-Performance Compute Rigs.",
      ],
      website_link: "https://ece.gatech.edu",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Python Core",
      subtitle: "- Ryan Soklaski",
      logo_path: "mit_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1oeDieb-lTLQ4M1_0E2-nPAGhNFPGTFD6/view?usp=sharing",
      alt_name: "Massachusetts Institute of Technology",
      color_code: "#750014",
    },
    {
      title: "AutoCAD",
      subtitle: "- Certiport",
      logo_path: "autocad_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/10fRWc0thGEUoKyFzOz87ZVUky1mlHpoO/view",
      alt_name: "Certiport Autodesk",
      color_code: "#770829",
    },
    {
      title: "CompTIA ITF+",
      subtitle: "- CompTIA",
      logo_path: "comptia_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1_8ClEWEcJbIwBUxdRAVLRDcHZKwkg_rN/view",
      alt_name: "CompTIA",
      color_code: "#e22726",
    },
    /**
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    */
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Projects and Volunteership",
  description:
    "I am a Computer Engineering student specializing in SystemVerilog RTL implementation, hardware/PCB prototyping, and embedded systems to build high-performance silicon and compute infrastructure.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Projects",
      experiences: [
        {
          title: "AeroCore-V – Hardware-Accelerated SoC for Autonomous UAVs",
          company: "SiliconJackets Project Lead",
          company_url: "https://github.com/shaanpatel00/AeroCore-V",
          logo_path: "gt_logo.png",
          duration: "August 2025 – Present",
          location: "Atlanta, GA",
          description:
            "◈ Designed RTL for an open-source RISC-V SoC in SystemVerilog with custom ALU extensions for single-cycle PID control math.\n◈ Integrated a direct-mapped, 4KB L1 cache handling high-frequency I2C/SPI GPS and IMU data streams to reduce stalls by 52% (measured via a custom Verilator cycle-accurate harness), while developing a 4-way L2 controller with LRU replacement.\n◈ Developing a virtual memory system with Page Table Walker and TLB to isolate flight routines and protect from page faults, utilizing GitHub Actions CI/CD pipelines to automate regression testing and cycle-accurate simulations.\n◈ Prototyped a priority-based thread scheduler to manage UAV flight loops and telemetry tasks, alongside an OpenGL Digital Twin physics simulator in C++ to validate future flight latency reductions.\n◈ Validated logic synthesis and PPA analysis on Intel DE10 FPGAs with Intel Quartus Prime and authored SystemVerilog Assertions (SVA) and functional testbenches in Verilator to perform coverage analysis and debug RTL logic failures.",
          color: "#00599C",
          softwareSkills: [
            {
              skillName: "SystemVerilog",
              fontAwesomeClassname: "vscode-icons:file-type-verilog",
            },
            { skillName: "C/C++", fontAwesomeClassname: "logos:c-plusplus" },
            {
              skillName: "RISC-V",
              fontAwesomeClassname: "simple-icons:riscv",
              style: { color: "#252C4A" },
            },
            {
              skillName: "Verilator",
              fontAwesomeClassname: "ph:gear-six-bold",
              style: { color: "#00599C" },
            },
          ],
        },
        {
          title: "ESP32 Fiber Optic Star Map",
          company: "Sole Creator",
          company_url:
            "https://github.com/shaanpatel00/ESP32-Fiber-Optic-Star-Map",
          logo_path: "gt_logo.png",
          duration: "September 2025 – December 2025",
          location: "Atlanta, GA",
          description:
            "◈ Scripted bare-metal C++ firmware for an ESP32 microcontroller, implementing non-volatile memory (NVM) drivers for state retention and hardware-debounced GPIO interrupt service routines (ISRs) for real-time control.\n◈ Engineered ARGB PWM power distribution networks and modeled a custom enclosure in SolidWorks for thermal dissipation.\n◈ Fabricated a custom ESP32 PCB designed with KiCad using a ProtoLaser, running SPICE circuit simulations and passing strict DRC and ERC verification to ensure clean trace routing and signal integrity.\n◈ Executed hardware validation using oscilloscopes and multimeters to characterize transient voltage drop under 100% LED load.",
          color: "#6B46C1",
          softwareSkills: [
            { skillName: "C++", fontAwesomeClassname: "logos:c-plusplus" },
            {
              skillName: "ESP32",
              fontAwesomeClassname: "simple-icons:espressif",
              style: { color: "#E7352C" },
            },
            {
              skillName: "KiCad",
              fontAwesomeClassname: "simple-icons:kicad",
              style: { color: "#314DA0" },
            },
            {
              skillName: "3D Design",
              fontAwesomeClassname: "simple-icons:blender",
              style: { color: "#EA7600" },
            },
          ],
        },
        {
          title: "High-Performance Heterogeneous Computing Infrastructure",
          company: "BlendFarm Project Leader",
          company_url: null,
          logo_path: "blendfarm_logo.png",
          duration: "June 2022 – July 2025",
          location: "Ashburn, VA",
          description:
            "◈ Assembled two 2.5kW parallel computing systems from the component level, integrating twelve 12GB GDDR6 GPUs and modifying voltage curves to bypass LHR limiters, achieving a 73% hash rate improvement.\n◈ Overcame data mesh faults using Tcl and Bash automations to schedule distributed compute workloads across cluster nodes.\n◈ Scripted a distributed render farm using C++ and SFML to coordinate large ray tracing frame rendering across a network.\n◈ Optimized task allocation using TCP/UDP socket tunnels and a custom jitter buffer implementation to ensure reliable data synchronization between the master node and rendering clients for faster computer graphics generation.",
          color: "#76B900",
          softwareSkills: null,
        },
        {
          title: "Academy of Science International Research",
          company: "Research Collaborator",
          company_url: null,
          logo_path: "acl_logo.jpeg",
          duration: "November 2022 – July 2024",
          location: "Ashburn, VA",
          description:
            "◈ Synthesized a novel saline-soluble polymer alternative to general petrochemical plastics as a means of preventing marine pollution.\n◈ Modeled and fabricated 3D-generated molds using filament and resin printers for synthesizing hydrogels through incubation.\n◈ Worked with a tensile tester to measure Young’s modulus and SEM electron microscopy to analyze sample composition.\n◈ Led collaboration efforts with South Korean research teams for two years to formulate samples and complete testing.\n◈ Collected over 150 trials of data and was awarded the Yale Outstanding Project award at RSEF in Spring of 2023.",
          color: "#ff4103",
          softwareSkills: null,
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Georgia Tech HIVE Makerspace",
          company: "Student Leader and Volunteer",
          company_url: "https://hive.ece.gatech.edu/",
          logo_path: "hive_logo.png",
          duration: "August 2024 – Present",
          location: "Atlanta, GA",
          description:
            "◈ Instruct ~40 students per week on advanced design and fabrication workflows, including 3D CAD/slicing, circuit analysis with oscilloscopes, laser cutter operation, KiCAD/Altium PCB design and manufacturing (taking a blank FR4 sheet to an operational PCB).\n◈ Deployed an open-source multi-device print manager to automate jobs on a FIFO basis, increasing the operational uptime of the free-to-use 12-unit Bambu Lab 3D print farm for the Georgia Tech student body.\n◈ Facilitate workshops and created training resources that contributed to a 20% increase in student participation.\n◈ Architecting a full-stack inventory management system using an AWS RDS backend to track materials in the cloud with S3 and DynamoDB to enable a student electronics rental program, aiming to reduce annual student costs.",
          color: "#fee600",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools including PCB design, 3D modeling software, embedded systems, and more. My best projects are listed below.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Research",
  description: "Some of my research papers and experimental work.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    /**
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
    */
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "shaan-contact-photo.png",
    description:
      "Feel free to reach out to me with any questions or opportunities. I am always open to discussing new projects, creative ideas, and answering any questions!",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "Coming Soon!",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Ashburn VA, USA",
    locality: "Ashburn",
    country: "USA",
    region: "Virginia",
    postalCode: "20148",
    //streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/Keo1DVg7fQ8JvmTz6",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
