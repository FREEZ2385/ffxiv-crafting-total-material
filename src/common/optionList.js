import { actionJobIcons, craftJobIcons } from './jobIcons';

export const crafterRecipesRadioOptions = [
  {
    value: 'Carpenter',
    text: 'carpenter',
    icon: craftJobIcons.Carpenter,
  },
  {
    value: 'Blacksmith',
    text: 'blacksmith',
    icon: craftJobIcons.Blacksmith,
  },
  {
    value: 'Armorer',
    text: 'armorer',
    icon: craftJobIcons.Armorer,
  },
  {
    value: 'Goldsmith',
    text: 'goldsmith',
    icon: craftJobIcons.Goldsmith,
  },
  {
    value: 'Leatherworker',
    text: 'leatherworker',
    icon: craftJobIcons.Leatherworker,
  },
  {
    value: 'Weaver',
    text: 'weaver',
    icon: craftJobIcons.Weaver,
  },
  {
    value: 'Alchemist',
    text: 'alchemist',
    icon: craftJobIcons.Alchemist,
  },
  {
    value: 'Culinarian',
    text: 'culinarian',
    icon: craftJobIcons.Culinarian,
  },
];

export const actionJobRadioOptions = [
  {
    value: 'PLD',
    text: 'paladin',
    icon: actionJobIcons.Paladin,
  },
  {
    value: 'WAR',
    text: 'warrior',
    icon: actionJobIcons.Warrior,
  },
  {
    value: 'GNB',
    text: 'gunbreaker',
    icon: actionJobIcons.Gunbreaker,
  },
  {
    value: 'DRK',
    text: 'darkknight',
    icon: actionJobIcons.Darkknight,
  },
  {
    value: 'SAM',
    text: 'samurai',
    icon: actionJobIcons.Samurai,
  },
  {
    value: 'DRG',
    text: 'dragoon',
    icon: actionJobIcons.Dragoon,
  },
  {
    value: 'MNK',
    text: 'monk',
    icon: actionJobIcons.Monk,
  },
  {
    value: 'NIN',
    text: 'ninja',
    icon: actionJobIcons.Ninja,
  },
  {
    value: 'RPR',
    text: 'reaper',
    icon: actionJobIcons.Reaper,
  },
  {
    value: 'BRD',
    text: 'bard',
    icon: actionJobIcons.Bard,
  },
  {
    value: 'MCH',
    text: 'machinist',
    icon: actionJobIcons.Machinist,
  },
  {
    value: 'DNC',
    text: 'dancer',
    icon: actionJobIcons.Dancer,
  },
  {
    value: 'BLM',
    text: 'blackmage',
    icon: actionJobIcons.Blackmage,
  },
  {
    value: 'SMN',
    text: 'summoner',
    icon: actionJobIcons.Summoner,
  },
  {
    value: 'RDM',
    text: 'redmage',
    icon: actionJobIcons.Redmage,
  },
  {
    value: 'BLU',
    text: 'blueMage',
    icon: actionJobIcons.BlueMage,
  },
  {
    value: 'WHM',
    text: 'whitemage',
    icon: actionJobIcons.Whitemage,
  },
  {
    value: 'SCH',
    text: 'scholar',
    icon: actionJobIcons.Scholar,
  },
  {
    value: 'AST',
    text: 'astrologian',
    icon: actionJobIcons.Astrologian,
  },
  {
    value: 'SGE',
    text: 'sage',
    icon: actionJobIcons.Sage,
  },
];

export const crafterRecipesPullDownOptions = [
  {
    text: `-------Level-------`,
    value: '',
  },
  { text: '1 ~ 5', value: 'lev-1' },
  { text: '6 ~ 10', value: 'lev-2' },
  { text: '11 ~ 15', value: 'lev-3' },
  { text: '16 ~ 20', value: 'lev-4' },
  { text: '21 ~ 25', value: 'lev-5' },
  { text: '26 ~ 30', value: 'lev-6' },
  { text: '31 ~ 35', value: 'lev-7' },
  { text: '36 ~ 40', value: 'lev-8' },
  { text: '41 ~ 45', value: 'lev-9' },
  { text: '46 ~ 50', value: 'lev-10' },
  { text: '51 ~ 55', value: 'lev-11' },
  { text: '56 ~ 60', value: 'lev-12' },
  { text: '61 ~ 65', value: 'lev-13' },
  { text: '66 ~ 70', value: 'lev-14' },
  { text: '71 ~ 75', value: 'lev-15' },
  { text: '76 ~ 80', value: 'lev-16' },
  { text: '81 ~ 86', value: 'lev-17' },
  { text: '86 ~ 90', value: 'lev-18' },
];

export const levelingOptions = {
  'lev-1': { minLevel: '1', maxLevel: '5' },
  'lev-2': { minLevel: '6', maxLevel: '10' },
  'lev-3': { minLevel: '11', maxLevel: '15' },
  'lev-4': { minLevel: '16', maxLevel: '20' },
  'lev-5': { minLevel: '21', maxLevel: '25' },
  'lev-6': { minLevel: '26', maxLevel: '30' },
  'lev-7': { minLevel: '31', maxLevel: '35' },
  'lev-8': { minLevel: '36', maxLevel: '40' },
  'lev-9': { minLevel: '41', maxLevel: '45' },
  'lev-10': { minLevel: '46', maxLevel: '50' },
  'lev-11': { minLevel: '51', maxLevel: '55' },
  'lev-12': { minLevel: '56', maxLevel: '60' },
  'lev-13': { minLevel: '61', maxLevel: '65' },
  'lev-14': { minLevel: '66', maxLevel: '70' },
  'lev-15': { minLevel: '71', maxLevel: '75' },
  'lev-16': { minLevel: '76', maxLevel: '80' },
  'lev-17': { minLevel: '81', maxLevel: '85' },
  'lev-18': { minLevel: '86', maxLevel: '90' },
};
