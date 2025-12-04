// === RESUME SYNCED DATA ===
const resumeData = {
    skills: [
    { category: 'Programming & Scripting', items: [
        'Python (Pandas, NumPy, Seaborn, Matplotlib)',
        'R',
        'SQL (Joins, CTEs, Window Functions)',
        'Java'
    ]},
    { category: 'Data Visualization', items: [
        'Power BI (DAX, Power Query, Power Pivot)',
        'Tableau',
        'Excel (PivotTables, Charts)'
    ]},
    { category: 'Databases', items: [
        'PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Cassandra'
    ]},
    { category: 'Cloud & Big Data', items: [
        'AWS (S3, RDS, IAM, Glue, Redshift, Athena, QuickSight)',
        'Azure (Data Factory, Synapse, Databricks)',
        'PySpark', 'Airflow'
    ]},
    { category: 'Machine Learning', items: [
        'Regression', 'Classification', 'Clustering'
    ]},
    { category: 'Project & Tools', items: [
        'JIRA', 'Git', 'GitHub', 'Microsoft Office', 'Figma'
    ]},
    { category: 'Web & Environments', items: [
        'HTML, CSS, JavaScript',
        'VS Code, Jupyter, RStudio, PyCharm',
        'Windows, Linux'
    ]},
    ],

    experience: [
    {
        id: 'gmc',
        title: 'Reporting Analyst',
        company: 'Medical College • May 2020 – Dec 2022',
        summary: 'Automated reporting across 500+ weekly records; built dashboards for academic performance and engagement.',
        description: [
        'Improved reporting efficiency by 30% by automating weekly Excel workflows to process 500+ operational and academic records with accurate variance tracking and reconciliation.',
        'Ensured zero-error reporting and accurate record maintenance by cleaning, validating, and reconciling 50+ attendance and performance datasets using PivotTables, VLOOKUP, and conditional logic.', 
        'Enhanced department-wide data integrity by building and maintaining 10+ dashboards and KPI reports that monitored trends, exceptions, and discrepancies, enabling faster corrective decisions.'
        ]
    },
    {
        id: 'cognibot',
        title: 'Data Analyst Intern',
        company: 'Cognibot • Jul 2021 – Dec 2021',
        summary: 'Built minute-level Bitcoin ingestion + analytics with Python → PostgreSQL and live Plotly visuals.',
        description: [
        'Automated collection and validation of 1,400+ daily time-series records, improving data quality, consistency, and audit traceability across inventory-like datasets.', 
        'Performed data cleaning, anomaly detection, and variance calculations using Python, ensuring reliable inputs for operational analysis.',  
        'Developed dashboards to monitor real-time performance metrics with alerts for abnormal values, strengthening exception reporting and reconciliation accuracy.'
        ]
    }
    ],

    projects: [
    {
        id: 'creditcard',
        title: 'Credit Card Financial Dashboard — Power BI',
        summary: 'Real-time KPI monitoring with advanced DAX and demographic drill-downs.',
        link: 'https://github.com/Letitia09/credit-card-financial-dashboard',
        description: [
        'Built real-time Power BI dashboards using advanced DAX and SQL, applying skills in data reconciliation, exception detection, variance tracking, and segmentation—directly supporting decision-making and accuracy in financial performance reporting.'
        ]
    },
    {
        id: 'callcenter',
        title: 'Call Center KPI Performance Dashboard — Tableau',
        summary: 'Automated monthly reporting with LODs and dynamic filters.',
        link: 'https://github.com/Letitia09/Call-Center-KPI-Dashboard',
        description: [
        'Built an interactive Tableau dashboard with LOD expressions, calculated KPIs, and dynamic filters to monitor call-center operations across 1K+ call records.',
        'Surfaced 70% resolution vs 85% target and mid-week call peaks (Tue–Thu), improving staffing and service-quality decisions.',
        'Standardized refresh and views to enhance reporting accuracy and cross-team visibility.'
        ]
    },
    {
        id: 'realestate',
        title: 'Real-Estate Data Pipeline & Analytics Platform',
        summary: 'AWS + Databricks Lakehouse (Medallion) with PySpark and OLAP star schema.',
        link: 'https://github.com/Letitia09/Real-Estate-Pipeline',
        description: [
        'Engineered automated data-quality workflows (profiling, cleansing, validation) using SQL & PySpark, simulating inventory-quality control processes, ensuring consistent, reliable datasets used for operational planning.'
        ]
    },
    {
        id: 'dataprism',
        title: 'Data Prism — AI-Powered Dashboard Generator',
        summary: 'Web app that turns CSVs into dashboards with Google Gemini API.',
        link: 'https://github.com/Letitia09/Data-Prism',
        description: [
        'Developed a dynamic web app (HTML/CSS/JS) that transforms raw CSV files into interactive dashboards via the Google Gemini API for instant AI-generated insights.',
        'Implemented Chart.js visuals with on-click modals and a no-code interface to democratize analytics for non-technical users.',
        'Added two modes: one-click Automated Analysis and Custom Prompt for tailored insights.'
        ]
    },
    // {
    //     id: 'amazonde',
    //     title: 'Amazon Data Engineering Books Pipeline — Airflow',
    //     summary: 'End-to-end ETL with Dockerized Airflow + PostgreSQL.',
    //     link: 'https://github.com/Letitia09/Amazon-Books-Pipeline-Airflow',
    //     description: [
    //     'Automated an ETL workflow using Apache Airflow + Python to scrape and load Amazon’s Data Engineering books dataset, eliminating manual extraction.',
    //     'Built robust Pandas cleaning/deduplication routines to improve data reliability and downstream analysis accuracy by 30%.',
    //     'Containerized with Docker (Airflow, PostgreSQL, pgAdmin) to simplify setup and portability.'
    //     ]
    // },

{
        id: 'Blinkit',
        title: 'Blinkit Sales & Inventory Performance Dashboard - Power BI',
        summary: 'Enhanced inventory and sales insights for 10K+ items using DAX and Power Query, enabling smarter stock allocation and operational efficiency.',
        link: 'https://github.com/Letitia09/Projects/Power BI/Blinkit Inventory Analysis Dashboard',
        description: [
        'Improved inventory and sales insights by analyzing 10K+ items across outlets, identifying top-performing categories/outlets and segmentation opportunities through DAX, Power Query, and automated data modeling—supporting stock allocation, inventory visibility, and operational optimization. '
        ]
    },
        
    {
        id: 'figma',
        title: 'Flight Booking App Screens — UI/UX (Figma)',
        summary: '15+ high-fidelity mobile screens and prototype.',
        link: 'https://github.com/Letitia09/Call-Center-KPI-Dashboard3',
        description: [
        'Designed 15+ high-fidelity mobile screens (home→payments) optimized for responsiveness and accessibility.',
        'Created an interactive prototype simulating booking flows (trip type, seat class, travelers, pricing) to reduce friction and improve first-time usability.',
        'Followed a structured process (research → wireframes → visual design → prototyping) and collaborated in live reviews for handoff readiness.'
        ]
    }
    ]
};

