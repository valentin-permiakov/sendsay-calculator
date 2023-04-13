import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { resizeText } from '../../utils/resize';
import styles from './style.scss';

type DisplayProps = {
  index: number;
  isTemplate?: boolean;
};

const Display: React.FC<DisplayProps> = ({ isTemplate }) => {
  const result = useSelector((state: RootState) => state.calculator.display);
  const refContainer = useRef<HTMLDivElement>(null);
  const refResult = useRef<HTMLDivElement>(null);
  const container = refContainer.current;
  const resultText = refResult.current;

  useEffect(() => {
    if (container && resultText)
      resizeText({ element: resultText, parent: container });
  }, [container, result, resultText]);

  return (
    <div className={styles.displayContainer} ref={refContainer}>
      <div className={styles.display} id="display">
        <div className={styles.text} ref={refResult}>
          {isTemplate ? '0' : result}
        </div>
      </div>
    </div>
  );
};

export default Display;
