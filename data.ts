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
  { id: 'basics', name: 'Básico', icon: 'MessageCircle', description: 'Cumprimentos e dia a dia' },
  { id: 'travel', name: 'Aeroporto', icon: 'Plane', description: 'Check-in, malas e voo' },
  { id: 'transport', name: 'Transporte', icon: 'Bus', description: 'Táxi, trem e ônibus' },
  { id: 'accommodation', name: 'Hotel', icon: 'BedDouble', description: 'Check-in e problemas' },
  { id: 'food', name: 'Restaurante', icon: 'Utensils', description: 'Pedidos e alergias' },
  { id: 'shopping', name: 'Compras', icon: 'ShoppingBag', description: 'Preços e pagamentos' },
  { id: 'emergency', name: 'Emergência', icon: 'AlertCircle', description: 'Ajuda médica e policial' },
];

export const PHRASES: Record<string, Record<string, PhraseData[]>> = {
  en: {
    basics: [
      { id: 1, pt: "Como você está?", target_text: "How are you doing?" },
      { id: 2, pt: "Prazer em te conhecer.", target_text: "Nice to meet you." },
      { id: 3, pt: "Poderia falar mais devagar?", target_text: "Could you speak slower please?" },
      { id: 4, pt: "Eu não entendo.", target_text: "I don't understand." },
      { id: 5, pt: "Você fala português?", target_text: "Do you speak Portuguese?" },
      { id: 6, pt: "Obrigado pela ajuda.", target_text: "Thanks for your help." },
    ],
    travel: [
      { id: 101, pt: "Onde fica o portão 5?", target_text: "Where is gate 5?" },
      { id: 102, pt: "Minha mala foi perdida.", target_text: "My luggage is lost." },
      { id: 103, pt: "Eu gostaria de um assento na janela.", target_text: "I would like a window seat." },
      { id: 104, pt: "Quanto tempo dura o voo?", target_text: "How long is the flight?" },
      { id: 105, pt: "Tenho algo a declarar.", target_text: "I have something to declare." },
    ],
    transport: [
      { id: 401, pt: "Leve-me a este endereço, por favor.", target_text: "Take me to this address, please." },
      { id: 402, pt: "Quanto custa a corrida?", target_text: "How much is the fare?" },
      { id: 403, pt: "Onde posso comprar um bilhete?", target_text: "Where can I buy a ticket?" },
      { id: 404, pt: "Esse ônibus vai para o centro?", target_text: "Does this bus go to downtown?" },
    ],
    accommodation: [
      { id: 501, pt: "Tenho uma reserva.", target_text: "I have a reservation." },
      { id: 502, pt: "O café da manhã está incluído?", target_text: "Is breakfast included?" },
      { id: 503, pt: "O ar condicionado não funciona.", target_text: "The air conditioner is not working." },
      { id: 504, pt: "Posso deixar minhas malas aqui?", target_text: "Can I leave my bags here?" },
    ],
    food: [
      { id: 201, pt: "A conta, por favor.", target_text: "The check, please." },
      { id: 202, pt: "Eu tenho alergia a amendoim.", target_text: "I am allergic to peanuts." },
      { id: 203, pt: "Uma mesa para dois.", target_text: "A table for two." },
      { id: 204, pt: "Posso ver o cardápio?", target_text: "May I see the menu?" },
      { id: 205, pt: "A água é potável?", target_text: "Is the tap water safe to drink?" },
    ],
    shopping: [
      { id: 601, pt: "Quanto custa isso?", target_text: "How much is this?" },
      { id: 602, pt: "Posso experimentar?", target_text: "Can I try it on?" },
      { id: 603, pt: "Vocês aceitam cartão de crédito?", target_text: "Do you take credit cards?" },
      { id: 604, pt: "É muito caro.", target_text: "It's too expensive." },
    ],
    emergency: [
      { id: 301, pt: "Preciso de um médico.", target_text: "I need a doctor." },
      { id: 302, pt: "Chame a polícia!", target_text: "Call the police!" },
      { id: 303, pt: "Perdi meu passaporte.", target_text: "I lost my passport." },
      { id: 304, pt: "Onde fica o hospital mais próximo?", target_text: "Where is the nearest hospital?" },
    ]
  },
  es: {
    basics: [
      { id: 1, pt: "Como você está?", target_text: "¿Cómo estás?" },
      { id: 2, pt: "Prazer em te conhecer.", target_text: "Mucho gusto." },
      { id: 3, pt: "Bom dia!", target_text: "¡Buenos días!" },
      { id: 4, pt: "Não entendo.", target_text: "No entiendo." },
      { id: 5, pt: "Você fala português?", target_text: "¿Hablas portugués?" },
    ],
    travel: [
      { id: 101, pt: "Onde fica o banheiro?", target_text: "¿Dónde está el baño?" },
      { id: 102, pt: "Quanto custa a passagem?", target_text: "¿Cuánto cuesta el boleto?" },
      { id: 103, pt: "Perdi minha mala.", target_text: "Perdí mi maleta." },
      { id: 104, pt: "A que horas sai o voo?", target_text: "¿A qué hora sale el vuelo?" },
    ],
    transport: [
      { id: 401, pt: "Pare aqui, por favor.", target_text: "Pare aquí, por favor." },
      { id: 402, pt: "Quanto custa até o aeroporto?", target_text: "¿Cuánto cuesta hasta el aeropuerto?" },
      { id: 403, pt: "Qual linha eu pego?", target_text: "¿Qué línea debo tomar?" },
    ],
    accommodation: [
      { id: 501, pt: "Tenho uma reserva no nome de Silva.", target_text: "Tengo una reserva a nombre de Silva." },
      { id: 502, pt: "Tem wi-fi no quarto?", target_text: "¿Hay wi-fi en la habitación?" },
      { id: 503, pt: "O chuveiro não está esquentando.", target_text: "La ducha no calienta." },
    ],
    food: [
      { id: 201, pt: "A conta, por favor.", target_text: "La cuenta, por favor." },
      { id: 202, pt: "Estava delicioso.", target_text: "Estaba delicioso." },
      { id: 203, pt: "Eu sou vegetariano.", target_text: "Soy vegetariano." },
      { id: 204, pt: "Uma cerveja, por favor.", target_text: "Una cerveza, por favor." },
    ],
    shopping: [
      { id: 601, pt: "Vocês têm um tamanho menor?", target_text: "¿Tienen una talla más pequeña?" },
      { id: 602, pt: "Só estou olhando, obrigado.", target_text: "Solo estoy mirando, gracias." },
      { id: 603, pt: "Aceita dinheiro?", target_text: "¿Acepta efectivo?" },
    ],
    emergency: [
      { id: 301, pt: "Preciso de um médico.", target_text: "Necesito un médico." },
      { id: 302, pt: "Ajuda!", target_text: "¡Ayuda!" },
      { id: 303, pt: "Fui roubado.", target_text: "Me han robado." },
    ]
  },
  fr: {
    basics: [
      { id: 1, pt: "Como você está?", target_text: "Comment allez-vous ?" },
      { id: 2, pt: "Obrigado.", target_text: "Merci." },
      { id: 3, pt: "Desculpe.", target_text: "Pardon." },
      { id: 4, pt: "Eu não falo bem francês.", target_text: "Je ne parle pas bien français." },
    ],
    travel: [
      { id: 101, pt: "Onde fica o banheiro?", target_text: "Où sont les toilettes ?" },
      { id: 102, pt: "Estou perdido.", target_text: "Je suis perdu." },
      { id: 103, pt: "Onde é a saída?", target_text: "Où est la sortie ?" },
    ],
    transport: [
      { id: 401, pt: "Eu gostaria de ir para a estação.", target_text: "Je voudrais aller à la gare." },
      { id: 402, pt: "Quanto custa o bilhete?", target_text: "Combien coûte le billet ?" },
    ],
    accommodation: [
      { id: 501, pt: "Vocês têm um quarto livre?", target_text: "Avez-vous une chambre libre ?" },
      { id: 502, pt: "A que horas é o café da manhã?", target_text: "À quelle heure est le petit déjeuner ?" },
    ],
    food: [
       { id: 201, pt: "A conta, por favor.", target_text: "L'addition, s'il vous plaît." },
       { id: 202, pt: "Água sem gás.", target_text: "De l'eau plate." },
       { id: 203, pt: "Isso tem glúten?", target_text: "Est-ce qu'il y a du gluten ?" },
    ],
    shopping: [
       { id: 601, pt: "Posso pagar com cartão?", target_text: "Je peux payer par carte ?" },
       { id: 602, pt: "É muito bonito.", target_text: "C'est très joli." },
    ],
    emergency: [
      { id: 301, pt: "Socorro!", target_text: "Au secours !" },
      { id: 302, pt: "Chame uma ambulância.", target_text: "Appelez une ambulance." },
    ]
  },
  it: {
    basics: [
      { id: 1, pt: "Como você está?", target_text: "Come stai?" },
      { id: 2, pt: "Por favor.", target_text: "Per favore." },
      { id: 3, pt: "Não entendo.", target_text: "Non capisco." },
      { id: 4, pt: "Você fala inglês?", target_text: "Parli inglese?" },
    ],
    travel: [
       { id: 101, pt: "Onde fica o banheiro?", target_text: "Dov'è il bagno?" },
       { id: 102, pt: "Onde fica o centro?", target_text: "Dov'è il centro?" },
    ],
    transport: [
       { id: 401, pt: "Um bilhete para Roma, por favor.", target_text: "Un biglietto per Roma, per favore." },
       { id: 402, pt: "Onde é o ponto de ônibus?", target_text: "Dov'è la fermata dell'autobus?" },
    ],
    accommodation: [
       { id: 501, pt: "Eu reservei um quarto.", target_text: "Ho prenotato una camera." },
    ],
    food: [
      { id: 201, pt: "Eu gostaria de pedir.", target_text: "Vorrei ordinare." },
      { id: 202, pt: "Uma taça de vinho.", target_text: "Un bicchiere di vino." },
      { id: 203, pt: "A conta, por favor.", target_text: "Il conto, per favore." },
    ],
    shopping: [
      { id: 601, pt: "Quanto custa?", target_text: "Quanto costa?" },
    ],
    emergency: [
      { id: 301, pt: "Preciso de ajuda.", target_text: "Ho bisogno di aiuto." },
    ]
  }
};