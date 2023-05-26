export const WEAPONS: string[] = ['rock', 'paper', 'scissors', 'lizard'];

export const RULES: number[][] = [
  [0, 2, 1], // rock wins against scissors, scissors wins against paper, paper wins against rock
  [1, 0, 2], // paper wins against rock, rock wins against scissors, scissors wins against paper
  [2, 1, 0], // scissors wins against paper, paper wins against rock, rock wins against scissors
];
