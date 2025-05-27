/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Abellar's Portfolio",
  description:
    "An aspiring actuary with a strong foundation in mathematics, operations research, and psychology — passionate about leveraging quantitative analysis and data-driven insights to solve complex problems in risk, optimization, and decision-making. Primarily focused on actuarial science with expertise applicable to operations research and applied data science.",
  og: {
    title: "Alexis Michelle Abellar Portfolio",
    type: "website",
    url: "https://github.com/lxsmchll/Portfolio/",
  },
};

//Home Page
const greeting = {
  title: "Alexis Michelle Abellar",
  logo_name: "AlexisMichelleAbellar",
  nickname: "Alexis",
  subTitle:
    "Aspiring actuary with a passion for data science, human behavior, and automation. Mathematics major with a Business Specialization and a Minor in Psychology.",
  resumeLink:
    "https://drive.google.com/drive/folders/1QxnXpDtTjzbYQzI6QW0SJ2mdXqPAr0Fy?usp=sharing",
  resumebutton:
    "https://drive.google.com/drive/folders/1QxnXpDtTjzbYQzI6QW0SJ2mdXqPAr0Fy?usp=sharing",
  githubProfile: "https://github.com/lxsmchll",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/lxsmchll",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/alexis-michelle-abellar/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:alexis.i.abellar@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "🌡️ Actuarial Analysis",
      fileName: "WIDTimeSeries",
      overview:
        "I explore actuarial problems using mathematical frameworks, forecasting tools, and real-world data.",
      softwareSkills: [
        {
          skillName: "R",
          fontAwesomeClassname: "simple-icons:r",
          style: { color: "#276DC3" },
        },
      ],
      projects: [
        {
          title: "🔹 Markov Chain Analysis on PSEi",
          description:
            "Applied Markov chains to analyze and forecast Philippine Stock Exchange Index movements.",
          contributions:
            "Authored Results, Discussion & Conclusion; visualizations and computations.",
          linkLabel: "View Full Project (PDF)",
          link:
            "https://drive.google.com/file/d/1b3B9xYv3dNPUwlU7ll2o2sz_1C-jRIWb/view?usp=drive_link",
        },
        {
          title: "🔹 Global Temperature Time Series Analysis",
          description:
            "Conducted time series analysis including decomposition, model fitting, forecasting, and performance evaluation.",
          contributions: "Team leader; contributed in everything.",
          linkLabel: "View Full Project (PDF)",
          link:
            "https://drive.google.com/file/d/1Z5GNexdseiekOdcBAMSuwujmJ9j6Psmy/view?usp=drive_link",
        },
      ],
    },
    {
      title: "📊 Data-Driven Analysis",
      fileName: "WIDDataDriven",
      overview:
        "I analyze data and identify patterns to guide decisions with evidence.",
      softwareSkills: [
        {
          skillName: "Statistica",
          avatarUrl: "https://i.ytimg.com/vi/cL79bUOtWRw/maxresdefault.jpg",
          style: { color: "#276DC3" },
        },
      ],
      projects: [
        {
          title: "🔹 Employee Attrition Analysis",
          description:
            "Used factor and discriminant analysis to identify attrition factors with 84.42% accuracy.",
          contributions: "Project leader; did factor analysis.",
          linkLabel: "View Full Project (PDF)",
          link:
            "https://drive.google.com/file/d/1HeMicJWuj7vAb665R6jbcq9ioqtdZztm/view?usp=drive_link",
        },
      ],
    },
    {
      title: "📉 Numerical Method",
      fileName: "WIDNumerical",
      overview:
        "I use numerical methods to approximate solutions to problems that can't be solved analytically.",
      softwareSkills: [
        {
          skillName: "Excel",
          fontAwesomeClassname: "simple-icons:microsoftexcel",
          style: { color: "#217346" },
        },
      ],
      projects: [
        {
          title: "🔹 Bitcoin Implied Volatility Estimation",
          description:
            "Explored Newton-Raphson and bisection methods for estimating implied volatility.",
          contributions: "Applied the Newton-Raphson method.",
          linkLabel: "View Full Project (PDF)",
          link:
            "https://drive.google.com/file/d/1zqKOBLumPs4fJ8sslGVF4Cd3WByIFsEC/view?usp=drive_link",
        },
      ],
    },
    {
      title: "🔧 Operations Research",
      fileName: "WIDDataDriven",
      overview:
        "I use optimization methods to build efficient systems and support business decisions.",
      softwareSkills: [
        {
          skillName: "Excel",
          fontAwesomeClassname: "simple-icons:microsoftexcel",
          style: { color: "#217346" },
        },
      ],
      projects: [
        {
          title: "🔹 Revenue Maximization of 24 Chicken",
          description:
            "Used linear programming to determine optimal combinations to maximize revenue.",
          contributions:
            "Co-wrote methodology and implemented Excel-based optimization.",
          linkLabel: "View Full Project (PDF)",
          link:
            "https://drive.google.com/file/d/1H5c8U-7drAybeOSVbJRiN03eaGNh-w_E/view?usp=drive_link",
        },
      ],
    },
    {
      title: "🤖 Resourceful Automation",
      fileName: "WIDOperations",
      overview:
        "I proactively automate tasks across various fields by leveraging my skills and pattern recognition. I enjoy building templates and systems that streamline processes and improve efficiency.",
      softwareSkills: [],
      projects: [
        {
          title: "🔹 VBA Report Consolidation",
          description:
            "Automated monthly consolidation of sheets across multiple reports into one output file during my actuarial internship.",
        },
        {
          title: "🔹 Twitter Bot for Emotional Check-Ins",
          description:
            "Created a weekly emotional check-in Twitter bot that responds to followers using low-code platform as my first coding experience.",
        },
        {
          title: "🔹 Discord Onboarding Gamification",
          description:
            "Gamified Discord channels onboarding via Mimu bot custom commands for interactive community engagement.",
        },
        {
          title: "🔹 Python RPG Game",
          description: "Designed a simple RPG game using Python.",
        },
      ],
    },
  ],
};

