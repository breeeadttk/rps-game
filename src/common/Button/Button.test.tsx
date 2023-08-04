import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from './index';

describe('Button component', () => {
  test('renders with primary variant and triggers onClick event', () => {
    const handleClick = jest.fn();
    render(
      <Button variant='primary' onClick={handleClick}>
        Primary Button
      </Button>
    );

    const button = screen.getByRole('button', { name: 'Primary Button' });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders with secondary variant and triggers onClick event', () => {
    const handleClick = jest.fn();
    render(
      <Button variant='secondary' onClick={handleClick}>
        Secondary Button
      </Button>
    );

    const button = screen.getByRole('button', { name: 'Secondary Button' });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders with disabled state and does not trigger onClick event', () => {
    const handleClick = jest.fn();
    render(
      <Button variant='primary' onClick={handleClick} disabled>
        Disabled Button
      </Button>
    );

    const button = screen.getByRole('button', { name: 'Disabled Button' });
    fireEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });
});
