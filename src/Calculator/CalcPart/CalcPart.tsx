import React from 'react';
import Display from '../Display/Display';
import Eval from '../Eval/Eval';
import NumPad from '../NumPad/NumPad';
import Operators from '../Operators/Operators';
import styles from './style.scss';

export enum ECalcParts {
  display = 'Display',
  operators = 'Operators',
  numPad = 'NumPad',
  eval = 'Eval',
}

type CalcPartProps = {
  name: ECalcParts;
  index: number;
  isTemplate?: boolean;
  isMoved?: boolean;
  isDisabled: boolean;
};

const CalcPart: React.FC<CalcPartProps> = ({
  name,
  index,
  isTemplate = false,
  isMoved = false,
  isDisabled,
}) => {
  const parts = {
    Display: <Display index={index} isTemplate={isTemplate} />,
    Operators: <Operators index={index} isDisabled={isDisabled} />,
    NumPad: <NumPad index={index} isDisabled={isDisabled} />,
    Eval: <Eval index={index} isDisabled={isDisabled} />,
  };
  return (
    <div
      className={styles.partContainer}
      style={isMoved ? { opacity: 0.5 } : { opacity: 1 }}
    >
      {parts[name]}
    </div>
  );
};
export default CalcPart;
