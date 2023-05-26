import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  disabled,
  variant = 'primary',
  onClick,
  children,
}) => {
  return (
    <button
      className={`${styles.button}  ${styles[variant]} ${
        disabled && styles.disabled
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
