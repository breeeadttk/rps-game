import React from 'react';

import styles from './Leaderboard.module.scss';

interface Score {
  playerName: string;
  wins: number;
  draws: number;
  loses: number;
  totalPlays: number;
}

const Leaderboard: React.FC = () => {
  // Function to retrieve leaderboard data from localStorage
  const getLeaderboardData = (): Score[] => {
    // Get scores from localStorage
    const scoresString = localStorage.getItem('scores');

    if (scoresString) {
      // Parse scores JSON string to an object
      const scores: Record<string, Score> = JSON.parse(scoresString);

      // Convert scores object to an array of scores with playerName property
      const leaderboardData = Object.entries(scores)
        .map(([name, score]) => ({ ...score, playerName: name }))
        .sort((a, b) => b.wins - a.wins);

      // Return top 10 leaderboard data
      return leaderboardData.slice(0, 10);
    }

    return [];
  };

  // Get leaderboard data
  const leaderboardData = getLeaderboardData();
  return (
    <div className={styles.leaderboard}>
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Wins</th>
            <th>Draws</th>
            <th>Loses</th>
            <th>Total Plays</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((score, index) => (
            <tr key={index}>
              <td>{score.playerName}</td>
              <td>{score.wins}</td>
              <td>{score.draws}</td>
              <td>{score.loses}</td>
              <td>{score.totalPlays}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
