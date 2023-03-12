import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showResult } from '../../store/calculatorSlice';
import { RootState } from '../../store/store';
import Button from '../Button/Button';
import styles from './style.scss';

type EvalProps = {
  index: number;
  isDisabled: boolean;
};

const Eval: React.FC<EvalProps> = ({ isDisabled }) => {
  const dispatch = useDispatch();
  const calcString = useSelector(
    (state: RootState) => state.calculator.calcString
  );

  const handleEval = () => {
    if (!calcString || calcString[calcString.length - 1] === '.') {
      return;
    }
    const result = eval(calcString);

    dispatch(showResult(result));
  };

  return (
    <div className={styles.evalContainer}>
      <Button
        name="="
        onClick={handleEval}
        className="resultButton"
        id="equals"
        isDisabled={isDisabled}
      />
    </div>
  );
};
export default Eval;