// Technical Skills
const degrees = {
  degrees: [
    {
      title: "Actuary",
      logo_path: "calculator.png",
      descriptions: [
        "  • Theory of Interest, Statistical Theory, Time Series Analysis & Forecasting",
        "  • Linear Programming, Multivariate Analysis, Statistical Packages",
        "  • Corporate Finance, Accounting, Economics",
      ],
    },
    {
      title: "Data Science",
      logo_path: "data-science-icon.svg",
      descriptions: [
        "Core Data Science Courses:",
        "  • Time Series Analysis & Forecasting, Applied Multivariate Analysis, Linear Models, Statistical Theories, Exploratory Data Analysis, Statistical Packages, Operations Research, Markov Chain",
        "Mathematical Foundations:",
        "  • Numerical Analysis, Complex Analysis, Differential Equations, Linear Algebra, Abstract Algebra 1 & 2, Modern Geometry, Mathematical Analysis 1–3, Introduction to Set Theory, Game Theory, Graph Theory, Numerical Methods",
        "Programming & Tools:",
        "  • Computational Thinking in Python",
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
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
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
  ],
};

// const degrees = {
//   degrees: [
//     {
//       title: "Indian Institute of Information Technology Kurnool",
//       subtitle: "B.Tech. in Computer Engineering",
//       logo_path: "iiitk_logo.png",
//       alt_name: "IIITDM Kurnool",
//       duration: "2016 - 2020",
//       descriptions: [
//         "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
//         "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
//         "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
//       ],
//       website_link: "http://iiitk.ac.in",
//     },
//     {
//       title: "Indiana University Bloomington",
//       subtitle: "M.S. in Computer Science",
//       logo_path: "iu_logo.png",
//       alt_name: "Indiana University Bloomington",
//       duration: "2021 - 2023",
//       descriptions: [
//         "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
//         "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
//         "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
//       ],
//       website_link: "https://www.indiana.edu/",
//     },
//   ],
// };

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
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
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Machine Learning Engineer",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "June 2023 - Present",
          location: "San Jose, CA, USA",
          description:
            "Improving ads ranking models on the core TikTok product. Experience working on modeling two-tower architectures like DeepFM, Wide & deep learning, etc. Working on Large Language Models (LLM) pretraining and Large Multi-modal Model (LMM) finetuning strategies.",
          color: "#000000",
        },
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
      ],
    },
    {
      title: "Internships",
      experiences: [
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
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
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
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
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
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
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
