import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { ConstructorType } from '../store/constructorSlice';
import CalcPart from './CalcPart/CalcPart';
import styles from './style.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

type CalculatorProps = {
  names: ConstructorType[];
};

const Calculator: React.FC<CalculatorProps> = ({ names }) => {
  const isModeRuntime = useSelector(
    (state: RootState) => state.modeSelector.isModeRuntime
  );
  return (
    <Droppable droppableId="calculator" isDropDisabled={true}>
      {(provided) => (
        <div
          className={styles.container}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {names?.map((name, index) => (
            <Draggable
              key={`calc${index}`}
              draggableId={`calc${name.part}`}
              index={index}
              isDragDisabled={name.isConstructor || isModeRuntime}
              disableInteractiveElementBlocking
            >
              {(provided, snapshot) => (
                <>
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <CalcPart
                      name={name.part}
                      index={index}
                      key={`calc${index}`}
                      isTemplate
                      isMoved={name.isConstructor}
                      isDisabled={true}
                    />
                  </div>
                  {snapshot.isDragging && (
                    <CalcPart
                      name={name.part}
                      index={index}
                      isDisabled={true}
                    />
                  )}
                </>
              )}
            </Draggable>
          ))}

          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Calculator;
