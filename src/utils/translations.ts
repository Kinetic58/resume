
export type Language = 'en' | 'ru';

type Translations = {
  [key in Language]: {
    navHome: string;
    navProjects: string;
    navSkills: string;
    navContact: string;
    heroTitle: string;
    heroSubtitle: string;
    heroButton: string;
    projectsTitle: string;
    projectsSubtitle: string;
    skillsTitle: string;
    skillsSubtitle: string;
    contactTitle: string;
    contactSubtitle: string;
    contactNameLabel: string;
    contactEmailLabel: string;
    contactMessageLabel: string;
    contactSubmitButton: string;
    footerText: string;
    // Project titles
    project1Title: string;
    project1Description: string;
    project2Title: string;
    project2Description: string;
    project3Title: string;
    project3Description: string;
    // Skill categories
    frontendTitle: string;
    backendTitle: string;
    toolsTitle: string;
    softSkillsTitle: string;
    specialization: string;
    // Soft skills
    softSkill1: string;
    softSkill2: string;
    softSkill3: string;
    softSkill4: string;
    softSkill5: string;
    // Profile details
    educationLabel: string;
    dobLabel: string;
    englishLabel: string;
    employmentLabel: string;
    scheduleLabel: string;
    travelLabel: string;
    specializationDetails: string;
  };
};

export const translations: Translations = {
  en: {
    navHome: 'Home',
    navProjects: 'Projects',
    navSkills: 'Skills',
    navContact: 'Contact',
    heroTitle: 'Rodion Bushuev',
    heroSubtitle: 'Hi! I am Rodion, a passionate backend developer with extensive Python experience. I am constantly striving to learn and develop my skills. My focus is on building reliable backend systems, working with databases, developing APIs, and optimizing server performance.',
    heroButton: 'See My Work',
    projectsTitle: 'Projects',
    projectsSubtitle: 'A selection of my recent work',
    skillsTitle: 'Skills',
    skillsSubtitle: 'Technologies I work with',
    contactTitle: 'Contact',
    contactSubtitle: 'Get in touch with me',
    contactNameLabel: 'Your Name',
    contactEmailLabel: 'Your Email',
    contactMessageLabel: 'Your Message',
    contactSubmitButton: 'Send Message',
    footerText: '© 2024 All rights reserved',
    // Project titles
    project1Title: 'Medical Bot',
    project1Description: 'Telegram bot for clients and workers of a private medical clinic in the fight against bariotria',
    project2Title: 'Anonym Message Bot',
    project2Description: 'Anonym Message is a feature-rich anonymous chat bot for Telegram that allows users to chat anonymously, join various chat modes, and participate in in-service games.',
    project3Title: 'Mini Data Science',
    project3Description: 'A small project for dataset analysis for a university assignment.',
    // Skill categories
    frontendTitle: 'Frontend',
    backendTitle: 'Backend',
    toolsTitle: 'Frameworks & Tools',
    softSkillsTitle: 'Soft Skills',
    specialization: 'Specialization',
    // Soft skills
    softSkill1: 'Problem Solving',
    softSkill2: 'Team Collaboration',
    softSkill3: 'Communication',
    softSkill4: 'Adaptability',
    softSkill5: 'Critical Thinking',
    // Profile details
    educationLabel: 'Education',
    dobLabel: 'Date of Birth',
    englishLabel: 'English Level',
    employmentLabel: 'Employment Type',
    scheduleLabel: 'Work Schedule',
    travelLabel: 'Travel Availability',
    specializationDetails: 'I specialize in developing backend systems, high-load services, data processing, database integration, and server logic optimization. He also worked on the implementation of machine learning models and neural networks in a small part.'
  },
  ru: {
    navHome: 'Главная',
    navProjects: 'Проекты',
    navSkills: 'Навыки',
    navContact: 'Контакты',
    heroTitle: 'Бушуев Родион',
    heroSubtitle: 'Привет! Я Родион, увлеченный бэкенд-разработчик с обширным опытом работы с Python. Я постоянно стремлюсь учиться и развивать свои навыки. Я нацелен на создании надежных бэкенд-систем, работе с базами данных, разработке API и оптимизации серверной производительности.',
    heroButton: 'Мои работы',
    projectsTitle: 'Проекты',
    projectsSubtitle: 'Подборка моих недавних работ',
    skillsTitle: 'Навыки',
    skillsSubtitle: 'Технологии, с которыми я работаю',
    contactTitle: 'Контакты',
    contactSubtitle: 'Связь со мной',
    contactNameLabel: 'Ваше Имя',
    contactEmailLabel: 'Ваш Email',
    contactMessageLabel: 'Ваше Сообщение',
    contactSubmitButton: 'Отправить',
    footerText: '© 2024 Все права защищены',
    // Project titles
    project1Title: 'Медицинский бот',
    project1Description: 'Telegram бот для клиентов и работников частной медицинской клиники в борьбе с бариотрией',
    project2Title: 'Анонимный чат бот',
    project2Description: 'Anonym Message - это многофункциональный анонимный чат-бот для Telegram, который позволяет пользователям анонимно общаться, подключаться к различным режимам чата и участвовать в онлайн-играх.',
    project3Title: 'Небольшая аналитика данных',
    project3Description: 'Небольшой проектик на аналитику датасета для вузовского задания.',
    // Skill categories
    frontendTitle: 'Фронтенд',
    backendTitle: 'Бэкенд',
    toolsTitle: 'Фреймворки и инструменты',
    softSkillsTitle: 'Гибкие навыки',
    specialization: 'Специализация',
    // Soft skills
    softSkill1: 'Решение проблем',
    softSkill2: 'Командная работа',
    softSkill3: 'Коммуникация',
    softSkill4: 'Адаптивность',
    softSkill5: 'Критическое мышление',
    // Profile details
    educationLabel: 'Образование',
    dobLabel: 'Дата рождения',
    englishLabel: 'Уровень английского',
    employmentLabel: 'Тип занятости',
    scheduleLabel: 'График работы',
    travelLabel: 'Готовность к командировкам',
    specializationDetails: 'Специализируюсь на разработке backend-систем, высоконагруженных сервисов, обработке данных, интеграции с базами данных и оптимизации серверной логики. Также в малой части работал над реализацией моделей машинного обучения, нейронных сетях.'
  }
};
