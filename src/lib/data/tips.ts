export type Tip = {
  id: string;
  title: string;
  content: string;
  category: 'Consejo' | 'Noticia' | 'Mito';
};

export const tips: Tip[] = [
  {
    id: '1',
    title: 'Mantén la calma en una emergencia',
    content: 'Tu calma puede ayudar significativamente a que la persona lesionada se sienta más tranquila y cooperativa. Respira hondo antes de actuar.',
    category: 'Consejo',
  },
  {
    id: '2',
    title: 'Mito: Poner mantequilla en una quemadura',
    content: 'Nunca pongas mantequilla o aceite en una quemadura. Atrapa el calor, empeorando la lesión. El agua fría es el único tratamiento inmediato que debes aplicar.',
    category: 'Mito',
  },
  {
    id: '3',
    title: 'Nuevo estudio sobre el uso de torniquetes',
    content: 'Estudios recientes muestran que los torniquetes comerciales, cuando se usan correctamente, pueden salvar vidas en hemorragias graves de extremidades y tienen un bajo riesgo de complicaciones.',
    category: 'Noticia',
  },
  {
    id: '4',
    title: 'Prepara un botiquín de primeros auxilios',
    content: 'Cada hogar y automóvil debe tener un botiquín de primeros auxilios bien surtido. Incluye vendas, toallitas antisépticas, gasas, cinta adhesiva y analgésicos.',
    category: 'Consejo',
  },
  {
    id: '5',
    title: 'Reconocer un derrame cerebral: FAST',
    content: 'Usa el acrónimo FAST para detectar un derrame cerebral: Face (Cara caída), Arm (Brazo débil), Speech (Dificultad para hablar), Time (Tiempo para llamar a emergencias).',
    category: 'Consejo',
  },
];
