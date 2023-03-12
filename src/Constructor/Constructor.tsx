import React from 'react';
import { ConstructorType } from '../store/constructorSlice';
import Canvas from './Canvas/Canvas';
import ModeSelector from './ModeSelector/ModeSelector';
import styles from './style.scss';

type ConstructorProps = {
  names: ConstructorType[];
};

const Constructor: React.FC<ConstructorProps> = ({ names }) => {
  return (
    <div className={styles.constructorContainer}>
      <ModeSelector />
      <Canvas names={names} />
    </div>
  );
};
export default Constructor;
