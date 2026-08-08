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
      title: "RTL Design, Microarchitecture & Systems Verification",
      fileName: "VisionaryTechImg",
      skills: [
        "◈ Architected and synthesized an open-source 32-bit RISC-V System-on-Chip (SoC) in SystemVerilog, incorporating custom single-cycle PID control ALU extensions (Opcode 0x0B) for UAV flight stability.",
        "◈ Engineered a high-efficiency memory hierarchy: split direct-mapped 4KB L1 cache (reducing pipeline stalls by 52%), unified 4-way set-associative L2 cache with LRU replacement, and an Sv32 MMU with hardware Page Table Walker.",
        "◈ Established automated regression testing CI/CD pipelines via GitHub Actions and Verilator cycle-accurate digital twins for pre-synthesis RTL verification.",
        "◈ Deployed, synthesized, and performed PPA and timing analysis on Intel DE10 Cyclone V FPGAs using Quartus Prime, SystemVerilog Assertions (SVA), and Verilator testbenches.",
      ],
      softwareSkills: [
        {
          skillName: "SystemVerilog",
          fontAwesomeClassname: "fas fa-microchip",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Verilog",
          fontAwesomeClassname: "mdi:chip",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "RISC-V Architecture",
          fontAwesomeClassname: "fas fa-memory",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Verilator",
          fontAwesomeClassname: "fas fa-cogs",
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
          fontAwesomeClassname: "fas fa-file-code",
          style: {
            color: "#00599C",
          },
        },
      ],
    },
    {
      title: "Hardware Engineering, PCB Layout & Embedded Firmware",
      fileName: "FullStackImg",
      skills: [
        "◈ Scripted bare-metal C++ firmware for ESP32 microcontrollers, implementing non-volatile memory (NVM) drivers for state retention and hardware-debounced GPIO interrupts (ISRs).",
        "◈ Designed and manually fabricated multi-layer PCBs in KiCad and Altium—integrating I2C logic level converters, high-current MOSFET arrays, and SPICE-verified power networks.",
        "◈ Executed hardware validation using oscilloscopes, multimeters, and logic analyzers to characterize transient voltage drops under 100% load conditions.",
        "◈ Modeled thermal dissipation enclosures and custom CAD assemblies in SolidWorks and Autodesk Fusion 360, utilizing 3D slicing for rapid physical prototyping.",
      ],
      softwareSkills: [
        {
          skillName: "C++",
          fontAwesomeClassname: "fas fa-file-code",
          style: {
            color: "#00599C",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "fas fa-code",
          style: {
            color: "#A8B9CC",
          },
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
          skillName: "ESP32 / Microcontrollers",
          fontAwesomeClassname: "logos:arduino",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "SolidWorks / CAD",
          fontAwesomeClassname: "fas fa-cube",
          style: {
            color: "#E2231A",
          },
        },
      ],
    },
    {
      title: "High-Performance Computing, GPU Clusters & Distributed Systems",
      fileName: "CloudInfraImg",
      skills: [
        "◈ Assembled and configured two 2.5kW parallel GPU computing clusters with twelve 12GB GDDR6 GPUs, modifying voltage curves to bypass LHR limiters and achieve a 73% compute throughput boost.",
        "◈ Developed a distributed graphics render farm in C++ and SFML, featuring TCP/UDP socket tunnels and custom jitter buffers for low-latency network frame synchronization.",
        "◈ Overcame data mesh network faults by writing Tcl and Bash automation scripts to dynamically balance compute workloads across distributed cluster nodes.",
        "◈ Proficient in CUDA programming, PyTorch tensor acceleration, and cloud backend integration with AWS (RDS, S3, DynamoDB) and PostgreSQL.",
      ],
      softwareSkills: [
        {
          skillName: "CUDA / GPU Programming",
          fontAwesomeClassname: "simple-icons:nvidia",
          style: {
            color: "#76B900",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "fas fa-file-code",
          style: {
            color: "#00599C",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#4584b6",
          },
        },
        {
          skillName: "AWS Cloud",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Linux / Shell",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#FCC624",
          },
        },
        {
          skillName: "PostgreSQL / SQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
      ],
    },
    {
      title: "Material Science Research & Advanced Micro-Fabrication",
      fileName: "DataScienceImg",
      skills: [
        "◈ Synthesized a novel saline-soluble polymer alternative to general petrochemical plastics to directly mitigate marine plastic pollution.",
        "◈ Formulated hydrogels using resin and filament 3D-printed incubation molds, conducting Young's modulus tensile testing and SEM electron microscopy.",
        "◈ Led a 2-year international research collaboration with South Korean laboratory teams across 150+ data trials, earning the Yale Outstanding Project Award at RSEF.",
        "◈ Skilled in statistical data analysis, experimental design, and technical presentation of complex material data.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#4584b6",
          },
        },
        {
          skillName: "MATLAB",
          fontAwesomeClassname: "devicon-matlab",
        },
        {
          skillName: "Data Analysis",
          fontAwesomeClassname: "vscode-icons:file-type-excel2",
          style: {
            color: "#20744a",
          },
        },
        {
          skillName: "Electron Microscopy & SEM",
          fontAwesomeClassname: "fas fa-microscope",
          style: {
            color: "#613400",
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
      subtitle:
        "B.S. in Computer Engineering & M.S. in Electrical and Computer Engineering",
      logo_path: "gt_logo.png",
      alt_name: "Georgia Tech",
      duration: "August 2023 – May 2028 (BS: 2023-2027 | MS: 2027-2028)",
      descriptions: [
        "◈ Minor: Applications of Artificial Intelligence and Machine Learning | Cumulative GPA: 3.57",
        "◈ Specialized Coursework: Data Structures & Algorithms, Embedded Systems Design, Advanced Microarchitecture Design, VLSI Design, Semiconductor Fabrication, CUDA Programming",
        "◈ Leadership & Campus Engagement: SiliconJackets Digital Design Team Lead, GTXR Executive Board Member, Captain of GT Ramblin' Raas",
      ],
      website_link: "https://gatech.edu",
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
  subtitle: "Projects & Volunteerships",
  description:
    "A comprehensive showcase of my technical engineering projects, hardware architecture leadership, laboratory research, and student mentorship at Georgia Tech.",
  header_image_path: "experience.svg",
  sections: [
    /* Work and Internship sections muted below for easy re-enabling */
    /*
    {
      title: "Work",
      work: true,
      experiences: []
    },
    {
      title: "Internships",
      experiences: []
    },
    */
    {
      title: "Projects",
      experiences: [
        {
          title: "AeroCore-V – Hardware-Accelerated SoC for Autonomous UAVs",
          company: "SiliconJackets Project Lead",
          company_url: "https://github.com/shaanpatel00",
          logo_path: "gt_logo.png",
          duration: "August 2025 – Present",
          location: "Atlanta, GA",
          description:
            "Architected and synthesized RTL for an open-source RISC-V SoC in SystemVerilog with custom single-cycle PID ALU extensions (Opcode 0x0B). Integrated a split direct-mapped 4KB L1 cache (reducing stalls by 52%) and 4-way L2 controller with LRU replacement. Developed Sv32 virtual memory with Page Table Walker and TLB, automated regression testing with Verilator digital twin & GitHub Actions, and performed FPGA synthesis and PPA analysis on Intel DE10 FPGAs with Quartus Prime.",
          color: "#0071C5",
        },
        {
          title: "ESP32 Fiber Optic Star Map & Hardware System",
          company: "Sole Creator & PCB Developer",
          company_url: "https://github.com/shaanpatel00",
          logo_path: "codeInLogo.png",
          duration: "September 2025 – December 2025",
          location: "Atlanta, GA",
          description:
            "Scripted bare-metal C++ firmware for ESP32 with NVM drivers and GPIO interrupt service routines (ISRs). Designed and fabricated a custom double-sided PCB in KiCad via ProtoLaser with SPICE simulations and strict DRC/ERC verification. Executed hardware validation with oscilloscopes and multimeters under 100% LED load conditions.",
          color: "#314182",
        },
        {
          title: "BlendFarm: High-Performance Heterogeneous GPU Cluster",
          company: "BlendFarm Project Leader",
          company_url: "https://github.com/shaanpatel00",
          logo_path: "gcp_logo.png",
          duration: "June 2022 – July 2025",
          location: "Ashburn, VA",
          description:
            "Assembled two 2.5kW parallel computing systems with twelve 12GB GDDR6 GPUs, modifying voltage curves for a 73% hash rate & compute throughput boost. Scripted a distributed render farm in C++ and SFML with TCP/UDP socket tunnels and custom jitter buffers for low-latency graphics generation, utilizing Tcl and Bash automations across cluster mesh nodes.",
          color: "#76B900",
        },
        {
          title: "Saline-Soluble Polymer Alternative Research",
          company: "Academy of Science Research Collaborator",
          company_url: "https://github.com/shaanpatel00",
          logo_path: "iiitk_logo.png",
          duration: "November 2022 – July 2024",
          location: "Ashburn, VA / South Korea",
          description:
            "Synthesized a novel saline-soluble polymer alternative to petrochemical plastics to prevent marine pollution. Modeled resin/filament 3D molds for hydrogel incubation, measured Young's modulus with tensile testers, and analyzed composition via SEM electron microscopy. Led a 2-year South Korean laboratory collaboration across 150+ trials, earning the Yale Outstanding Project Award at RSEF in 2023.",
          color: "#00599C",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title:
            "Georgia Tech HIVE Makerspace Student Leader & Peer Instructor",
          company: "Georgia Tech HIVE Makerspace",
          company_url: "https://hive.ece.gatech.edu/",
          logo_path: "hive_logo.png",
          duration: "August 2024 – Present",
          location: "Atlanta, GA",
          description:
            "Instruct ~40 students per week on advanced design and fabrication workflows (3D CAD, oscilloscopes, laser cutters, KiCad/Altium PCB design). Deployed an open-source multi-device print manager to automate job scheduling for the 12-unit Bambu Lab 3D print farm. Architecting a full-stack inventory system using AWS RDS, S3, and DynamoDB to manage student electronics rentals.",
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
