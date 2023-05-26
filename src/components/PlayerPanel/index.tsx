import React from 'react';
import styles from './PlayerPanel.module.scss';

import Button from 'components/Button';

// Hooks
import { WEAPONS } from 'constants/index';

export interface PlayerPanelProps {
  chooseWeapon: (weapon: string) => void;
  isWeaponsDisabled: boolean;
}

const PlayerPanel: React.FC<PlayerPanelProps> = ({
  chooseWeapon,
  isWeaponsDisabled,
}) => {
  return (
    <div className={styles['player-panel']}>
      <h2>You</h2>
      {WEAPONS.map((weapon) => (
        <Button
          key={weapon}
          disabled={isWeaponsDisabled}
          onClick={() => chooseWeapon(weapon)}
          variant='secondary'
        >
          {weapon}
        </Button>
      ))}
    </div>
  );
};

export default PlayerPanel;
