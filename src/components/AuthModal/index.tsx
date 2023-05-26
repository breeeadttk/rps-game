import React, { useState } from 'react';
import styles from './AuthModal.module.scss';

// Components
import Button from 'components/Button';

interface AuthModalProps {
  onSavePlayerName: (playerName: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({
  onSavePlayerName,
  isOpen,
  onClose,
}) => {
  const [playerName, setPlayerName] = useState('');

  // Handle input change event
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value);
  };

  // Handle save button click event
  const handleSaveClick = () => {
    onSavePlayerName(playerName);
    onClose();
  };

  // If modal is not open, return null
  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modal__content}>
        <h2 className={styles.title}>Game Authentication</h2>
        <input
          className={styles.input}
          type='text'
          value={playerName}
          onChange={handleInputChange}
          placeholder='Enter your name'
        />

        <div>
          <div className={styles.buttonContainer}>
            <Button onClick={handleSaveClick}>Save</Button>

            <Button onClick={onClose} variant='secondary'>
              Enter as Guest
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
