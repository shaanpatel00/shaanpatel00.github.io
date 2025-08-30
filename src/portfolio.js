/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Shaans's Portfolio",
  description:
    "Passionate computer engineering student seeking to refine skills in embedded systems design, semiconductor technology, and PCB layout while making a lasting impact on bridging the gap between digital design and real-world application.",
  og: {
    title: "Shaan Patel Portfolio",
    type: "website",
    url: "http://shaanpatel00.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Shaan Patel",
  logo_name: "ShaanPatel",
  nickname: "",
  subTitle:
    "Passionate computer engineering student seeking to refine skills in 3D animation & modeling, computer science, and computer engineering at a like-minded company.",
  resumeLink:
    "https://drive.google.com/file/d/1xX5ybwZyoPQTbVtDN0e_dADChjVmHkfG/view?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
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
    link: "https://drive.google.com/file/d/1WFiH4DtonGBIzGsRGZ9n5yijkBFbRZpp/view?usp=sharing",
    fontAwesomeIcon: "fas fa-file", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#1A8300", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:shaanpatel00@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/ashutosh_1919",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/laymanbrother.19/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/layman_brother/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  */
];

const skills = {
  data: [
    {
      title: "Hardware and Embedded Systems",
      fileName: "VisionaryTechImg",
      skills: [
        "◈ Worked with various microcontrollers such as the ESP32, ESP8266, Arduino, MBED, Raspberry Pi, and more",
        "◈ Built both hardware and software solutions for a custom Internet-of-Things (IoT) device",
        "◈ Knowledge of core languages such as C, C++, Python, Verilog, VHDL, MIPS, RISC-V, and more",
        "◈ Experience building peripherals from scratch and incorporating them with an Intel Altera FPGA",
        "◈ Layout, design, and manually fabricate various PCBs using KiCad and Altium along with electroplating and laser cutting technologies",
      ],
      softwareSkills: [
        {
          skillName: "Metamask",
          fontAwesomeClassname: "logos-metamask-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Coinbase",
          fontAwesomeClassname: "arcticons:coinbase",
          style: {
            backgroundColor: "transparent",
            color: "#0052ff",
          },
        },
        {
          skillName: "Exodus",
          fontAwesomeClassname: "arcticons:exodus",
          style: {
            backgroundColor: "transparent",
            color: "#000000",
          },
        },
        {
          skillName: "Ethereum",
          fontAwesomeClassname: "mdi:ethereum",
          style: {
            backgroundColor: "transparent",
            color: "#62688f",
          },
        },
        {
          skillName: "Bitcoin",
          fontAwesomeClassname: "mdi:bitcoin",
          style: {
            backgroundColor: "transparent",
            color: "#f7931a",
          },
        },
      ],
    },
    {
      title: "Cryptocurrency Mining and Trading",
      fileName: "DataScienceImg",
      skills: [
        "◈ Designed and built two 2.5kW parallel computing systems from the component level, integrating a mixed array of twelve 12GB GDDR6 AMD and NVIDIA GPUs",
        "◈ Building and setting up mining rigs for Ethereum, Bitcoin, and other cryptocurrencies",
        "◈ Experience with trading on Exodus, Coinbase, Metamask and other exchanges",
        "◈ In-depth knowledge of blockchain protocols and smart contracts used to mine cryptocurrencies",
      ],
      softwareSkills: [
        {
          skillName: "Metamask",
          fontAwesomeClassname: "logos-metamask-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Coinbase",
          fontAwesomeClassname: "arcticons:coinbase",
          style: {
            backgroundColor: "transparent",
            color: "#0052ff",
          },
        },
        {
          skillName: "Exodus",
          fontAwesomeClassname: "arcticons:exodus",
          style: {
            backgroundColor: "transparent",
            color: "#000000",
          },
        },
        {
          skillName: "Ethereum",
          fontAwesomeClassname: "mdi:ethereum",
          style: {
            backgroundColor: "transparent",
            color: "#62688f",
          },
        },
        {
          skillName: "Bitcoin",
          fontAwesomeClassname: "mdi:bitcoin",
          style: {
            backgroundColor: "transparent",
            color: "#f7931a",
          },
        },
      ],
    },
    {
      title: "3D Modeling and Graphic Design",
      fileName: "DesignImg",
      skills: [
        "◈ Designing and texturing 3D models with custom HDRI maps and prodecual textures",
        "◈ Customizing vector logo designs and building logos from scratch",
        "◈ Produced high-quality renders and animations for product visualization and marketing",
        "◈ Experience designing 3D models for 3D printing and CNC machining, along with vector designs for laser cutting and engraving",
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
          skillName: "Adobe Animate",
          fontAwesomeClassname: "logos:adobe-animate",
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
        {
          skillName: "Decentraland",
          fontAwesomeClassname: "simple-icons:decentraland",
          style: {
            color: "#333333",
          },
        },
      ],
    },
    {
      title: "Professional Laboratory Research",
      fileName: "FullStackImg",
      skills: [
        "◈ Worked in a professional laboratory setting with international researchers in South Korea",
        "◈ Completed 150 trials in my recent project and awarded the Yale Outstanding Project award",
        "◈ Developed professional communication skills, tensile testing skills, and data analysis skills",
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
          skillName: "Matlab",
          fontAwesomeClassname: "devicon-matlab",
        },
        {
          skillName: "Excel",
          fontAwesomeClassname: "vscode-icons:file-type-excel2",
          style: {
            color: "#20744a",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Elsevier",
          fontAwesomeClassname: "academicons:elsevier-square",
          style: {
            color: "#ff4103",
          },
        },
        /*
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        */
      ],
    },
    {
      title: "Basic Cybersecurity and Web Protection",
      fileName: "CloudInfraImg",
      skills: [
        "◈ Proficiency in writing SQL queries to retrieve, insert, update, and delete data from databases, along with how to prevent common SQL injection attacks",
        "◈ Experience with packet tracing in order to analyze network traffic, recognize anomalies in traffic, packet inspection, and security monitoring",
        "◈ Secured DBMS against unauthorized access and data breaches, including implementing user authentication and authorization, encryption of sensitive data, and configuring access control permissions",
        "◈ Understanding of common cyber threats such as phishing, malware, and social engineering",
      ],
      softwareSkills: [
        {
          skillName: "SQL",
          fontAwesomeClassname: "tabler:sql",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Wireshark",
          fontAwesomeClassname: "simple-icons:wireshark",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "SSH",
          fontAwesomeClassname: "mdi:ssh",
          style: {
            color: "#613400",
          },
        },
        {
          skillName: "DBMS",
          fontAwesomeClassname: "material-symbols:database",
          style: {
            color: "#333333",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        /*
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        */
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
    /**
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
    */
  ],
};

const degrees = {
  degrees: [
    {
      title: "Georgia Institute of Technology",
      subtitle: "B.S. in Computer Engineering",
      logo_path: "gt_logo.png",
      alt_name: "Georgia Tech",
      duration: "2023 - Present",
      descriptions: [
        "◈ I am currently a second-year student at Georgia Tech pursuing a degree in Computer Engineering.",
        "◈ As of now, I have a solid understanding of object oriented programming, data structures and algorithms, programming hardware systems, and digital system design.",
        "◈ I am also learning about VLSI, algorithms, and computer organization.",
      ],
      website_link: "https://gatech.edu",
    },
    /**
    {
      title: "Indiana University Bloomington",
      subtitle: "M.S. in Computer Science",
      logo_path: "iu_logo.png",
      alt_name: "Indiana University Bloomington",
      duration: "2021 - 2023",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://www.indiana.edu/",
    },
    */
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
    "Although I have not yet held any positions, I have been involved in a number of projects and volunteer organizations that have helped me develop my skills in computer engineering and data science.",
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
            "Instruct end users in designing and slicing 3D models, embroidering and sewing fabrics, analyzing circuits with oscilloscopes, and creating and cutting vector files on a Fablight laser cutter.",
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
    "My projects makes use of vast variety of latest technology tools including 3D modeling software, sotfware design, computer engineering, and more. My best projects are listed below.",
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
    subtitle:
      "Coming Soon!",
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
