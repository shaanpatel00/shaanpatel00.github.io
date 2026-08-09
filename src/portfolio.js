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
      subtitle:
        "B.S. in Computer Engineering & M.S. in Electrical & Computer Engineering",
      logo_path: "gt_logo.png",
      alt_name: "Georgia Tech",
      duration: "Aug 2023 – May 2028 (BS/MS)",
      descriptions: [
        "◈ Minor in Artificial Intelligence & Machine Learning | Cumulative GPA: 3.57",
        "◈ SiliconJackets Digital Design Team Lead: Directing RTL development, SystemVerilog verification, and FPGA prototyping for collegiate rocket avionics.",
        "◈ Campus & Student Leadership: GTXR Executive Board, Captain of GT Ramblin' Raas, and Georgia Tech HIVE Makerspace Student Leader & Peer Instructor.",
        "◈ Relevant Coursework: Computer Architecture & Microarchitecture, SystemVerilog & FPGA Design, Operating Systems, Advanced VLSI, CUDA Parallel Programming, Data Structures & Algorithms, Signals & Systems, Linear Algebra, PCB Layout & Embedded Firmware.",
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
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have been involved in a number of projects and volunteer organizations that have helped me develop my skills in computer engineering and data science.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Coming Soon!",
          //company: "Coming Soon!",
          company_url: "",
          logo_path: "unknown.png",
          /*duration: "June 2023 - Present",
          location: "San Jose, CA, USA",
          description:
            "Improving ads ranking models on the core TikTok product. Experience working on modeling two-tower architectures like DeepFM, Wide & deep learning, etc. Working on Large Language Models (LLM) pretraining and Large Multi-modal Model (LMM) finetuning strategies.",
          color: "#000000",
          */
        },
        /**
        {
          title: "Associate AI Engineer",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - Aug 2021",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
        */
      ],
    },
    {
      title: "Internships",
      experiences: [
        /**
        {
          title: "Machine Learning Intern",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "May 2022 - Aug 2022",
          location: "San Francisco, USA",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
        */
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Georgia Tech HIVE Makerspace Student Leader",
          company: "Georgia Tech HIVE Makerspace",
          company_url: "https://hive.ece.gatech.edu/",
          logo_path: "hive_logo.png",
          duration: "August 2024 - Present",
          location: "Atlanta, Georgia",
          description:
            "As a Student Leader and Peer Instructor at the Georgia Tech HIVE Makerspace, my role combines technical development with mentorship. I instruct approximately 40 students each week on advanced design and fabrication workflows, including 3D CAD, circuit analysis with oscilloscopes, and laser cutter operation. To increase engagement, I facilitate workshops and create training materials, which have helped boost student participation by 20%. My development work includes creating a print manager to automate jobs and improve the uptime of the 12-unit 3D print farm. I am also architecting a full-stack inventory system using an AWS RDS backend to track materials and enable a student electronics rental program, with the goal of reducing annual costs for students.",
          color: "#fee600",
        },
        /**
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
        */
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
