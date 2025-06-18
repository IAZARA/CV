// Translations object - Sistema de internacionalización completo
const translations = {
    es: {
        profileTitle: "Especialista en Estrategia e Implementación de IA",
        contactGmail: "Gmail Personal",
        contactOfficial: "Correo Oficial",
        keySkills: "Competencias Clave",
        artificialIntelligence: "🤖 Inteligencia Artificial",
        developmentAutomation: "⚙️ Desarrollo & Automatización",
        leadershipAnalysis: "👥 Liderazgo & Análisis",
        languages: "Idiomas",
        spanish: "Español",
        english: "Inglés",
        native: "Nativo",
        intermediate: "Intermedio (B1)",
        professionalProfile: "Perfil Profesional",
        profileDescription: "<strong class='font-semibold gradient-text'>Especialista en Inteligencia Artificial</strong> con experiencia como Analista de Sistemas y Coordinador de área técnica.",
        focus: "Enfoque",
        focusDescription: "Resolución de problemas complejos mediante estrategias de IA",
        specialty: "Especialidad",
        specialtyDescription: "Integración de soluciones que optimizan procesos y reducen costos",
        quote: "💡 <em>\"Lidero iniciativas donde la IA es el motor para hacer más, más rápido y mejor\"</em>",
        professionalExperience: "Experiencia Profesional",
        current: "Actualidad",
        dataSystemAnalyst: "Data & System Analyst / Coordinador de Área Técnica",
        nationalSecurityMinistry: "Ministerio de Seguridad Nacional",
        technicalLeadership: "Liderazgo Técnico",
        automation: "Automatización",
        federalPoliceOfficer: "Oficial de Policía Federal",
        argentineFederalPolice: "Policía Federal Argentina",
        keyCompetencies: "🎯 Competencias clave:",
        pressureProblemSolving: "Resolución de problemas bajo presión",
        organizationalExperience: "🏢 Experiencia organizacional:",
        complexProcesses: "Comprensión de procesos complejos",
        administrativeAssistant: "Auxiliar Administrativo",
        foundations: "📋 Fundamentos:",
        administrativeHRExperience: "Experiencia en procesos administrativos y RRHH",
        academicBackground: "Formación Académica",
        systemsAnalyst: "Analista de Sistemas",
        ortInstitute: "Instituto Superior ORT",
        architectureFocus: "🏗️ <strong>Enfoque:</strong> Arquitectura y lógica de sistemas",
        aiApplication: "🤖 <strong>Aplicación:</strong> Base para integración de IA",
        criminalInvestigationDegree: "Lic. en Investigación Criminal",
        pfaUniversity: "Instituto Universitario de la PFA",
        analyticalFocus: "🧠 <strong>Enfoque:</strong> Mentalidad analítica y metódica",
        problemSolvingApplication: "🔍 <strong>Aplicación:</strong> Resolución de problemas complejos",
        technicalCoordination: "Coordinación de área técnica",
        analysisSupervision: "Supervisión de análisis y desarrollo",
        taskFlowPlanning: "Planificación de flujo de tareas",
        n8nWorkflows: "N8N workflows automatizados",
        apiIntegration: "Integración de APIs y tecnologías",
        dataAnalysisOptimization: "Análisis de datos para optimización",
    },
    en: {
        profileTitle: "AI Strategy & Implementation Specialist",
        contactGmail: "Personal Gmail",
        contactOfficial: "Official Email",
        keySkills: "Key Skills",
        artificialIntelligence: "🤖 Artificial Intelligence",
        developmentAutomation: "⚙️ Development & Automation",
        leadershipAnalysis: "👥 Leadership & Analysis",
        languages: "Languages",
        spanish: "Spanish",
        english: "English",
        native: "Native",
        intermediate: "Intermediate (B1)",
        professionalProfile: "Professional Profile",
        profileDescription: "<strong class='font-semibold gradient-text'>Artificial Intelligence Specialist</strong> with experience as Systems Analyst and Technical Area Coordinator.",
        focus: "Focus",
        focusDescription: "Solving complex problems through AI strategies",
        specialty: "Specialty",
        specialtyDescription: "Integration of solutions that optimize processes and reduce costs",
        quote: "💡 <em>\"I lead initiatives where AI is the engine to do more, faster and better\"</em>",
        professionalExperience: "Professional Experience",
        current: "Current",
        dataSystemAnalyst: "Data & System Analyst / Technical Area Coordinator",
        nationalSecurityMinistry: "National Security Ministry",
        technicalLeadership: "Technical Leadership",
        automation: "Automation",
        federalPoliceOfficer: "Federal Police Officer",
        argentineFederalPolice: "Argentine Federal Police",
        keyCompetencies: "🎯 Key competencies:",
        pressureProblemSolving: "Problem solving under pressure",
        organizationalExperience: "🏢 Organizational experience:",
        complexProcesses: "Understanding of complex processes",
        administrativeAssistant: "Administrative Assistant",
        foundations: "📋 Foundations:",
        administrativeHRExperience: "Experience in administrative and HR processes",
        academicBackground: "Academic Background",
        systemsAnalyst: "Systems Analyst",
        ortInstitute: "ORT Superior Institute",
        architectureFocus: "🏗️ <strong>Focus:</strong> Systems architecture and logic",
        aiApplication: "🤖 <strong>Application:</strong> Foundation for AI integration",
        criminalInvestigationDegree: "Criminal Investigation Degree",
        pfaUniversity: "PFA University Institute",
        analyticalFocus: "🧠 <strong>Focus:</strong> Analytical and methodical mindset",
        problemSolvingApplication: "🔍 <strong>Application:</strong> Complex problem solving",
        technicalCoordination: "Technical area coordination",
        analysisSupervision: "Analysis and development supervision",
        taskFlowPlanning: "Task flow planning",
        n8nWorkflows: "Automated N8N workflows",
        apiIntegration: "API and technology integration",
        dataAnalysisOptimization: "Data analysis for optimization",
    }
};

