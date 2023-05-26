import React from 'react';

import styles from './ScorePanel.module.scss';

interface Score {
  wins: number;
  draws: number;
  loses: number;
  totalPlays: number;
}

interface ScorePanelProps {
  score: Score;
  playerName: string;
}

const ScorePanel: React.FC<ScorePanelProps> = ({ playerName, score }) => {
  return (
    <div className={styles['score-panel']}>
      <h2>{playerName}'s Score</h2>
      <p>Wins: {score.wins}</p>
      <p>Draws: {score.draws}</p>
      <p>Loses: {score.loses}</p>
      <p>Total Plays: {score.totalPlays}</p>
    </div>
  );
};

export default ScorePanel;
