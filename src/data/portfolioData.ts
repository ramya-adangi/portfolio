import type { Project, Experience, EducationItem, Certification, Achievement, SkillCategory } from '../types';

export const personalInfo = {
  fullName: 'Adangi Sai Ramya',
  displayName: 'Sai Ramya',
  headline: 'Data Science Specialist & Full-Stack Developer',
  subheadline: 'B.Tech CSE (Data Science) Student passionate about Machine Learning, Statistical Analysis, REST APIs, and Data-Driven Systems.',
  summary: `B.Tech Computer Science student specializing in Data Science with hands-on experience in Python, SQL, Machine Learning, Statistical Analysis, Data Visualization, and Power BI. Experienced in data cleaning, data wrangling, exploratory data analysis (EDA), correlation analysis, predictive modeling, dashboard development, and extracting actionable insights from real-world datasets. Built and evaluated machine learning models and developed interactive business intelligence dashboards using Power BI, DAX, and Power Query. Seeking opportunities to apply analytical, statistical, programming, and machine learning skills to real-world challenges.`,
  email: 'ramyaadangi@gmail.com',
  phone: '+91 9347669203',
  location: 'Visakhapatnam, Andhra Pradesh, India',
  github: 'https://github.com/ramya-adangi',
  linkedin: 'https://linkedin.com/in/sairamyaadangi',
  resumeUrl: '/Adangi_Sai_Ramya_Resume.pdf',
  stats: [
    { label: 'B.Tech CGPA', value: '8.67', sublabel: 'Data Science Major' },
    { label: 'Internships', value: '3', sublabel: 'Industry & Open-Source' },
    { label: 'Certifications', value: '7', sublabel: 'NPTEL, Oracle, TATA' },
    { label: 'Young Turks', value: '98.67%', sublabel: 'National Percentile' },
  ]
};

