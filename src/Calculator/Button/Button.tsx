/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import styles from './style.scss';

type ButtonProps = {
  name: string;
  className: string;
  id: string;
  onClick: () => void;
  isDisabled: boolean;
};

const Button: React.FC<ButtonProps> = ({
  name,
  onClick,
  className,
  id,
  isDisabled,
}) => {
  return (
    <button
      onClick={isDisabled ? () => {} : onClick}
      className={`${styles[className]} ${isDisabled ? styles.disabledBtn : ''}`}
      id={id}
    >
      {name}
    </button>
  );
};

export default Button;
