/**
 * Tous les textes du site au même endroit.
 * Les éléments entre crochets [ … ] sont à compléter.
 */

export interface Formation {
  id: string
  level: string
  duration: string
  title: string
  summary: string
  points: string[]
  price: string
  featured?: boolean
}

export interface Step { title: string; text: string }
export interface Faq { q: string; a: string }
export interface Value { title: string; text: string }

export const values: Value[] = [
  { title: 'Concret, pas théorique', text: 'Chaque atelier part de vos métiers et de vos outils. On construit, on teste, on repart avec.' },
  { title: 'Pour tous les profils', text: "Des dirigeants aux équipes opérationnelles, sans prérequis technique pour l'initiation." },
  { title: 'Responsable et sécurisé', text: "Confidentialité des données, limites des modèles, bonnes pratiques : l'usage maîtrisé fait partie du programme." },
]

export const formations: Formation[] = [
  {
    id: 'initiation',
    level: 'Niveau 1',
    duration: '[DURÉE]',
    title: "Initiation à l'IA générative",
    summary: 'Comprendre ChatGPT, Claude ou Gemini, et les utiliser efficacement au quotidien.',
    points: ['Fonctionnement et limites des modèles', 'Rédiger des prompts qui marchent', "Cas d'usage par métier", 'Règles de confidentialité'],
    price: '[VOTRE PRIX]',
  },
  {
    id: 'agents',
    level: 'Niveau 2',
    duration: '[DURÉE]',
    title: 'Agents IA & automatisation',
    summary: 'Concevoir des agents qui enchaînent les tâches et se connectent à vos outils métier.',
    points: ["Ce qu'est un agent, et quand l'utiliser", "Connecter l'IA à vos outils", 'Construire un premier agent en atelier', 'Contrôle humain et fiabilité'],
    price: '[VOTRE PRIX]',
    featured: true,
  },
  {
    id: 'strategie',
    level: 'Sur mesure',
    duration: '[DURÉE]',
    title: 'Accompagnement stratégique',
    summary: "Pour les directions qui veulent déployer l'IA à l'échelle de l'entreprise.",
    points: ['Audit des usages et des opportunités', 'Feuille de route IA', 'Formation des référents internes', 'Suivi post-formation'],
    price: 'Sur devis',
  },
]

export const steps: Step[] = [
  { title: 'Diagnostic', text: 'Un échange pour cerner vos équipes, vos outils et vos tâches chronophages.' },
  { title: 'Programme sur mesure', text: "Des exercices construits à partir de vos cas réels, pas d'exemples génériques." },
  { title: 'Ateliers pratiques', text: 'Les participants manipulent, construisent et testent en direct.' },
  { title: 'Suivi', text: "Supports, ressources et un point d'étape pour ancrer les nouveaux réflexes." },
]

export const faq: Faq[] = [
  { q: 'Faut-il des compétences techniques ?', a: "Non pour l'initiation. Le parcours Agents IA est accessible sans coder, mais demande d'être à l'aise avec les outils numériques." },
  { q: 'Quels outils utilisez-vous ?', a: 'Ceux du marché (ChatGPT, Claude, Gemini, Copilot…) et, de préférence, ceux déjà disponibles dans votre entreprise.' },
  { q: 'La formation est-elle finançable ?', a: '[À COMPLÉTER selon votre statut : certification Qualiopi, prise en charge OPCO, etc.]' },
  { q: 'Combien de participants par session ?', a: '[À COMPLÉTER : nombre maximum de participants pour garder un format pratique.]' },
]

export const navLinks = [
  { href: '/#formations', label: 'Formations' },
  { href: '/#methode', label: 'Méthode' },
  { href: '/#apropos', label: 'À propos' },
  { href: '/#faq', label: 'FAQ' },
]
