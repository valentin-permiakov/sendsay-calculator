import React from 'react';
import { Icon } from '../../Icons/Icon';
import styles from './style.scss';
import { EIcons } from '../../Icons/Icon';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { changeMode } from '../../store/modeSelectorSlice';
import { resetDisplay } from '../../store/calculatorSlice';

const ModeSelector: React.FC = () => {
  const isModeRuntime = useSelector(
    (state: RootState) => state.modeSelector.isModeRuntime
  );
  const dispatch = useDispatch();

  const handleClick = (isRuntime: boolean) => {
    dispatch(changeMode(isRuntime));
    dispatch(resetDisplay());
  };
  return (
    <div className={styles.selectorContainer}>
      <button
        className={`${styles.selectorBtn} ${
          isModeRuntime ? styles.selected : ''
        }`}
        onClick={() => handleClick(true)}
      >
        <Icon name={EIcons.runtimeIcon} /> Runtime
      </button>
      <button
        className={`${styles.selectorBtn} ${
          !isModeRuntime ? styles.selected : ''
        }`}
        onClick={() => handleClick(false)}
      >
        <Icon name={EIcons.constructorIcon} /> Constructor
      </button>
    </div>
  );
};
export default ModeSelector;
