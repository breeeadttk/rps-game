import React from 'react';
import { render, screen } from '@testing-library/react';
import PlayerPanel from './index';

describe('PlayerPanel component', () => {
  test('renders with weapons', () => {
    const chooseWeapon = jest.fn();
    render(
      <PlayerPanel chooseWeapon={chooseWeapon} isWeaponsDisabled={false} />
    );

    const rockButton = screen.getByRole('button', { name: 'rock' });
    const paperButton = screen.getByRole('button', { name: 'paper' });
    const scissorsButton = screen.getByRole('button', { name: 'scissors' });

    expect(rockButton).toBeInTheDocument();
    expect(paperButton).toBeInTheDocument();
    expect(scissorsButton).toBeInTheDocument();
  });

  test('renders with disabled state', () => {
    const chooseWeapon = jest.fn();
    render(
      <PlayerPanel chooseWeapon={chooseWeapon} isWeaponsDisabled={true} />
    );

    const rockButton = screen.getByRole('button', { name: 'rock' });
    const paperButton = screen.getByRole('button', { name: 'paper' });
    const scissorsButton = screen.getByRole('button', { name: 'scissors' });

    expect(rockButton).toBeDisabled();
    expect(paperButton).toBeDisabled();
    expect(scissorsButton).toBeDisabled();
  });
});