// === PAGE LOGIC ===
document.addEventListener('DOMContentLoaded', () => {
    // Modal
    const modal = document.getElementById('item-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const modalClose = document.getElementById('modal-close');

    function openModal(item) {
    modalTitle.textContent = item.title;
    modalBody.innerHTML = `<ul class="list-disc pl-5 space-y-3">${item.description.map(d => `<li>${d}</li>`).join('')}</ul>`;
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('open'), 10);
    document.body.style.overflow = 'hidden';
    }
    const closeModal = () => {
    modal.classList.remove('open');
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }, 300);
    };
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

    // Skills
    const skillsContainer = document.getElementById('skills-container');
    resumeData.skills.forEach(cat => {
    const el = document.createElement('div');
    el.className = 'bg-white p-6 rounded-lg shadow-md skill-card';
    el.innerHTML = `
        <h3 class="text-xl font-semibold mb-3 text-gray-900">${cat.category}</h3>
        <ul class="space-y-2 list-disc list-inside">
        ${cat.items.map(i => `<li class="text-gray-600">${i}</li>`).join('')}
        </ul>`;
    skillsContainer.appendChild(el);
    });

    // Experience
    const experienceList = document.getElementById('experience-list');
    function updateExperienceView(id) {
    const exp = resumeData.experience.find(e => e.id === id);
    if (!exp) return;
    document.getElementById('experience-title').textContent = exp.title;
    document.getElementById('experience-subtitle').textContent = exp.company;
    document.getElementById('experience-description').innerHTML =
        exp.description.map(item => `<p class="flex items-start"><span class="text-blue-500 mr-3 mt-1.5 flex-shrink-0">&#10003;</span><span>${item}</span></p>`).join('');
    document.querySelectorAll('.experience-item').forEach(n => {
        n.classList.toggle('active', n.dataset.id === id);
    });
    }
    resumeData.experience.forEach(exp => {
    const item = document.createElement('div');
    item.className = 'experience-item p-4 rounded-md';
    item.dataset.id = exp.id;
    item.innerHTML = `<h4 class="font-semibold">${exp.title}</h4><p class="text-sm text-gray-500">${exp.company}</p>`;
    item.addEventListener('click', () => updateExperienceView(exp.id));
    experienceList.appendChild(item);
    });
    if (resumeData.experience.length) updateExperienceView(resumeData.experience[0].id);

    // Projects
    const projectGrid = document.getElementById('project-grid');
    resumeData.projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-xl shadow-sm p-6 flex flex-col showcase-card';
    card.innerHTML = `
        <h3 class="text-xl font-bold text-gray-900 mb-2">${project.title}</h3>
        <p class="text-gray-600 mb-4 flex-grow">${project.summary}</p>
        <div class="flex justify-between items-center mt-auto">
            <button class="text-blue-500 font-semibold text-left">View Details &rarr;</button>
            ${project.link ? `<a href="${project.link}" target="_blank" rel="noreferrer" class="text-sm text-gray-500 hover:text-blue-600 font-medium underline">View Project</a>` : ''}
        </div>`;
    card.querySelector('button').addEventListener('click', () => openModal(project));
    projectGrid.appendChild(card);
    });

    // Nav
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

    document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) mobileMenu.classList.add('hidden');
        const target = document.querySelector(a.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
    });

    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('main section');
    function changeNav() {
    let index = sections.length;
    while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
    navLinks.forEach(l => l.classList.remove('active'));
    const active = document.querySelector(`.nav-link[href="#${sections[index].id}"]`);
    if (active) active.classList.add('active');
    }
    changeNav();
    window.addEventListener('scroll', changeNav);
});




