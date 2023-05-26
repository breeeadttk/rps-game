import { useState, useEffect, useCallback, useRef } from 'react';

// Interface definitions
interface Score {
  wins: number;
  draws: number;
  loses: number;
  totalPlays: number;
}

type Weapon = string | '';

type Rules = number[][];

interface GameLogic {
  playerWeapon: Weapon;
  computerWeapon: Weapon;
  result: string;
  score: Score;
  isGameInProgress: boolean;
  isWeaponChosen: boolean;
  chooseWeapon: (weapon: Weapon) => void;
  startNewGame: () => void;
}

const useGameLogic = (
  weapons: Weapon[],
  rules: Rules,
  playerName: string
): GameLogic => {
  const [playerWeapon, setPlayerWeapon] = useState<Weapon>('');
  const [computerWeapon, setComputerWeapon] = useState<Weapon>('');
  const [result, setResult] = useState<string>('');
  const [score, setScore] = useState<Score>({
    wins: 0,
    draws: 0,
    loses: 0,
    totalPlays: 0,
  });
  const [isGameInProgress, setIsGameInProgress] = useState<boolean>(false);
  const [isWeaponChosen, setIsWeaponChosen] = useState<boolean>(false);

  const gameTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  // Retrieve stored score from local storage
  const getStoredScore = useCallback(() => {
    const scoresString = localStorage.getItem('scores');

    if (scoresString) {
      const scores: Record<string, Score> = JSON.parse(scoresString);
      const playerScore = scores[playerName];

      if (playerScore) {
        setScore(playerScore);
      }
    }
  }, [playerName]);

  // Choose a weapon
  const chooseWeapon = useCallback(
    (weapon: Weapon) => {
      if (isGameInProgress && !isWeaponChosen) {
        setPlayerWeapon(weapon);
        setIsWeaponChosen(true);
      }
    },
    [isGameInProgress, isWeaponChosen]
  );

  // Get a random weapon
  const getRandomWeapon = useCallback((): Weapon => {
    const randomIndex = Math.floor(Math.random() * weapons.length);
    return weapons[randomIndex];
  }, [weapons]);

  // Update the local storage with the latest score
  const updateLocalStorage = useCallback(
    (score: Score) => {
      const scoresString = localStorage.getItem('scores');
      let scores: Record<string, Score> = {};

      if (scoresString) {
        scores = JSON.parse(scoresString);
      }

      scores[playerName] = score;
      localStorage.setItem('scores', JSON.stringify(scores));
    },
    [playerName]
  );

  // Calculate the result of the game
  const calculateResult = useCallback(() => {
    let resultText = '';
    let updatedScore: Score = { ...score };

    if (!playerWeapon) {
      resultText = 'You lose...';
      updatedScore = {
        ...updatedScore,
        loses: updatedScore.loses + 1,
      };
      setComputerWeapon(getRandomWeapon());
    } else {
      const computerChoice = getRandomWeapon();
      setComputerWeapon(computerChoice);

      const playerIndex = weapons.indexOf(playerWeapon);
      const computerIndex = weapons.indexOf(computerChoice);

      const playerWins = rules[playerIndex].includes(computerIndex);
      const computerWins = rules[computerIndex].includes(playerIndex);

      if (playerWins) {
        resultText = 'You WIN!';
        updatedScore = {
          ...updatedScore,
          wins: updatedScore.wins + 1,
        };
      } else if (computerWins) {
        resultText = 'You lose...';
        updatedScore = {
          ...updatedScore,
          loses: updatedScore.loses + 1,
        };
      } else {
        resultText = 'DRAW';
        updatedScore = {
          ...updatedScore,
          draws: updatedScore.draws + 1,
        };
      }
    }

    updatedScore.totalPlays += 1;
    setResult(resultText);
    setScore(updatedScore);
    updateLocalStorage(updatedScore);
  }, [
    score,
    playerWeapon,
    updateLocalStorage,
    getRandomWeapon,
    weapons,
    rules,
  ]);

  // Start a new game
  const startNewGame = (): void => {
    clearTimeout(gameTimeoutRef.current);
    setIsGameInProgress(true);
    setPlayerWeapon('');
    setComputerWeapon('');
    setResult('');
    setIsWeaponChosen(false);
    gameTimeoutRef.current = setTimeout(() => {
      // saveScore();
      setIsGameInProgress(false);
      calculateResult();
    }, 3000);
  };

  // Cleanup the timeout on unmount
  useEffect(() => {
    return () => {
      clearTimeout(gameTimeoutRef.current);
    };
  }, []);

  // Retrieve stored score when the component mounts
  useEffect(() => {
    if (playerName) {
      getStoredScore();
      // scoreFromStoreRef.current = true;
    }
  }, [getStoredScore, playerName]);

  return {
    playerWeapon,
    computerWeapon,
    result,
    score,
    isGameInProgress,
    isWeaponChosen,
    chooseWeapon,
    startNewGame,
  };
};

export default useGameLogic;
