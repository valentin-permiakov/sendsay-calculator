import React from 'react';
import ConstructorIcon from './ConstructorIcon';
import RuntimeIcon from './RuntimeIcon';
import DragIcon from './DragIcon';

export enum EIcons {
  runtimeIcon = 'RuntimeIcon',
  constructorIcon = 'ConstructorIcon',
  dragIcon = 'DragIcon',
}

interface IIconProps {
  name: EIcons;
  size?: number;
}

export const Icon = ({ name, size = 20 }: IIconProps) => {
  const icons = {
    RuntimeIcon: <RuntimeIcon width={size} height={size} />,
    ConstructorIcon: <ConstructorIcon width={size} height={size} />,
    DragIcon: <DragIcon width={size | 22} height={size | 22} />,
  };
  return <span style={{ width: size, height: size }}>{icons[name]}</span>;
};
