import React from 'react';
import { EIcons, Icon } from '../../../Icons/Icon';
import styles from './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { changeMode } from '../../../store/modeSelectorSlice';
import { resetDisplay } from '../../../store/calculatorSlice';

type ModeButtonProps = {
  name: string;
  isRuntime: boolean;
};

const ModeButton: React.FC<ModeButtonProps> = ({ name, isRuntime }) => {
  const isModeRuntime = useSelector(
    (state: RootState) => state.modeSelector.isModeRuntime
  );
  const dispatch = useDispatch();

  const handleClick = (isRuntime: boolean) => {
    dispatch(changeMode(isRuntime));
    dispatch(resetDisplay());
  };
  return (
    <button
      className={`${styles.selectorBtn} ${
        (name === 'Runtime' && isModeRuntime) ||
        (name === 'Constructor' && !isModeRuntime)
          ? styles.selected
          : ''
      }`}
      onClick={() => handleClick(isRuntime)}
    >
      <Icon
        name={name === 'Runtime' ? EIcons.runtimeIcon : EIcons.constructorIcon}
      />{' '}
      {name}
    </button>
  );
};
export default ModeButton;
