import React from 'react';
import styles from './ResultPanel.module.scss';

interface ResultPanelProps {
  playerWeapon: string;
  computerWeapon: string;
  result: string;
  playAgain: () => void;
}

const ResultPanel: React.FC<ResultPanelProps> = ({
  playerWeapon,
  computerWeapon,
  result,
  playAgain,
}) => {
  return (
    <div className={styles['result-panel']}>
      <>
        <h2>Result</h2>
        <p className={styles['result-player']}>
          You chose: <span> {playerWeapon} </span>
        </p>
        <p className={styles['result-computer']}>
          Computer chose: <span> {computerWeapon} </span>
        </p>
        <p className={styles['result-game']}> {result}</p>
        <button onClick={playAgain}>Play Again</button>
      </>
    </div>
  );
};

export default ResultPanel;
