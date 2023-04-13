import React from 'react';
import styles from './style.scss';
import ModeButton from './ModeButton/ModeButton';

const ModeSelector: React.FC = () => {
  return (
    <div className={styles.selectorContainer}>
      <ModeButton name="Runtime" isRuntime={true} />
      <ModeButton name="Constructor" isRuntime={false} />
    </div>
  );
};
export default ModeSelector;
