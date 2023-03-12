import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OPERATORS } from '../../globalConst';
import {
  changeLastSymbol,
  resetDisplay,
  updateCalcString,
} from '../../store/calculatorSlice';
import { RootState } from '../../store/store';
import Button from '../Button/Button';
import styles from './style.scss';

type OperatorsProps = {
  index: number;
  isDisabled: boolean;
};

const Operators: React.FC<OperatorsProps> = ({ isDisabled }) => {
  const dispatch = useDispatch();
  const display = useSelector((state: RootState) => state.calculator.display);

  const handleOperatorClick = (symbol: string) => {
    const lastSymbol = display[display.length - 1];
    if (display.length === 1 && display === '0') {
      return;
    }

    if (Number(display) === Infinity) {
      dispatch(resetDisplay());
      return;
    }

    if (symbol === '/' || symbol === '*' || symbol === '+') {
      if (
        lastSymbol === '/' ||
        lastSymbol === '*' ||
        lastSymbol === '+' ||
        lastSymbol === '-'
      ) {
        dispatch(changeLastSymbol(`${symbol}`));
      } else {
        dispatch(updateCalcString(`${symbol}`));
      }
    } else if (symbol === '-') {
      display[display.length - 1] === '-'
        ? dispatch(changeLastSymbol(symbol))
        : dispatch(updateCalcString(symbol));
    }
  };

  return (
    <div className={styles.operContainer}>
      {OPERATORS.map((button) => (
        <Button
          name={button.name}
          onClick={() => handleOperatorClick(button.name)}
          className={button.className}
          key={button.id}
          id={button.id}
          isDisabled={isDisabled}
        />
      ))}
    </div>
  );
};
export default Operators;
