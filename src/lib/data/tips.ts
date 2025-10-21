export type Tip = {
  id: string;
  title: string;
  content: string;
  category: 'Tip' | 'News' | 'Myth Buster';
};

export const tips: Tip[] = [
  {
    id: '1',
    title: 'Stay Calm in an Emergency',
    content: 'Your calm demeanor can significantly help the injured person feel more at ease and cooperative. Take a deep breath before you act.',
    category: 'Tip',
  },
  {
    id: '2',
    title: 'Myth: Put Butter on a Burn',
    content: 'Never put butter or oil on a burn. It traps heat, making the injury worse. Cool water is the only immediate treatment you should apply.',
    category: 'Myth Buster',
  },
  {
    id: '3',
    title: 'New Study on Tourniquet Use',
    content: 'Recent studies show that commercial tourniquets, when used correctly, can be life-saving for severe limb bleeding and have a low risk of complications.',
    category: 'News',
  },
  {
    id: '4',
    title: 'Assemble a First-Aid Kit',
    content: 'Every home and car should have a well-stocked first-aid kit. Include bandages, antiseptic wipes, gauze, adhesive tape, and pain relievers.',
    category: 'Tip',
  },
  {
    id: '5',
    title: 'Recognizing a Stroke: FAST',
    content: 'Use the FAST acronym to spot a stroke: Face drooping, Arm weakness, Speech difficulty, Time to call emergency services.',
    category: 'Tip',
  },
];
