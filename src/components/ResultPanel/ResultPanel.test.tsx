import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ResultPanel from './index';

describe('ResultPanel', () => {
  const playerWeapon = 'rock';
  const computerWeapon = 'scissors';
  const result = 'You WIN!';
  const playAgainMock = jest.fn();

  afterEach(() => {
    playAgainMock.mockClear();
  });

  it('renders the result panel correctly', () => {
    render(
      <ResultPanel
        playerWeapon={playerWeapon}
        computerWeapon={computerWeapon}
        result={result}
        playAgain={playAgainMock}
      />
    );

    expect(screen.getByText('Result')).toBeInTheDocument();
    expect(screen.getByText(`You chose:`)).toBeInTheDocument();
    expect(screen.getByText(playerWeapon)).toBeInTheDocument();
    expect(screen.getByText(`Computer chose:`)).toBeInTheDocument();
    expect(screen.getByText(computerWeapon)).toBeInTheDocument();
    expect(screen.getByText(result)).toBeInTheDocument();
    expect(screen.getByText('Play Again')).toBeInTheDocument();
  });

  it('calls the playAgain function when the "Play Again" button is clicked', () => {
    render(
      <ResultPanel
        playerWeapon={playerWeapon}
        computerWeapon={computerWeapon}
        result={result}
        playAgain={playAgainMock}
      />
    );

    const playAgainButton = screen.getByText('Play Again');
    fireEvent.click(playAgainButton);

    expect(playAgainMock).toHaveBeenCalledTimes(1);
  });
});
