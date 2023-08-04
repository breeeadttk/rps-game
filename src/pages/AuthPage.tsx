import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import AuthModal from '../components/AuthModal'; // Assuming the path is correct

// Store
import { GameContext } from 'store/GameContext';

const AuthComponent = () => {
  const navigate = useNavigate();
  const { setPlayerName } = useContext(GameContext);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate('/game');
  };

  const handleSavePlayerName = (name) => {
    setPlayerName(name);
    setIsModalOpen(false);
    // Redirect to the game component after authentication
    navigate('/game');
  };

  return (
    <AuthModal
      isOpen={isModalOpen}
      onClose={handleCloseModal}
      onSavePlayerName={handleSavePlayerName}
    />
  );
};

export default AuthComponent;
