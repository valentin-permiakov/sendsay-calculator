import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NUM_PAD } from '../../globalConst';
import {
  deleteDisplay,
  removeStartingZero,
  resetDisplay,
  updateCalcString,
  updateDisplay,
} from '../../store/calculatorSlice';
import { RootState } from '../../store/store';
import styles from './style.scss';
import Button from '../Button/Button';

type NumPadProps = {
  index: number;
  isDisabled: boolean;
};

const NumPad: React.FC<NumPadProps> = ({ isDisabled }) => {
  const dispatch = useDispatch();
  const display = useSelector((state: RootState) => state.calculator.display);
  const calcString = useSelector(
    (state: RootState) => state.calculator.calcString
  );

  const handleNumClick = (symbol: string) => {
    if (Number(display) === Infinity) {
      dispatch(resetDisplay());
      return;
    }
    if (display.length === 1 && display === '0') {
      dispatch(removeStartingZero());
    }
    if (
      calcString.endsWith('/') ||
      calcString.endsWith('-') ||
      calcString.endsWith('+') ||
      calcString.endsWith('*')
    ) {
      dispatch(deleteDisplay());
    }
    dispatch(updateDisplay(symbol));
    dispatch(updateCalcString(symbol));
  };

  const handleDecimal = (symbol: string) => {
    if (/\./.test(display)) return;
    dispatch(updateDisplay(symbol));
    dispatch(updateCalcString(symbol));
  };

  return (
    <div className={styles.numContainer}>
      {NUM_PAD.map((button) => (
        <Button
          name={button.name}
          onClick={() =>
            button.name === '.'
              ? handleDecimal('.')
              : handleNumClick(button.name)
          }
          className={button.className}
          key={button.id}
          id={button.id}
          isDisabled={isDisabled}
        />
      ))}
    </div>
  );
};
export default NumPad;
