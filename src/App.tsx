import React from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { ECalcParts } from './Calculator/CalcPart/CalcPart';
import Calculator from './Calculator/Calculator';
import Constructor from './Constructor/Constructor';
import { Content } from './Content/Content';
import {
  changeCalculator,
  changeConstructor,
  changeConstructorState,
  changeIsConstructor,
  IConstrutorSliceState,
  initialParts,
} from './store/constructorSlice';
import { RootState } from './store/store';
import { copy } from './utils/copy';
import { move } from './utils/move';
import { reorder } from './utils/reorder';

export type AppState = {
  calculator: ECalcParts[];
  constructor: ECalcParts[];
};
export const App = () => {
  const appState = useSelector((state: RootState) => state.constructorSlice);
  const dispatch = useDispatch();

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    switch (source.droppableId) {
      case destination.droppableId:
        if (source.droppableId === 'calculator') {
          dispatch(
            changeCalculator(
              reorder(appState.calculator, source.index, destination.index)
            )
          );
        } else {
          dispatch(
            changeConstructor(
              reorder(appState.constructor, source.index, destination.index)
            )
          );
        }
        break;

      case 'calculator':
        dispatch(
          changeIsConstructor({ isConstructor: true, index: source.index })
        );
        dispatch(
          changeConstructor(
            copy(
              initialParts,
              appState[destination.droppableId as keyof IConstrutorSliceState],
              source,
              destination
            )
          )
        );

        break;
      default:
        dispatch(
          changeConstructorState(
            move(
              appState[source.droppableId as keyof IConstrutorSliceState],
              appState[destination.droppableId as keyof IConstrutorSliceState],
              source,
              destination
            )
          )
        );
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Content>
        <Calculator names={appState.calculator} />
        <Constructor names={appState.constructor} />
      </Content>
    </DragDropContext>
  );
};