// Animated particles background
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    createParticles();

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate skill bars
                const skillBars = entry.target.querySelectorAll('.skill-progress');
                skillBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    setTimeout(() => {
                        bar.style.width = width + '%';
                    }, 500);
                });
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    const elementsToReveal = document.querySelectorAll('.reveal');
    elementsToReveal.forEach(element => {
        observer.observe(element);
    });

    // Add smooth scrolling behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add typing effect to subtitle
    const typewriterElement = document.querySelector('.typewriter');
    if (typewriterElement) {
        const text = typewriterElement.textContent;
        typewriterElement.textContent = '';
        typewriterElement.style.borderRight = '2px solid #5eead4';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                typewriterElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                // Remove cursor after typing is complete
                setTimeout(() => {
                    typewriterElement.style.borderRight = 'none';
                }, 1000);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }
});

// Add mouse movement parallax effect
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.card');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;
        
        const deltaX = (e.clientX - cardCenterX) * 0.01;
        const deltaY = (e.clientY - cardCenterY) * 0.01;
        
        card.style.transform = `perspective(1000px) rotateX(${deltaY}deg) rotateY(${deltaX}deg)`;
    });
});

// Reset card transforms when mouse leaves
document.addEventListener('mouseleave', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
});

// Language Toggle Functionality - Sistema mejorado de internacionalización
let currentLanguage = 'es';
const langToggle = document.getElementById('langToggle');
const currentLangSpan = document.getElementById('currentLang');

function toggleLanguage() {
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    updateLanguage();
}

function updateLanguage() {
    // Update all elements with data-key attributes (new system)
    const elementsWithKeys = document.querySelectorAll('[data-key]');
    elementsWithKeys.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            const translation = translations[currentLanguage][key];
            // Check if translation contains HTML
            if (translation.includes('<') && translation.includes('>')) {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        }
    });

    // Update all elements with data-es and data-en attributes (legacy system)
    const elementsWithDataAttrs = document.querySelectorAll('[data-es][data-en]');
    elementsWithDataAttrs.forEach(element => {
        const text = element.getAttribute(`data-${currentLanguage}`);
        if (text) {
            element.textContent = text;
        }
    });

    // Update language indicator
    currentLangSpan.textContent = currentLanguage.toUpperCase();

    // Update document language
    document.documentElement.lang = currentLanguage;

    // Store preference in localStorage
    localStorage.setItem('preferredLanguage', currentLanguage);
}

// Load saved language preference
function loadLanguagePreference() {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
        currentLanguage = savedLang;
        updateLanguage();
    }
}

// Event listener for language toggle
langToggle.addEventListener('click', toggleLanguage);

// Load language preference on page load
loadLanguagePreference();