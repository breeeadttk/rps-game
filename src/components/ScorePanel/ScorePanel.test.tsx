// create a test suite for the ScorePanel component
import React from 'react';
import { render, screen } from '@testing-library/react';
import ScorePanel from './index';

describe('ScorePanel', () => {
  const score = {
    wins: 2,
    draws: 1,
    loses: 3,
    totalPlays: 6,
  };

  const playerName = 'John';

  render(<ScorePanel playerName={playerName} score={score} />);
  it('renders the score correctly', () => {
    expect(screen.getByText(/Wins: 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Draws: 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Loses: 3/i)).toBeInTheDocument();
    expect(screen.getByText(/Total Plays: 6/i)).toBeInTheDocument();
  });
});
