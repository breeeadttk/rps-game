import React from 'react';
import PropTypes from 'prop-types';

// Components
import Button from 'components/Button';
import styles from './OpponentPanel.module.scss';

interface OpponentPanelProps {
  weapon: string;
  gameEnded: boolean;
}

const OpponentPanel: React.FC<OpponentPanelProps> = ({ weapon, gameEnded }) => {
  return (
    <div className={styles.opponentPanel}>
      <h2>Opponent's Weapon</h2>
      {weapon && gameEnded && <Button disabled>{weapon}</Button>}
    </div>
  );
};

OpponentPanel.propTypes = {
  weapon: PropTypes.string.isRequired,
  gameEnded: PropTypes.bool.isRequired,
};

export default OpponentPanel;
