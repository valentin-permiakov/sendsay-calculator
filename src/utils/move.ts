import { DraggableLocation } from 'react-beautiful-dnd';
import {
  ConstructorType,
  IConstrutorSliceState,
} from '../store/constructorSlice';

export const move = (
  source: ConstructorType[],
  destination: ConstructorType[],
  droppableSource: DraggableLocation,
  droppableDestination: DraggableLocation
) => {
  const sourceClone = [...source];
  const destClone = [...destination];
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result: IConstrutorSliceState = { calculator: [], constructor: [] };
  result[droppableSource.droppableId as keyof IConstrutorSliceState] =
    sourceClone;
  result[droppableDestination.droppableId as keyof IConstrutorSliceState] =
    destClone;

  return result;
};
