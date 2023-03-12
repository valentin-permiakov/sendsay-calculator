import { DraggableLocation } from 'react-beautiful-dnd';
import { ConstructorType } from '../store/constructorSlice';

export const copy = (
  source: ConstructorType[],
  destination: ConstructorType[],
  droppableSource: DraggableLocation,
  droppableDestination: DraggableLocation
) => {
  const sourceClone = [...source];
  const destClone = [...destination];
  const item = sourceClone[droppableSource.index];

  destClone.splice(droppableDestination.index, 0, item);
  return destClone;
};