export const projects: Project[] = [
  {
    id: 'customer-churn-prediction',
    title: 'Customer Churn Prediction & Analytics Dashboard',
    subtitle: 'End-to-end Machine Learning Pipeline & Interactive Streamlit Intelligence Platform',
    category: 'Machine Learning & Analytics',
    timeline: '2026',
    status: 'Completed',
    role: 'Lead ML Developer & Data Analyst',
    summary: 'Built an end-to-end Machine Learning and Data Analytics solution using Telco customer data, including data cleaning, EDA, correlation analysis, feature analysis, and predictive modeling with interactive Streamlit deployment.',
    problem: 'Subscription services face severe revenue depletion when customers churn without prior warning signals. Companies lack visibility into key churn triggers, resulting in delayed retention strategies and suboptimal customer lifecycle value.',
    solution: 'Designed and implemented an automated predictive pipeline that preprocesses raw customer data, extracts key driver features (tenure, contract type, charges), compares 4 machine learning classifiers, and serves real-time churn predictions through a responsive Streamlit dashboard.',
    metrics: [
      { label: 'Best ROC-AUC', value: '0.77' },
      { label: 'Models Compared', value: '4' },
      { label: 'Key Features Identified', value: 'Tenure, Contract, Charges' },
      { label: 'Interface', value: 'Interactive Streamlit' }
    ],
    tags: ['Python', 'Scikit-Learn', 'Streamlit', 'Pandas', 'NumPy', 'EDA', 'Matplotlib', 'Classification'],
    responsibilities: [
      'Executed end-to-end data preparation including missing value imputation, categorical encoding, and feature scaling on Telco customer records.',
      'Conducted deep Exploratory Data Analysis (EDA) and correlation matrix evaluations to isolate statistically significant churn factors.',
      'Trained and evaluated Logistic Regression, Decision Tree, Random Forest, and Gradient Boosting classifiers; achieved a peak ROC-AUC of 0.77.',
      'Constructed feature importance visualizations highlighting tenure length, contract duration, and monthly billing thresholds as primary churn drivers.',
      'Developed an interactive Streamlit dashboard featuring cohort churn-rate segmentation and real-time single-customer churn risk inference.'
    ],
    features: [
      'Interactive Customer Churn Probability Simulator',
      'Comparative Model Evaluation (Logistic Regression, Decision Tree, Random Forest, Gradient Boosting)',
      'Feature Importance Analysis & Correlation Heatmaps',
      'Cohort Segmentation by Contract Type & Billing Tiers',
      'Live Risk Assessment with actionable retention recommendations'
    ],
    architecture: [
      'Data Ingestion & Cleaning (Pandas, NumPy)',
      'Exploratory Data Analysis & Feature Engineering',
      'Model Training & Cross-Validation (Scikit-Learn)',
      'Model Evaluation & ROC-AUC Optimization',
      'Interactive Streamlit Web Dashboard Deployment'
    ],
    githubUrl: 'https://github.com/ramya-adangi',
    liveDemoUrl: 'https://github.com/ramya-adangi'
  },
  {
    id: 'smart-agriculture-system',
    title: 'Smart Agriculture Information System',
    subtitle: 'Data-Driven Agricultural Intelligence Platform with AI Multilingual Assistance',
    category: 'Full-Stack & Web Systems',
    timeline: '07/2025 – 08/2025',
    status: 'Production Ready',
    role: 'Full Stack Developer',
    summary: 'Developed a Flask-based data-driven platform providing crop, irrigation, and pest-control insights for rural users with optimized MySQL REST APIs and multilingual AI accessibility.',
    problem: 'Smallholder and rural farmers often struggle with crop loss and water misallocation due to fragmented agricultural guidance, localized language barriers, and lack of accessible technical tools.',
    solution: 'Engineered an accessible web application powered by Python Flask and optimized MySQL databases that provides timely, localized advisory for crop selection, irrigation scheduling, and pest control, made user-friendly through AI assistance and vernacular support.',
    metrics: [
      { label: 'Core Modules', value: '3 (Crop, Irrigation, Pest)' },
      { label: 'Architecture', value: 'REST API + MVC' },
      { label: 'Database', value: 'Optimized MySQL' },
      { label: 'Accessibility', value: 'Multilingual & AI-Guided' }
    ],
    tags: ['Python', 'Flask', 'MySQL', 'REST APIs', 'AI Integration', 'Multilingual UX', 'Backend Optimization'],
    responsibilities: [
      'Architected and implemented a Flask-based web platform with modular REST API endpoints for seamless agricultural data exchange.',
      'Designed and normalized the MySQL relational schema, indexing key agronomic tables for rapid data retrieval under high-concurrency queries.',
      'Integrated AI-powered query assistance and multilingual accessibility to accommodate farmers with diverse language backgrounds and limited tech familiarity.',
      'Built localized logic calculators for soil hydration thresholds, seasonal crop rotation rules, and targeted pest-control mitigation steps.'
    ],
    features: [
      'Localized Crop Recommendation Engine based on soil & season',
      'Smart Irrigation Scheduler based on soil hydration needs',
      'Pest-Control Diagnostics & safe treatment guidance',
      'AI-Powered Assistant for vernacular agricultural queries',
      'Optimized REST APIs for fast data retrieval on low-bandwidth rural networks'
    ],
    architecture: [
      'Client Layer: Accessible UI with Multilingual Support',
      'Backend Layer: Flask RESTful Web Service & Business Logic',
      'Intelligence Layer: Rule-based calculations & AI query integration',
      'Data Layer: Normalized MySQL Database with query optimization'
    ],
    githubUrl: 'https://github.com/ramya-adangi',
    liveDemoUrl: 'https://github.com/ramya-adangi'
  }
];

