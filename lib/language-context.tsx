"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type Language = "fr" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.impact": "Impact",
    "nav.roles": "Rôles",
    "nav.projects": "Projets",
    "nav.contact": "Contact",

    // Hero Section
    "hero.aiAgentBuilder": "AI Agent Builder",
    "hero.assistantTechnique": "Assistant Technique",
    "hero.description": "Contribuant à l'écosystème de LaStartupStation en développant des fonctionnalités clés pour LaStartupSquare et en supportant les étudiants à Geeks Institute. Développement d'agents IA conversationnels avancés, accompagnement technique des cohortes Full Stack et GenAI, organisation de hackathons et création de solutions intelligentes pour automatiser les processus.",
    "hero.fullStackDeveloper": "Full Stack Developer",
    "hero.genaiSpecialist": "GenAI Specialist",
    "hero.technicalSupport": "Technical Support",
    "hero.hackathons": "9+ Hackathons",
    "hero.genaiExpert": "GenAI Expert",
    "hero.downloadReport": "Télécharger le Rapport",

    // Impact Section
    "impact.title": "Mon",
    "impact.titleHighlight": "Impact Total",
    "impact.subtitle": "Participation active aux hackathons et accompagnement des cohortes à Geeks Institute",
    "impact.hackathonsOrganized": "Hackathons organisés",
    "impact.each": "36h chacun",
    "impact.fullStack": "Full Stack",
    "impact.hackathons": "hackathons",
    "impact.gameDev": "Game Dev",
    "impact.hackathon": "hackathon",
    "impact.genai": "GenAI",
    "impact.rolesTitle": "Rôles & Responsabilités",
    "impact.role1": "Organisation technique & support continu",
    "impact.role2": "Accompagnement avancé sur les projets GenAI",
    "impact.role3": "Membre du jury : évaluation technique",
    "impact.role4": "Feedback professionnel pour chaque équipe",

    // Services Section
    "services.title": "Mes",
    "services.titleHighlight": "Rôles Techniques",
    "services.subtitle": "Accompagnement complet des cohortes GenAI et Full Stack avec un focus sur le développement des compétences",
    "services.genaiTitle": "Assistant Technique – GenAI Casablanca",
    "services.fullstackTitle": "Assistant Technique – Full Stack Casablanca",
    "services.mainTasks": "Tâches principales",
    "services.otherMissions": "Autres missions",
    // GenAI Tasks
    "services.genai.main1": "Accompagnement individuel pour débloquer les participants",
    "services.genai.main2": "Encadrement chaque vendredi de projets complets (A → Z) avec pitch final",
    "services.genai.main3": "Développement des hard skills et soft skills",
    "services.genai.other1": "Support technique général pour les participants",
    "services.genai.other2": "Vérification et validation des projets rendus",
    "services.genai.other3": "Correction des erreurs IA (API, modèles, prompts)",
    "services.genai.other4": "Feedback rapide pour améliorer la qualité des livrables",
    "services.genai.other5": "Suivi de la progression et respect des consignes",
    "services.genai.other6": "Aide technique sur l'utilisation des modèles GenAI et des API",
    // Full Stack Tasks
    "services.fullstack.main1": "Support technique pour les participants",
    "services.fullstack.main2": "Aide à la compréhension des cours et exercices",
    "services.fullstack.main3": "Accompagnement individuel pour débloquer les participants",
    "services.fullstack.other1": "Vérification et validation des projets",
    "services.fullstack.other2": "Correction des erreurs techniques (frontend / backend)",
    "services.fullstack.other3": "Assistance sur l'utilisation des API et bases de données",
    "services.fullstack.other4": "Support Git/GitHub (push, pull, branches, conflits)",
    "services.fullstack.other5": "Feedback rapide pour améliorer la qualité du code",

    // Portfolio Section
    "portfolio.title": "Projets",
    "portfolio.titleHighlight": "Featured",
    "portfolio.subtitle": "Solutions IA développées pour automatiser et améliorer l'expérience utilisateur",
    "portfolio.multiLanguage": "Multi-langue",
    "portfolio.24h": "24/7",
    "portfolio.problem": "❗ Le Problème",
    "portfolio.solution": "✅ Ma Solution",
    "portfolio.impact": "📈 L'Impact",
    "portfolio.screenshots": "Captures d'écran",
    // V1
    "portfolio.v1.title": "WhatsApp-AI-V1",
    "portfolio.v1.subtitle": "Assistant IA Conversationnel pour Geeks Institute",
    "portfolio.v1.problem": "Le programme Geeks Institute reçoit un grand volume de messages sur WhatsApp. Répondre manuellement demande beaucoup de temps, entraîne des erreurs, limite la disponibilité, ralentit les inscriptions et complique la gestion des données. De plus, les utilisateurs écrivent en plusieurs langues, ce qui rend le support encore plus difficile.",
    "portfolio.v1.solutionIntro": "J'ai développé WhatsApp-AI-V1, un assistant virtuel intelligent capable de :",
    "portfolio.v1.feature1": "Répondre automatiquement 24/7",
    "portfolio.v1.feature2": "Comprendre français, anglais et arabe",
    "portfolio.v1.feature3": "Guider les utilisateurs étape par étape dans leur inscription",
    "portfolio.v1.feature4": "Collecter toutes les informations (nom, email, téléphone…)",
    "portfolio.v1.feature5": "Présenter les formations et programmes",
    "portfolio.v1.feature6": "Enregistrer automatiquement les données dans Google Sheets",
    "portfolio.v1.feature7": "Maintenir le contexte des conversations",
    "portfolio.v1.feature8": "Fournir une expérience fluide, rapide et cohérente",
    "portfolio.v1.stat1Value": "80%+",
    "portfolio.v1.stat1Label": "Réduction du temps de gestion",
    "portfolio.v1.stat2Value": "100%",
    "portfolio.v1.stat2Label": "Taux de réponse 24/7",
    "portfolio.v1.stat3Value": "3",
    "portfolio.v1.stat3Label": "Langues supportées",
    "portfolio.v1.benefit1": "Inscriptions plus rapides, complètes et organisées",
    "portfolio.v1.benefit2": "Support immédiat dans la langue de l'utilisateur",
    "portfolio.v1.benefit3": "Image professionnelle renforcée",
    "portfolio.v1.benefit4": "Système scalable et stable",
    // V2
    "portfolio.v2.title": "WhatsApp-AI-V2",
    "portfolio.v2.subtitle": "Système Conversationnel Complet",
    "portfolio.v2.problem": "WhatsApp-AI-V1 avait déjà apporté une première solution, mais certaines limites apparaissaient lors de l'augmentation du nombre d'utilisateurs : architecture moins modulaire, historique conversationnel limité, difficulté à ajouter de nouvelles fonctionnalités, scalabilité insuffisante pour un usage intensif, outils internes moins structurés.",
    "portfolio.v2.solutionIntro": "Pour résoudre ces limites, j'ai développé WhatsApp-AI-V2, une version améliorée basée sur une architecture entièrement modulaire :",
    "portfolio.v2.feature1": "Architecture modulaire (services, routes, tools, middlewares)",
    "portfolio.v2.feature2": "17 outils métiers compatibles OpenAI Function Calling",
    "portfolio.v2.feature3": "Gestion du contexte conversationnel plus stable",
    "portfolio.v2.feature4": "Double base de données : Firestore + MongoDB",
    "portfolio.v2.feature5": "Workflow conversationnel en 6 étapes professionnelles",
    "portfolio.v2.feature6": "Sécurité renforcée (validation webhook, rate limiting)",
    "portfolio.v2.feature7": "Traitement asynchrone plus rapide",
    "portfolio.v2.feature8": "Meilleure séparation des responsabilités",
    "portfolio.v2.feature9": "Système simple à étendre et faire évoluer",
    "portfolio.v2.stat1Value": "17",
    "portfolio.v2.stat1Label": "Outils métiers intégrés",
    "portfolio.v2.stat2Value": "6",
    "portfolio.v2.stat2Label": "Étapes de workflow",
    "portfolio.v2.stat3Value": "2x",
    "portfolio.v2.stat3Label": "Bases de données",
    "portfolio.v2.benefit1": "Réduction significative du temps de gestion",
    "portfolio.v2.benefit2": "Taux de réponse de 100% grâce à l'automatisation",
    "portfolio.v2.benefit3": "Parcours d'inscription sans erreurs",
    "portfolio.v2.benefit4": "Support fluide en français, anglais et arabe",
    "portfolio.v2.benefit5": "Meilleure précision grâce aux tools dédiés",
    "portfolio.v2.benefit6": "Données centralisées via Firestore, MongoDB et Sheets",
    "portfolio.v2.benefit7": "Maintenance simplifiée et meilleures performances",

    // Footer
    "footer.navigation": "Navigation",
    "footer.skills": "Compétences",
    "footer.contact": "Contact",
    "footer.fullStackDev": "Full Stack Development",
    "footer.genaiLlms": "GenAI & LLMs",
    "footer.whatsappBots": "WhatsApp Bots",
    "footer.technicalSupport": "Support Technique",
    "footer.apiIntegration": "API Integration",
    "footer.rights": "© 2025 Mohamed Meksi. Tous droits réservés.",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.impact": "Impact",
    "nav.roles": "Roles",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero Section
    "hero.aiAgentBuilder": "AI Agent Builder",
    "hero.assistantTechnique": "Technical Assistant",
    "hero.description": "Contributing to LaStartupStation's ecosystem by developing key features for LaStartupSquare and supporting students at Geeks Institute. Development of advanced conversational AI agents, technical support for Full Stack and GenAI cohorts, hackathon organization, and creation of intelligent solutions to automate processes.",
    "hero.fullStackDeveloper": "Full Stack Developer",
    "hero.genaiSpecialist": "GenAI Specialist",
    "hero.technicalSupport": "Technical Support",
    "hero.hackathons": "9+ Hackathons",
    "hero.genaiExpert": "GenAI Expert",
    "hero.downloadReport": "Download Report",

    // Impact Section
    "impact.title": "My",
    "impact.titleHighlight": "Total Impact",
    "impact.subtitle": "Active participation in hackathons and support for cohorts at Geeks Institute",
    "impact.hackathonsOrganized": "Hackathons organized",
    "impact.each": "36h each",
    "impact.fullStack": "Full Stack",
    "impact.hackathons": "hackathons",
    "impact.gameDev": "Game Dev",
    "impact.hackathon": "hackathon",
    "impact.genai": "GenAI",
    "impact.rolesTitle": "Roles & Responsibilities",
    "impact.role1": "Technical organization & continuous support",
    "impact.role2": "Advanced guidance on GenAI projects",
    "impact.role3": "Jury member: technical evaluation",
    "impact.role4": "Professional feedback for each team",

    // Services Section
    "services.title": "My",
    "services.titleHighlight": "Technical Roles",
    "services.subtitle": "Complete support for GenAI and Full Stack cohorts with a focus on skills development",
    "services.genaiTitle": "Technical Assistant – GenAI Casablanca",
    "services.fullstackTitle": "Technical Assistant – Full Stack Casablanca",
    "services.mainTasks": "Main Tasks",
    "services.otherMissions": "Other Missions",
    // GenAI Tasks
    "services.genai.main1": "Individual support to unblock participants",
    "services.genai.main2": "Weekly project supervision (A → Z) with final pitch",
    "services.genai.main3": "Hard skills and soft skills development",
    "services.genai.other1": "General technical support for participants",
    "services.genai.other2": "Project verification and validation",
    "services.genai.other3": "AI error correction (API, models, prompts)",
    "services.genai.other4": "Quick feedback to improve deliverable quality",
    "services.genai.other5": "Progress tracking and guidelines compliance",
    "services.genai.other6": "Technical help on GenAI models and API usage",
    // Full Stack Tasks
    "services.fullstack.main1": "Technical support for participants",
    "services.fullstack.main2": "Help understanding courses and exercises",
    "services.fullstack.main3": "Individual support to unblock participants",
    "services.fullstack.other1": "Project verification and validation",
    "services.fullstack.other2": "Technical error correction (frontend / backend)",
    "services.fullstack.other3": "API and database usage assistance",
    "services.fullstack.other4": "Git/GitHub support (push, pull, branches, conflicts)",
    "services.fullstack.other5": "Quick feedback to improve code quality",

    // Portfolio Section
    "portfolio.title": "Projects",
    "portfolio.titleHighlight": "Featured",
    "portfolio.subtitle": "AI solutions developed to automate and improve user experience",
    "portfolio.multiLanguage": "Multi-language",
    "portfolio.24h": "24/7",
    "portfolio.problem": "❗ The Problem",
    "portfolio.solution": "✅ My Solution",
    "portfolio.impact": "📈 The Impact",
    "portfolio.screenshots": "Screenshots",
    // V1
    "portfolio.v1.title": "WhatsApp-AI-V1",
    "portfolio.v1.subtitle": "Conversational AI Assistant for Geeks Institute",
    "portfolio.v1.problem": "The Geeks Institute program receives a high volume of messages on WhatsApp. Manual response takes a lot of time, causes errors, limits availability, slows registrations, and complicates data management. Additionally, users write in multiple languages, making support even more difficult.",
    "portfolio.v1.solutionIntro": "I developed WhatsApp-AI-V1, an intelligent virtual assistant capable of:",
    "portfolio.v1.feature1": "Automatically responding 24/7",
    "portfolio.v1.feature2": "Understanding French, English, and Arabic",
    "portfolio.v1.feature3": "Guiding users step by step through registration",
    "portfolio.v1.feature4": "Collecting all information (name, email, phone…)",
    "portfolio.v1.feature5": "Presenting programs and courses",
    "portfolio.v1.feature6": "Automatically saving data to Google Sheets",
    "portfolio.v1.feature7": "Maintaining conversation context",
    "portfolio.v1.feature8": "Providing a smooth, fast, and consistent experience",
    "portfolio.v1.stat1Value": "80%+",
    "portfolio.v1.stat1Label": "Management time reduction",
    "portfolio.v1.stat2Value": "100%",
    "portfolio.v1.stat2Label": "24/7 response rate",
    "portfolio.v1.stat3Value": "3",
    "portfolio.v1.stat3Label": "Languages supported",
    "portfolio.v1.benefit1": "Faster, complete, and organized registrations",
    "portfolio.v1.benefit2": "Immediate support in user's language",
    "portfolio.v1.benefit3": "Enhanced professional image",
    "portfolio.v1.benefit4": "Scalable and stable system",
    // V2
    "portfolio.v2.title": "WhatsApp-AI-V2",
    "portfolio.v2.subtitle": "Complete Conversational System",
    "portfolio.v2.problem": "WhatsApp-AI-V1 had already provided a first solution, but limitations appeared as users increased: less modular architecture, limited conversation history, difficulty adding new features, insufficient scalability for intensive use, less structured internal tools.",
    "portfolio.v2.solutionIntro": "To address these limitations, I developed WhatsApp-AI-V2, an improved version based on a fully modular architecture:",
    "portfolio.v2.feature1": "Modular architecture (services, routes, tools, middlewares)",
    "portfolio.v2.feature2": "17 business tools compatible with OpenAI Function Calling",
    "portfolio.v2.feature3": "More stable conversation context management",
    "portfolio.v2.feature4": "Dual database: Firestore + MongoDB",
    "portfolio.v2.feature5": "6-step professional conversational workflow",
    "portfolio.v2.feature6": "Enhanced security (webhook validation, rate limiting)",
    "portfolio.v2.feature7": "Faster asynchronous processing",
    "portfolio.v2.feature8": "Better separation of responsibilities",
    "portfolio.v2.feature9": "Easy to extend and evolve system",
    "portfolio.v2.stat1Value": "17",
    "portfolio.v2.stat1Label": "Integrated business tools",
    "portfolio.v2.stat2Value": "6",
    "portfolio.v2.stat2Label": "Workflow steps",
    "portfolio.v2.stat3Value": "2x",
    "portfolio.v2.stat3Label": "Databases",
    "portfolio.v2.benefit1": "Significant management time reduction",
    "portfolio.v2.benefit2": "100% response rate through automation",
    "portfolio.v2.benefit3": "Error-free registration process",
    "portfolio.v2.benefit4": "Smooth support in French, English, and Arabic",
    "portfolio.v2.benefit5": "Better precision with dedicated tools",
    "portfolio.v2.benefit6": "Centralized data via Firestore, MongoDB, and Sheets",
    "portfolio.v2.benefit7": "Simplified maintenance and better performance",

    // Footer
    "footer.navigation": "Navigation",
    "footer.skills": "Skills",
    "footer.contact": "Contact",
    "footer.fullStackDev": "Full Stack Development",
    "footer.genaiLlms": "GenAI & LLMs",
    "footer.whatsappBots": "WhatsApp Bots",
    "footer.technicalSupport": "Technical Support",
    "footer.apiIntegration": "API Integration",
    "footer.rights": "© 2025 Mohamed Meksi. All rights reserved.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr")

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations["fr"]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

