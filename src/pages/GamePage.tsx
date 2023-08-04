import React, { useContext } from 'react';

// Components
import Button from 'common/Button';
import Countdown from 'common/Countdown';
import ScorePanel from 'components/panels/ScorePanel';
import OpponentPanel from 'components/panels/OpponentPanel';
import PlayerPanel from 'components/panels/PlayerPanel';
import ResultPanel from 'components/panels/ResultPanel';
import Leaderboard from 'components/Leaderboard';
import useGameLogic from 'hooks/useGameLogic';

// Constants
import { WEAPONS, RULES } from 'constants/index';

// Store
import { GameContext } from 'store/GameContext';

// Styles
import styles from 'App.module.scss'; // Import specific styles for the game component

const GameComponent = () => {
  const { playerName } = useContext(GameContext);

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
      <div className={styles['game-area']}>
        {/* <PlayerPanel
          chooseWeapon={chooseWeapon}
          isWeaponsDisabled={!isGameInProgress || isWeaponChosen}
        /> */}
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

export default GameComponent;