export const experiences: Experience[] = [
  {
    id: 'k-square-power-bi',
    company: 'K-Square Company',
    role: 'Power BI Intern',
    category: 'Data Analytics / Business Intelligence Intern',
    period: '06/2026',
    location: 'Visakhapatnam',
    type: 'Internship',
    description: 'Data analytics and business intelligence internship focused on enterprise dashboard design, Power Query transformation, and DAX calculations.',
    bullets: [
      'Wrangled and transformed raw business datasets using Power Query and developed high-efficiency data models using DAX.',
      'Built interactive dashboards using charts, slicers, matrices, and drill-throughs to support executive business reporting and data-driven decision making.',
      'Performed KPI tracking and quantitative analysis to convert raw multi-source business data into actionable operational insights.'
    ],
    technologies: ['Power BI', 'DAX', 'Power Query', 'Data Modeling', 'KPI Tracking', 'Business Intelligence']
  },
  {
    id: 'infosys-python-fullstack',
    company: 'Infosys',
    role: 'Python Full Stack Development Intern',
    category: 'Python / Data-Oriented Application Development',
    period: '12/2025 – 02/2026',
    location: 'Virtual',
    type: 'Internship',
    description: 'Developed production-oriented REST APIs, database integrations, and secured data pipelines following modern software engineering practices.',
    bullets: [
      'Developed REST API-driven applications using Python and connected applications with MySQL and MongoDB for structured data storage and high-speed retrieval.',
      'Engineered workflows for data extraction, storage, retrieval, backend optimization, and scalable application development.',
      'Implemented MVC architecture and JWT-based authentication for production-oriented, secure web services.'
    ],
    technologies: ['Python', 'REST APIs', 'MySQL', 'MongoDB', 'JWT Authentication', 'MVC Architecture', 'Data Extraction']
  },
  {
    id: 'opensource-fullstack',
    company: 'Open-Source Community',
    role: 'Virtual Full Stack Developer Intern',
    category: 'Python Web Development',
    period: '06/2025 – 07/2025',
    location: 'Virtual',
    type: 'Internship',
    description: 'Contributed to open-source data-driven web applications with modern Python frameworks and relational database design.',
    bullets: [
      'Developed data-driven web applications using Flask/Django and MySQL, implementing REST APIs for CRUD-based data operations.',
      'Collaborated on backend data processing, database schema integration, session authentication, and cloud deployment pipelines.'
    ],
    technologies: ['Flask', 'Django', 'MySQL', 'REST APIs', 'Cloud Deployment', 'Python', 'Git']
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    name: 'Programming Languages',
    skills: [
      { name: 'Python', levelDescription: 'Primary language for ML, scripting, and backend development', badge: 'Core' },
      { name: 'SQL', levelDescription: 'Complex queries, schema design, joins, aggregations', badge: 'Core' },
      { name: 'Java', levelDescription: 'OOP, DSA, NPTEL Elite+Gold (97%)', badge: 'Certified' },
      { name: 'JavaScript', levelDescription: 'Interactive frontend behavior and modern web development' }
    ]
  },
  {
    id: 'data-science',
    name: 'Data Science & Machine Learning',
    skills: [
      { name: 'Machine Learning', levelDescription: 'Supervised modeling, cross-validation, hyperparameter tuning', badge: 'Specialty' },
      { name: 'Statistical Analysis', levelDescription: 'Hypothesis testing, distributions, descriptive & inferential stats' },
      { name: 'Exploratory Data Analysis (EDA)', levelDescription: 'Pattern discovery, anomaly detection, statistical summaries' },
      { name: 'Correlation Analysis', levelDescription: 'Feature co-dependence, multicollinearity checks' },
      { name: 'Predictive Analytics', levelDescription: 'Future outcome forecasting based on historical datasets' },
      { name: 'Logistic Regression', levelDescription: 'Binary and multiclass baseline classification' },
      { name: 'Decision Trees & Random Forest', levelDescription: 'Ensemble bagging models for structured tabular data' },
      { name: 'Gradient Boosting', levelDescription: 'High-performance boosting algorithms for competitive scoring' },
      { name: 'Model Evaluation & ROC-AUC', levelDescription: 'Confusion matrices, precision-recall curves, ROC-AUC benchmarking' }
    ]
  },
  {
    id: 'data-processing',
    name: 'Data Processing & Business Intelligence',
    skills: [
      { name: 'Power BI', levelDescription: 'Interactive reports, dashboards, executive summaries', badge: 'Internship' },
      { name: 'DAX', levelDescription: 'Calculated columns, custom measures, and time-intelligence' },
      { name: 'Power Query', levelDescription: 'Data extraction, wrangling, unpivoting, transformation' },
      { name: 'Pandas & NumPy', levelDescription: 'Vectorized manipulation, multi-indexing, data cleaning' },
      { name: 'Data Wrangling & Cleaning', levelDescription: 'Handling missing data, outliers, standardizing encodings' },
      { name: 'Streamlit', levelDescription: 'Rapid interactive data apps and live model deployment' },
      { name: 'Matplotlib', levelDescription: 'Publication-quality exploratory charts and statistical distributions' }
    ]
  },
  {
    id: 'backend-databases',
    name: 'Backend & Databases',
    skills: [
      { name: 'REST APIs', levelDescription: 'Endpoint design, request validation, status codes, serialization' },
      { name: 'Flask', levelDescription: 'Microservice backend development, routing, templates' },
      { name: 'FastAPI', levelDescription: 'Asynchronous, high-speed Python API development' },
      { name: 'Django', levelDescription: 'Full-featured web framework, ORM, authentication' },
      { name: 'MySQL', levelDescription: 'Relational database design, query optimization, indexing' },
      { name: 'MongoDB', levelDescription: 'Document-oriented NoSQL storage for unstructured data' },
      { name: 'JWT Authentication', levelDescription: 'Stateless secure authentication & role-based access' },
      { name: 'MVC Architecture', levelDescription: 'Modular separation of concerns for scalable applications' }
    ]
  },
  {
    id: 'tools-ai',
    name: 'Tools & AI Productivity Stack',
    skills: [
      { name: 'Copilot', levelDescription: 'AI-assisted code development and refactoring' },
      { name: 'Cursor', levelDescription: 'AI code navigation and productivity workflow' },
      { name: 'Claude Code & ChatGPT', levelDescription: 'Algorithmic reasoning, architecture ideation, documentation' },
      { name: 'Git & GitHub', levelDescription: 'Version control, branching, pull requests, collaboration' },
      { name: 'VS Code', levelDescription: 'Primary integrated development environment' },
      { name: 'Jupyter Notebook', levelDescription: 'Interactive exploratory data science and model experiments' }
    ]
  },
  {
    id: 'core-cs',
    name: 'Core Computer Science',
    skills: [
      { name: 'Data Structures & Algorithms', levelDescription: 'Arrays, Trees, Graphs, Sorting, Searching, Complexity' },
      { name: 'Object-Oriented Programming (OOP)', levelDescription: 'Polymorphism, Inheritance, Encapsulation, Abstraction' },
      { name: 'Database Management Systems (DBMS)', levelDescription: 'ACID properties, Normalization, Transactions' },
      { name: 'Operating Systems', levelDescription: 'Process management, concurrency, memory allocation' },
      { name: 'Computer Networks', levelDescription: 'OSI model, TCP/IP, HTTP/HTTPS protocols, routing' }
    ]
  }
];

