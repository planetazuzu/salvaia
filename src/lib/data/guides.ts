import { HeartPulse, Wind, Flame, Syringe, Bone, HandHeart } from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

export type Guide = {
  slug: string;
  title: string;
  description: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  image: string;
  content: {
    title: string;
    steps: string[];
  }[];
};

export const guides: Guide[] = [
  {
    slug: 'rcp',
    title: 'RCP',
    description: 'Aprende a realizar la Reanimación Cardiopulmonar en adultos.',
    icon: HeartPulse,
    image: 'guide-cpr',
    content: [
      {
        title: 'Antes de empezar',
        steps: [
          'Verifica la seguridad del lugar.',
          'Comprueba si la persona responde. Toca su hombro y grita: "¿Estás bien?"',
          'Si no hay respuesta, llama al 911 o a tu número de emergencia local de inmediato.',
          'Verifica si respira por no más de 10 segundos.'
        ]
      },
      {
        title: 'Compresiones torácicas',
        steps: [
          'Coloca el talón de una mano en el centro del pecho.',
          'Coloca el talón de la otra mano sobre la primera y entrelaza los dedos.',
          'Posiciona tu cuerpo directamente sobre tus manos.',
          'Realiza 30 compresiones torácicas. Las compresiones deben ser fuertes y rápidas, a un ritmo de 100 a 120 compresiones por minuto.',
          'Presiona hacia abajo al menos 5 cm (2 pulgadas).'
        ]
      },
      {
        title: 'Respiraciones de rescate',
        steps: [
          'Después de 30 compresiones, da 2 respiraciones de rescate.',
          'Inclina la cabeza hacia atrás y levanta el mentón para abrir la vía aérea.',
          'Pinza la nariz y sella completamente la boca de la persona con la tuya.',
          'Da 2 respiraciones, cada una de un segundo de duración. Observa si el pecho se eleva.'
        ]
      },
      {
        title: 'Continuar los ciclos',
        steps: [
          'Continúa con ciclos de 30 compresiones y 2 respiraciones hasta que la persona muestre signos de vida, un DEA esté listo para usar o llegue el personal de emergencia.'
        ]
      }
    ]
  },
  {
    slug: 'atragantamiento',
    title: 'Atragantamiento',
    description: 'Cómo ayudar a un adulto que se está atragantando.',
    icon: Wind,
    image: 'guide-choking',
    content: [
      {
        title: 'Evalúa la situación',
        steps: [
          'Pregunta: "¿Te estás atragantando?"',
          'Si la persona puede toser o hablar, anímala a que siga tosiendo.',
          'Si la persona no puede respirar, toser o hablar, necesita ayuda inmediata.'
        ]
      },
      {
        title: 'Da 5 golpes en la espalda',
        steps: [
          'Párate a un lado y justo detrás de un adulto que se atraganta. Para un niño, arrodíllate detrás.',
          'Coloca un brazo sobre el pecho de la persona para apoyarla.',
          'Inclina a la persona por la cintura para que la parte superior del cuerpo quede paralela al suelo.',
          'Da cinco golpes secos en la espalda entre los omóplatos con el talón de tu mano.'
        ]
      },
      {
        title: 'Realiza 5 compresiones abdominales (Maniobra de Heimlich)',
        steps: [
          'Párate detrás de la persona.',
          'Haz un puño con una mano.',
          'Coloca el lado del pulgar de tu puño contra el abdomen de la persona, justo por encima del ombligo.',
          'Agarra el puño con la otra mano. Presiona con fuerza el abdomen con una compresión rápida hacia arriba, como si intentaras levantar a la persona.',
          'Realiza un total de 5 compresiones abdominales.'
        ]
      },
      {
        title: 'Continúa hasta que llegue la ayuda',
        steps: [
          'Continúa los ciclos de 5 golpes en la espalda y 5 compresiones abdominales hasta que el objeto sea expulsado, la persona pueda respirar o toser con fuerza, o pierda el conocimiento.',
          'Si la persona pierde el conocimiento, inicia la RCP.'
        ]
      }
    ]
  },
  {
    slug: 'quemaduras',
    title: 'Quemaduras Menores',
    description: 'Primeros auxilios para quemaduras de primer grado y pequeñas de segundo grado.',
    icon: Flame,
    image: 'guide-burns',
    content: [
      {
        title: 'Enfría la quemadura',
        steps: [
          'Inmediatamente, pon el área quemada bajo agua corriente fría (no helada) durante al menos 10 minutos.',
          'Si no hay agua corriente disponible, sumerge la quemadura en agua fría o aplica una compresa fría y húmeda.'
        ]
      },
      {
        title: 'Protege la quemadura',
        steps: [
          'Cubre la quemadura con un vendaje de gasa estéril (no algodón absorbente).',
          'Envuélvela sin apretar para evitar ejercer presión sobre la piel quemada.',
          'No apliques ungüentos, mantequilla u otros remedios en la quemadura, ya que pueden atrapar el calor y causar más daño.'
        ]
      },
      {
        title: 'Maneja el dolor',
        steps: [
          'Toma un analgésico de venta libre, como ibuprofeno o paracetamol.'
        ]
      },
      {
        title: 'Cuándo ver a un médico',
        steps: [
          'Busca ayuda médica para quemaduras grandes (más de 7.5 cm), en la cara, manos, pies o genitales, o si son quemaduras de tercer grado.',
          'No rompas las ampollas. Si una ampolla se rompe, limpia el área con agua y jabón suave.'
        ]
      }
    ]
  },
  {
    slug: 'reaccion-alergica',
    title: 'Anafilaxia',
    description: 'Reconocer y responder a reacciones alérgicas graves.',
    icon: Syringe,
    image: 'guide-allergy',
    content: [
      {
        title: 'Reconoce los signos',
        steps: [
          'Dificultad para respirar, sibilancias o falta de aliento.',
          'Hinchazón de los labios, lengua o garganta.',
          'Urticaria, picazón o enrojecimiento de la piel.',
          'Mareos, desmayos o un ritmo cardíaco rápido.'
        ]
      },
      {
        title: 'Pide ayuda',
        steps: [
          'Llama al 911 o a tu número de emergencia local de inmediato.'
        ]
      },
      {
        title: 'Usa un autoinyector de epinefrina',
        steps: [
          'Si la persona tiene un autoinyector (como un EpiPen), ayúdala a usarlo.',
          'Quita la tapa de seguridad.',
          'Presiona la punta firmemente contra la parte exterior del muslo hasta que haga clic.',
          'Mantenlo en su lugar durante 3 segundos.',
          'Masajea el lugar de la inyección durante 10 segundos.'
        ]
      },
      {
        title: 'Después de la inyección',
        steps: [
          'Haz que la persona se acueste con los pies elevados.',
          'Si tiene dificultad para respirar, debe sentarse.',
          'Vigila su estado hasta que llegue la ayuda médica. Puede ser necesaria una segunda dosis si los síntomas persisten o regresan.'
        ]
      }
    ]
  },
   {
    slug: 'fracturas',
    title: 'Fracturas y Esguinces',
    description: 'Atención inicial para sospechas de huesos rotos y esguinces.',
    icon: Bone,
    image: 'guide-fracture',
    content: [
      {
        title: 'Detén cualquier sangrado',
        steps: [
          'Si hay sangrado, aplica presión sobre la herida con un vendaje estéril, un paño limpio o un trozo de ropa limpia.'
        ]
      },
      {
        title: 'Inmoviliza el área lesionada',
        steps: [
          'No intentes realinear el hueso ni empujar un hueso que sobresale hacia adentro.',
          'Si has sido entrenado para entablillar y no hay ayuda médica profesional disponible, aplica una férula en el área por encima y por debajo de las zonas de fractura. Acolchar las férulas puede ayudar a reducir la incomodidad.'
        ]
      },
      {
        title: 'Aplica compresas de hielo para limitar la hinchazón y ayudar a aliviar el dolor',
        steps: [
          'Envuelve el hielo en una toalla o paño para proteger la piel.',
          'Aplícalo durante 15 a 20 minutos cada vez.'
        ]
      },
      {
        title: 'Trata el shock',
        steps: [
          'Si la persona se siente débil o respira de forma corta y rápida, acuéstala con la cabeza ligeramente más baja que el tronco y, si es posible, eleva las piernas.'
        ]
      }
    ]
  },
  {
    slug: 'sangrado-grave',
    title: 'Sangrado Grave',
    description: 'Aprende a controlar un sangrado grave.',
    icon: HandHeart,
    image: 'guide-bleeding',
    content: [
      {
        title: 'Pide ayuda',
        steps: [
          'Llama al 911 o a tu número de emergencia local lo antes posible.'
        ]
      },
      {
        title: 'Aplica presión directa',
        steps: [
          'Usando un vendaje estéril, un paño limpio o incluso un trozo de ropa, aplica presión firme y directa sobre la herida.',
          'Usa tus manos para presionar de manera firme y continua. No sueltes la presión para revisar la herida.'
        ]
      },
      {
        title: 'Eleva la lesión',
        steps: [
          'Si la herida está en un brazo o una pierna, intenta elevar la extremidad por encima del nivel del corazón mientras continúas aplicando presión.'
        ]
      },
      {
        title: 'Usa puntos de presión / Torniquete',
        steps: [
          'Si el sangrado no se detiene con presión directa, aplica presión en una arteria principal (punto de presión) en el brazo o la pierna.',
          'Como último recurso, si estás entrenado, aplica un torniquete. Colócalo 5 cm por encima de la lesión, pero no en una articulación. Aprieta hasta que se detenga el sangrado. Anota la hora en que se aplicó.'
        ]
      }
    ]
  }
];
