import React, { useEffect, useState } from 'react';

// Styles
import styles from './Countdown.module.scss';

export interface CountdownProps {
  seconds: number;
}

const Countdown: React.FC<CountdownProps> = ({ seconds }) => {
  const [count, setCount] = useState(seconds);

  useEffect(() => {
    // Start the countdown if count is greater than 0
    if (count > 0) {
      const countdownTimer = setTimeout(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);

      // Cleanup the timer when the component unmounts or when count changes
      return () => clearTimeout(countdownTimer);
    }
  }, [count, seconds]);

  return (
    <div className={styles.countdown}>
      <div className={styles.countdownNumber}>{count}</div>
    </div>
  );
};

export default Countdown;
