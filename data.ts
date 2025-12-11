import { Category, Dialect, Language, PhraseData } from './types';

export const LANGUAGES: Language[] = [
  { id: 'en', name: 'Inglês', flag: '🇺🇸', countryCode: 'us', code: 'en-US' },
  { id: 'es', name: 'Espanhol', flag: '🇪🇸', countryCode: 'es', code: 'es-ES' },
  { id: 'fr', name: 'Francês', flag: '🇫🇷', countryCode: 'fr', code: 'fr-FR' },
  { id: 'it', name: 'Italiano', flag: '🇮🇹', countryCode: 'it', code: 'it-IT' },
];

export const DIALECTS: Record<string, Dialect[]> = {
  en: [
    { id: 'en-US', name: 'Estados Unidos', countryCode: 'us', code: 'en-US' },
    { id: 'en-GB', name: 'Reino Unido', countryCode: 'gb', code: 'en-GB' },
    { id: 'en-AU', name: 'Austrália', countryCode: 'au', code: 'en-AU' },
    { id: 'en-ZA', name: 'África do Sul', countryCode: 'za', code: 'en-ZA' },
    { id: 'en-IE', name: 'Irlanda', countryCode: 'ie', code: 'en-IE' },
    { id: 'en-CA', name: 'Canadá', countryCode: 'ca', code: 'en-CA' },
    { id: 'en-IN', name: 'Índia', countryCode: 'in', code: 'en-IN' },
  ],
  es: [
    { id: 'es-ES', name: 'Espanha', countryCode: 'es', code: 'es-ES' },
    { id: 'es-MX', name: 'México', countryCode: 'mx', code: 'es-MX' },
    { id: 'es-AR', name: 'Argentina', countryCode: 'ar', code: 'es-AR' },
    { id: 'es-CO', name: 'Colômbia', countryCode: 'co', code: 'es-CO' },
    { id: 'es-PE', name: 'Peru', countryCode: 'pe', code: 'es-PE' },
    { id: 'es-CL', name: 'Chile', countryCode: 'cl', code: 'es-CL' },
  ],
  fr: [
    { id: 'fr-FR', name: 'França', countryCode: 'fr', code: 'fr-FR' },
    { id: 'fr-CA', name: 'Canadá', countryCode: 'ca', code: 'fr-CA' },
    { id: 'fr-CH', name: 'Suíça', countryCode: 'ch', code: 'fr-CH' },
    { id: 'fr-BE', name: 'Bélgica', countryCode: 'be', code: 'fr-BE' },
  ],
  it: [
    { id: 'it-IT', name: 'Itália', countryCode: 'it', code: 'it-IT' },
    { id: 'it-CH', name: 'Suíça', countryCode: 'ch', code: 'it-CH' },
  ]
};

export const CATEGORIES: Category[] = [
  { id: 'basics', name: 'Básico', icon: 'MessageCircle', description: 'Cumprimentos e frases essenciais' },
  { id: 'travel', name: 'Viagem', icon: 'Plane', description: 'Aeroporto, hotel e direções' },
  { id: 'food', name: 'Restaurante', icon: 'Utensils', description: 'Pedindo comida e bebidas' },
  { id: 'emergency', name: 'Emergência', icon: 'AlertCircle', description: 'Ajuda médica e policial' },
];

// Content organized by Language ID -> Category ID
export const PHRASES: Record<string, Record<string, PhraseData[]>> = {
  en: {
    basics: [
      { id: 1, pt: "Como você está?", target_text: "How are you doing?" },
      { id: 2, pt: "Prazer em te conhecer.", target_text: "Nice to meet you." },
      { id: 3, pt: "Poderia falar mais devagar?", target_text: "Could you speak slower please?" },
    ],
    travel: [
      { id: 101, pt: "Onde fica o banheiro?", target_text: "Where is the bathroom?" },
      { id: 102, pt: "Quanto custa essa passagem?", target_text: "How much is this ticket?" },
      { id: 103, pt: "Eu gostaria de fazer o check-in.", target_text: "I would like to check in." },
    ],
    food: [
      { id: 201, pt: "A conta, por favor.", target_text: "The check, please." },
      { id: 202, pt: "Eu tenho alergia a amendoim.", target_text: "I am allergic to peanuts." },
      { id: 203, pt: "Uma mesa para dois.", target_text: "A table for two." },
    ],
    emergency: [
      { id: 301, pt: "Preciso de um médico.", target_text: "I need a doctor." },
      { id: 302, pt: "Chame a polícia!", target_text: "Call the police!" },
    ]
  },
  es: {
    basics: [
      { id: 1, pt: "Como você está?", target_text: "¿Cómo estás?" },
      { id: 2, pt: "Prazer em te conhecer.", target_text: "Mucho gusto." },
      { id: 3, pt: "Bom dia!", target_text: "¡Buenos días!" },
    ],
    travel: [
      { id: 101, pt: "Onde fica o banheiro?", target_text: "¿Dónde está el baño?" },
      { id: 102, pt: "Quanto custa?", target_text: "¿Cuánto cuesta?" },
    ],
    food: [
      { id: 201, pt: "A conta, por favor.", target_text: "La cuenta, por favor." },
      { id: 202, pt: "Estava delicioso.", target_text: "Estaba delicioso." },
    ],
    emergency: [
      { id: 301, pt: "Preciso de um médico.", target_text: "Necesito un médico." },
      { id: 302, pt: "Ajuda!", target_text: "¡Ayuda!" },
    ]
  },
  fr: {
    basics: [
      { id: 1, pt: "Como você está?", target_text: "Comment allez-vous ?" },
      { id: 2, pt: "Obrigado.", target_text: "Merci." },
    ],
    travel: [
      { id: 101, pt: "Onde fica o banheiro?", target_text: "Où sont les toilettes ?" },
      { id: 102, pt: "Estou perdido.", target_text: "Je suis perdu." },
    ],
    food: [
       { id: 201, pt: "A conta, por favor.", target_text: "L'addition, s'il vous plaît." },
    ],
    emergency: [
      { id: 301, pt: "Socorro!", target_text: "Au secours !" },
    ]
  },
  it: {
    basics: [
      { id: 1, pt: "Como você está?", target_text: "Come stai?" },
      { id: 2, pt: "Por favor.", target_text: "Per favore." },
    ],
    travel: [
       { id: 101, pt: "Onde fica o banheiro?", target_text: "Dov'è il bagno?" },
    ],
    food: [
      { id: 201, pt: "Eu gostaria de pedir.", target_text: "Vorrei ordinare." },
    ],
    emergency: []
  }
};