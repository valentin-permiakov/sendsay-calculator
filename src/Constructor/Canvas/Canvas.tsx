/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import CalcPart from '../../Calculator/CalcPart/CalcPart';
import { EIcons, Icon } from '../../Icons/Icon';
import { ConstructorType, deletePart } from '../../store/constructorSlice';
import styles from './style.scss';
import { ECalcParts } from '../../Calculator/CalcPart/CalcPart';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';

type CanvasProps = {
  names: ConstructorType[];
};

const Canvas: React.FC<CanvasProps> = ({ names }) => {
  const isModeRuntime = useSelector(
    (state: RootState) => state.modeSelector.isModeRuntime
  );
  const dispatch = useDispatch();
  return (
    <Droppable droppableId="constructor" isDropDisabled={isModeRuntime}>
      {(provided, snapshot) => (
        <div
          className={`${styles.canvasContainer} ${
            snapshot.isDraggingOver ? styles.dragging : ''
          } ${names.length !== 0 ? styles.containerFull : ''}`}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {names?.map((name, index) => (
            <Draggable
              key={`calc${index}`}
              draggableId={`${index}${index}`}
              index={index}
              isDragDisabled={
                name.part === ECalcParts.display || isModeRuntime ? true : false
              }
              disableInteractiveElementBlocking={!isModeRuntime}
            >
              {(provided) => {
                return (
                  <div
                    onDoubleClick={
                      !isModeRuntime
                        ? () => {
                            dispatch(deletePart(name.part));
                          }
                        : () => {}
                    }
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <CalcPart
                      {...provided.dragHandleProps}
                      name={name.part}
                      index={index}
                      isDisabled={!isModeRuntime}
                    />
                  </div>
                );
              }}
            </Draggable>
          ))}
          {names.length === 0 && (
            <>
              <Icon name={EIcons.dragIcon} />
              <h2 className={styles.canvasHeader}>Перетащите сюда</h2>
              <span className={styles.canvasText}>
                любой элемент из левой панели
              </span>
            </>
          )}

          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
export default Canvas;