export const educationList: EducationItem[] = [
  {
    id: 'view-btech',
    institution: "Vignan's Institute of Engineering for Women",
    degree: 'B.Tech in Computer Science and Engineering – Data Science',
    period: '2023 – 2027',
    score: '8.67 / 10',
    scoreType: 'CGPA',
    highlights: [
      'Specializing in Data Science, Machine Learning, Statistical Analysis, and Big Data concepts.',
      'Active leadership in academic societies and technical clubs.',
      'Coursework: Data Structures, Algorithms, DBMS, Operating Systems, Machine Learning, Python Programming.'
    ]
  },
  {
    id: 'sri-chaitanya-inter',
    institution: 'Sri Chaitanya Junior College',
    degree: 'Class XII (Senior Secondary Education)',
    period: '2021 – 2023',
    score: '90.8%',
    scoreType: 'Score',
    highlights: [
      'Major in Mathematics, Physics, and Chemistry.',
      'Strong quantitative and analytical problem-solving foundation.'
    ]
  },
  {
    id: 'sun-school',
    institution: 'The Sun School',
    degree: 'Class X (Secondary School Certificate)',
    period: '2020 – 2021',
    score: '100%',
    scoreType: 'Perfect Score',
    highlights: [
      'Graduated with 100% academic score.',
      'Demonstrated academic excellence and analytical aptitude.'
    ]
  }
];

