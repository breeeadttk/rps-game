import React from 'react';

import { render, screen, act } from '@testing-library/react';
import Countdown, { CountdownProps } from './index';

jest.useFakeTimers();

describe('Countdown', () => {
  const seconds = 5;
  const props: CountdownProps = {
    seconds,
  };

  test('should render initial countdown value', () => {
    render(<Countdown {...props} />);
    const countdownNumber = screen.getByText(seconds.toString());
    expect(countdownNumber).toBeInTheDocument();
  });

  test('should decrement countdown value after one second', () => {
    render(<Countdown {...props} />);
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    const countdownNumber = screen.getByText((seconds - 1).toString());
    expect(countdownNumber).toBeInTheDocument();
  });
});
