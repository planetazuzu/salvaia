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
    slug: 'cpr',
    title: 'CPR',
    description: 'Learn how to perform Cardiopulmonary Resuscitation on adults.',
    icon: HeartPulse,
    image: 'guide-cpr',
    content: [
      {
        title: 'Before you start',
        steps: [
          'Check the scene for safety.',
          'Check the person for responsiveness. Tap their shoulder and shout, "Are you OK?"',
          'If no response, call 911 or your local emergency number immediately.',
          'Check for breathing for no more than 10 seconds.'
        ]
      },
      {
        title: 'Chest Compressions',
        steps: [
          'Place the heel of one hand in the center of the chest.',
          'Place the heel of the other hand on top of the first hand and interlace your fingers.',
          'Position your body directly over your hands.',
          'Give 30 chest compressions. The compressions should be hard and fast, at a rate of 100 to 120 compressions per minute.',
          'Press down at least 2 inches (5 cm).'
        ]
      },
      {
        title: 'Rescue Breaths',
        steps: [
          'After 30 compressions, give 2 rescue breaths.',
          'Tilt the head back and lift the chin to open the airway.',
          'Pinch the nose shut and make a complete seal over the person’s mouth with your mouth.',
          'Give 2 breaths, each lasting about 1 second. Watch for the chest to rise.'
        ]
      },
      {
        title: 'Continue Cycles',
        steps: [
          'Continue with cycles of 30 compressions and 2 breaths until the person shows signs of life, an AED is ready to use, or emergency personnel arrive.'
        ]
      }
    ]
  },
  {
    slug: 'choking',
    title: 'Choking',
    description: 'How to help a choking adult.',
    icon: Wind,
    image: 'guide-choking',
    content: [
      {
        title: 'Assess the Situation',
        steps: [
          'Ask "Are you choking?"',
          'If the person can cough or speak, encourage them to keep coughing.',
          'If the person cannot breathe, cough, or speak, they need immediate help.'
        ]
      },
      {
        title: 'Give 5 Back Blows',
        steps: [
          'Stand to the side and just behind a choking adult. For a child, kneel down behind.',
          'Place one arm across the person\'s chest for support.',
          'Bend the person over at the waist so that the upper body is parallel with the ground.',
          'Deliver five separate back blows between the person\'s shoulder blades with the heel of your hand.'
        ]
      },
      {
        title: 'Give 5 Abdominal Thrusts (Heimlich Maneuver)',
        steps: [
          'Stand behind the person.',
          'Make a fist with one hand.',
          'Place the thumb side of your fist against the middle of the person\'s abdomen, just above the navel.',
          'Grasp the fist with the other hand. Press hard into the abdomen with a quick, upward thrust — as if trying to lift the person up.',
          'Perform a total of 5 abdominal thrusts.'
        ]
      },
      {
        title: 'Continue Until Help Arrives',
        steps: [
          'Continue cycles of 5 back blows and 5 abdominal thrusts until the object is forced out, the person can breathe or cough forcefully, or the person becomes unconscious.',
          'If the person becomes unconscious, start CPR.'
        ]
      }
    ]
  },
  {
    slug: 'burns',
    title: 'Minor Burns',
    description: 'First aid for first-degree and small second-degree burns.',
    icon: Flame,
    image: 'guide-burns',
    content: [
      {
        title: 'Cool the Burn',
        steps: [
          'Immediately hold the burned area under cool (not cold) running water for at least 10 minutes.',
          'If running water isn\'t available, immerse the burn in cool water or apply a cool, wet compress.'
        ]
      },
      {
        title: 'Protect the Burn',
        steps: [
          'Cover the burn with a sterile gauze bandage (not fluffy cotton).',
          'Wrap it loosely to avoid putting pressure on burned skin.',
          'Do not apply ointments, butter, or other remedies on the burn, as this can trap heat and cause more damage.'
        ]
      },
      {
        title: 'Manage Pain',
        steps: [
          'Take an over-the-counter pain reliever, such as ibuprofen or acetaminophen.'
        ]
      },
      {
        title: 'When to See a Doctor',
        steps: [
          'Seek medical help for burns that are large (more than 3 inches), on the face, hands, feet, or genitals, or are third-degree burns.',
          'Do not break blisters. If a blister breaks, clean the area with mild soap and water.'
        ]
      }
    ]
  },
  {
    slug: 'allergic-reaction',
    title: 'Anaphylaxis',
    description: 'Recognizing and responding to severe allergic reactions.',
    icon: Syringe,
    image: 'guide-allergy',
    content: [
      {
        title: 'Recognize the Signs',
        steps: [
          'Difficulty breathing, wheezing, or shortness of breath.',
          'Swelling of the lips, tongue, or throat.',
          'Hives, itching, or flushed skin.',
          'Dizziness, fainting, or a rapid heartbeat.'
        ]
      },
      {
        title: 'Call for Help',
        steps: [
          'Call 911 or your local emergency number immediately.'
        ]
      },
      {
        title: 'Use an Epinephrine Auto-Injector',
        steps: [
          'If the person has an auto-injector (like an EpiPen), help them use it.',
          'Remove the safety cap.',
          'Press the tip firmly against the outer thigh until it clicks.',
          'Hold in place for 3 seconds.',
          'Massage the injection site for 10 seconds.'
        ]
      },
      {
        title: 'After the Injection',
        steps: [
          'Have the person lie down with their feet elevated.',
          'If breathing is difficult, they should sit up.',
          'Monitor their condition until medical help arrives. A second dose may be needed if symptoms persist or return.'
        ]
      }
    ]
  },
   {
    slug: 'fractures',
    title: 'Fractures &amp; Sprains',
    description: 'Initial care for suspected broken bones and sprains.',
    icon: Bone,
    image: 'guide-fracture',
    content: [
      {
        title: 'Stop Any Bleeding',
        steps: [
          'If there\'s bleeding, apply pressure to the wound with a sterile bandage, a clean cloth, or a clean piece of clothing.'
        ]
      },
      {
        title: 'Immobilize the Injured Area',
        steps: [
          'Don\'t try to realign the bone or push a bone that\'s sticking out back in.',
          'If you\'ve been trained in how to splint and professional medical help isn\'t readily available, apply a splint to the area above and below the fracture sites. Padding the splints can help reduce discomfort.'
        ]
      },
      {
        title: 'Apply Ice Packs to Limit Swelling and Help Relieve Pain',
        steps: [
          'Wrap the ice in a towel or cloth to protect the skin.',
          'Apply for 15 to 20 minutes at a time.'
        ]
      },
      {
        title: 'Treat for Shock',
        steps: [
          'If the person feels faint or is breathing in short, rapid breaths, lay the person down with the head slightly lower than the trunk and, if possible, elevate the legs.'
        ]
      }
    ]
  },
  {
    slug: 'bleeding',
    title: 'Severe Bleeding',
    description: 'Learn how to control severe bleeding.',
    icon: HandHeart,
    image: 'guide-bleeding',
    content: [
      {
        title: 'Call for Help',
        steps: [
          'Call 911 or your local emergency number as soon as possible.'
        ]
      },
      {
        title: 'Apply Direct Pressure',
        steps: [
          'Using a sterile bandage, clean cloth, or even a piece of clothing, apply firm, direct pressure to the wound.',
          'Use your hands to press firmly and continuously. Do not release pressure to check the wound.'
        ]
      },
      {
        title: 'Elevate the Injury',
        steps: [
          'If the wound is on an arm or leg, try to elevate the limb above the level of the heart while continuing to apply pressure.'
        ]
      },
      {
        title: 'Use Pressure Points / Tourniquet',
        steps: [
          'If bleeding doesn\'t stop with direct pressure, apply pressure to a main artery (pressure point) in the arm or leg.',
          'As a last resort, if you are trained, apply a tourniquet. Place it 2 inches above the injury, but not on a joint. Tighten until bleeding stops. Note the time it was applied.'
        ]
      }
    ]
  }
];
