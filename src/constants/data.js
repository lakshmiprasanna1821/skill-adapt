//  Domains & Roles 
export const DOMAINS = [
  {
    id: "engineering", label: "Engineering",
    roles: [
      { id: "sw-dev", label: "Software Developer" },
      { id: "devops", label: "DevOps Engineer" },
      { id: "ml-eng", label: "ML Engineer" },
      { id: "qa",     label: "QA Engineer" },
    ],
  },
  {
    id: "marketing", label: "Marketing",
    roles: [
      { id: "content", label: "Content Strategist" },
      { id: "growth",  label: "Growth Manager" },
      { id: "brand",   label: "Brand Designer" },
    ],
  },
  {
    id: "product", label: "Product",
    roles: [
      { id: "pm",         label: "Product Manager" },
      { id: "ux",         label: "UX Designer" },
      { id: "researcher", label: "User Researcher" },
    ],
  },
  {
    id: "operations", label: "Operations",
    roles: [
      { id: "ops-mgr",      label: "Operations Manager" },
      { id: "data-analyst", label: "Data Analyst" },
    ],
  },
];

// ---- Role Detail ------
export const ROLES = {
  "sw-dev": {
    title: "Software Developer", sub: "Engineering · IC Track",
    desc: "Designs, builds, and maintains scalable software systems. Works across the full development lifecycle from architecture to deployment.",
    categories: {
      Languages:  ["Python", "JavaScript", "TypeScript", "Go", "SQL"],
      Frameworks: ["React", "Node.js", "FastAPI", "Docker", "Kubernetes"],
      Practices:  ["TDD", "Code Review", "CI/CD", "Agile", "Git"],
      Systems:    ["REST APIs", "Microservices", "Cloud (AWS)", "Databases", "Caching"],
    },
  },
  devops: {
    title: "DevOps Engineer", sub: "Engineering · Platform Track",
    desc: "Bridges development and operations by building CI/CD pipelines, infrastructure-as-code, and monitoring systems.",
    categories: {
      Infrastructure: ["Terraform", "Ansible", "AWS CDK", "Pulumi"],
      Containers:     ["Docker", "Kubernetes", "Helm", "ECS", "EKS"],
      "CI/CD":        ["GitHub Actions", "Jenkins", "ArgoCD", "CircleCI"],
      Observability:  ["Prometheus", "Grafana", "Datadog", "PagerDuty"],
    },
  },
  "ml-eng": {
    title: "ML Engineer", sub: "Engineering · AI/ML Track",
    desc: "Develops and deploys machine learning models into production. Bridges data science research and scalable production systems.",
    categories: {
      Foundations: ["Linear Algebra", "Statistics", "Probability", "Calculus"],
      Frameworks:  ["PyTorch", "TensorFlow", "scikit-learn", "HuggingFace"],
      MLOps:       ["MLflow", "Weights & Biases", "Feature Stores", "Model Serving"],
      Data:        ["Pandas", "Spark", "Airflow", "dbt", "SQL"],
    },
  },
  qa: {
    title: "QA Engineer", sub: "Engineering · Quality Track",
    desc: "Ensures software quality through systematic testing, automation frameworks, and close collaboration with development teams.",
    categories: {
      "Testing Types": ["Unit Tests", "Integration", "E2E", "Performance", "Security"],
      Automation:      ["Selenium", "Playwright", "Cypress", "Jest", "Pytest"],
      Process:         ["Test Planning", "Bug Reporting", "Regression", "Exploratory"],
    },
  },
  content: {
    title: "Content Strategist", sub: "Marketing · Content Track",
    desc: "Develops and executes content strategies that attract, engage, and convert audiences across multiple channels.",
    categories: {
      Creation:  ["Copywriting", "SEO Writing", "Storytelling", "Editing"],
      Analytics: ["Google Analytics", "Search Console", "Ahrefs", "Semrush"],
      Channels:  ["Blog", "Email", "Social Media", "Video", "Podcast"],
    },
  },
  growth: {
    title: "Growth Manager", sub: "Marketing · Growth Track",
    desc: "Identifies and executes growth opportunities across the funnel. Runs experiments for sustainable user acquisition.",
    categories: {
      Acquisition: ["Paid Search", "Paid Social", "SEO", "Referral", "Partnerships"],
      Analytics:   ["Amplitude", "Mixpanel", "SQL", "A/B Testing", "Funnels"],
      Retention:   ["Email Automation", "Push Notifications", "Lifecycle", "NPS"],
    },
  },
  brand: {
    title: "Brand Designer", sub: "Marketing · Design Track",
    desc: "Crafts the visual identity and design systems that define how the brand looks and communicates.",
    categories: {
      Visual:  ["Typography", "Color Theory", "Illustration", "Motion"],
      Tools:   ["Figma", "Illustrator", "After Effects", "Photoshop"],
      Systems: ["Design Tokens", "Component Libraries", "Brand Guidelines"],
    },
  },
  pm: {
    title: "Product Manager", sub: "Product · Leadership Track",
    desc: "Owns the product roadmap and drives cross-functional teams to ship features that solve real user problems.",
    categories: {
      Discovery:     ["User Interviews", "Jobs-to-be-Done", "Market Research", "Personas"],
      Delivery:      ["Roadmapping", "Prioritization", "Sprint Planning", "Backlog"],
      Metrics:       ["OKRs", "KPIs", "Retention", "Activation", "Revenue"],
      Collaboration: ["Stakeholder Mgmt", "PRDs", "Specs", "Cross-functional"],
    },
  },
  ux: {
    title: "UX Designer", sub: "Product · Design Track",
    desc: "Creates intuitive, accessible product experiences through research-driven design and prototyping.",
    categories: {
      Research: ["Usability Testing", "Contextual Inquiry", "Card Sorting", "Surveys"],
      Design:   ["Wireframing", "Prototyping", "Interaction Design", "Visual Design"],
      Tools:    ["Figma", "Maze", "Hotjar", "UserTesting", "FigJam"],
    },
  },
  researcher: {
    title: "User Researcher", sub: "Product · Research Track",
    desc: "Generates deep user insights through qualitative and quantitative research to inform product decisions.",
    categories: {
      Qualitative:  ["Interviews", "Ethnography", "Diary Studies", "Focus Groups"],
      Quantitative: ["Surveys", "Analytics", "Eye Tracking", "Statistical Analysis"],
      Synthesis:    ["Affinity Mapping", "Journey Maps", "Personas", "Insights Reports"],
    },
  },
  "ops-mgr": {
    title: "Operations Manager", sub: "Operations · Management Track",
    desc: "Optimizes business processes, manages cross-functional operations, and drives efficiency.",
    categories: {
      Process:    ["Process Mapping", "SOP Development", "Lean", "Six Sigma"],
      Tools:      ["JIRA", "Notion", "Monday.com", "Tableau", "Excel"],
      Leadership: ["Team Management", "OKRs", "Vendor Management", "Budgeting"],
    },
  },
  "data-analyst": {
    title: "Data Analyst", sub: "Operations · Analytics Track",
    desc: "Transforms raw data into actionable insights through analysis, visualization, and stakeholder communication.",
    categories: {
      Analysis:      ["SQL", "Python", "Excel", "Statistics", "R"],
      Visualization: ["Tableau", "Looker", "Power BI", "Matplotlib", "D3.js"],
      Business:      ["Metrics Definition", "Dashboards", "Reporting", "Forecasting"],
    },
  },
};

//  Flashcard Data
export const FLASHCARDS = {
  "Programming Fundamentals": {
    icon: "💻",
    skills: {
      "Variables & Types": [],
      "Functions & Scope": [],
    },
  },
  "System Design": {
    icon: "🏗️",
    skills: {
      Scalability: [],
      Caching: [],
    },
  },
  "Data Structures": {
    icon: "🔗",
    skills: {
      "Arrays & Lists": [],
      "Trees & Graphs": [],
    },
  },
  "Agile & Process": {
    icon: "🔄",
    skills: {
      Scrum: [],
      Kanban: [],
    },
  },
  "Cloud & DevOps": {
    icon: "☁️",
    skills: {
      Containers: [],
      "CI/CD": [],
    },
  },
  Security: {
    icon: "🔐",
    skills: {
      "Auth & Identity": [],
      "Common Attacks": [],
    },
  },
  "Product Thinking": {
    icon: "💡",
    skills: {
      Discovery: [],
      Prioritization: [],
    },
  },
  Communication: {
    icon: "🗣️",
    skills: {
      Written: [],
      Presentation: [],
    },
  },
};
