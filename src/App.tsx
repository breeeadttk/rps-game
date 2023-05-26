import React, { useState, useContext } from 'react';

// Components
import AuthModal from './components/AuthModal';
import Button from './components/Button';
import Countdown from './components/Countdown';
import OpponentPanel from './components/OpponentPanel';
import ScorePanel from './components/ScorePanel';
import PlayerPanel from './components/PlayerPanel';
import ResultPanel from './components/ResultPanel';
import Leaderboard from './components/Leaderboard';

// Store
import { GameContext } from 'store/GameContext';

// Hooks
import { WEAPONS, RULES } from './constants/index';

// Hooks
import useGameLogic from './hooks/useGameLogic';

import styles from './App.module.scss';

const App: React.FC = () => {
  const { playerName, setPlayerName } = useContext(GameContext);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSavePlayerName = (name: string) => {
    setPlayerName(name);
    setIsModalOpen(false);
  };

  const {
    playerWeapon,
    computerWeapon,
    result,
    score,
    isGameInProgress,
    isWeaponChosen,
    chooseWeapon,
    startNewGame,
  } = useGameLogic(WEAPONS, RULES, playerName);

  return (
    <div className={styles['app']}>
      {
        <AuthModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSavePlayerName={handleSavePlayerName}
        />
      }
      <div className={styles['game-area']}>
        {/* PlayerPanel component */}
        <div className={styles['players-board']}>
          <PlayerPanel
            chooseWeapon={chooseWeapon}
            isWeaponsDisabled={!isGameInProgress || isWeaponChosen}
          />

          <div className={styles['game-board']}>
            {/* Countdown component */}
            {isGameInProgress && <Countdown seconds={3} />}
            {!isGameInProgress && (
              <Button variant='primary' onClick={startNewGame}>
                Start New Game
              </Button>
            )}
          </div>
          {/* OpponentPanel component */}
          <OpponentPanel
            weapon={computerWeapon}
            gameEnded={!isGameInProgress}
          />
        </div>
        <ResultPanel
          playerWeapon={playerWeapon}
          computerWeapon={computerWeapon}
          result={result}
          playAgain={startNewGame}
        />
      </div>
      <div className={styles['score-area']}>
        <ScorePanel playerName={playerName} score={score} />

        <Leaderboard />
      </div>
    </div>
  );
};

export default App;