export const certifications: Certification[] = [
  {
    id: 'java-nptel',
    title: 'Programming in Java',
    issuer: 'NPTEL',
    detail: 'Elite + Gold Certification with top score of 97%',
    badge: 'Elite + Gold (97%)'
  },
  {
    id: 'oracle-ai',
    title: 'OCI 2025 Certified AI Foundations Associate',
    issuer: 'Oracle',
    detail: 'Cloud artificial intelligence principles, ML infrastructure, and cloud data architecture',
    badge: 'Certified Associate 2025'
  },
  {
    id: 'deloitte-analytics',
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte',
    detail: 'Business intelligence data modeling, forensic data analysis, and dashboard communication'
  },
  {
    id: 'tata-genai',
    title: 'GenAI-Powered Data Analytics Job Simulation',
    issuer: 'TATA',
    detail: 'Integrating Generative AI models into analytics pipelines for executive reporting'
  },
  {
    id: 'hackerrank-sql',
    title: 'SQL (Basics & Intermediate)',
    issuer: 'HackerRank',
    detail: 'Relational querying, window functions, complex joins, and aggregations'
  },
  {
    id: 'nptel-dbms',
    title: 'Database Management System',
    issuer: 'NPTEL',
    detail: 'Relational algebra, normal forms, transaction processing, and concurrency control'
  },
  {
    id: 'rice-python',
    title: 'Python Programming',
    issuer: 'Rice University (Coursera)',
    detail: 'Algorithmic thinking, data structures, and computational programming in Python'
  }
];

export const achievements: Achievement[] = [
  {
    id: 'young-turks',
    title: 'Naukri Campus Young Turks 2025',
    subtitle: '98.67 National Percentile',
    period: '2025',
    description: 'Awarded Certificate of Merit for exceptional academic and technical excellence, ranking in the top 1.33% nationwide.',
    badgeText: 'Top 1.33% Nationwide'
  },
  {
    id: 'hackhers',
    title: 'HackHers 2025 National Hackathon Finalist',
    subtitle: 'Team Leader',
    period: '2025',
    description: 'Spearheaded and mentored a 4-member team through three intensive qualifying rounds across India, advancing to the national finals.',
    badgeText: 'National Finalist'
  },
  {
    id: 'gfg-lead',
    title: 'Lead: GeeksforGeeks Student Chapter',
    subtitle: "Vignan's Institute of Engineering for Women",
    period: '2025 – Present',
    description: 'Organizing coding workshops, competitive programming sessions, and hackathons to empower peer engineers in DSA and systems.',
    badgeText: 'Student Chapter Lead'
  },
  {
    id: 'club-coordinator',
    title: 'Club Coordinator: Techrithi & Samskrithi Clubs',
    subtitle: "Vignan's Institute of Engineering for Women",
    period: '2025 – 2026',
    description: 'Coordinating collegiate technical events, hackathons, and cultural initiatives, driving student engagement and cross-functional leadership.',
    badgeText: 'Executive Coordinator'
  }
];
