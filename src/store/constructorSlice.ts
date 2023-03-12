import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ECalcParts } from '../Calculator/CalcPart/CalcPart';

export type ConstructorType = {
  part: ECalcParts;
  isConstructor: boolean;
  isDisplay: number;
};

export interface IConstrutorSliceState {
  calculator: ConstructorType[];
  constructor: ConstructorType[];
}

export const initialParts: ConstructorType[] = [
  { part: ECalcParts.display, isConstructor: false, isDisplay: 1 },
  { part: ECalcParts.operators, isConstructor: false, isDisplay: 0 },
  { part: ECalcParts.numPad, isConstructor: false, isDisplay: 0 },
  { part: ECalcParts.eval, isConstructor: false, isDisplay: 0 },
];

const initialState: IConstrutorSliceState = {
  calculator: initialParts,
  constructor: [],
};

interface IChangeIsConstructorAction {
  isConstructor: boolean;
  index: number;
}

export const constructorSlice = createSlice({
  name: 'constructorSlice',
  initialState,
  reducers: {
    changeCalculator: (state, action: PayloadAction<ConstructorType[]>) => {
      state.calculator = action.payload;
    },
    changeConstructor: (state, action: PayloadAction<ConstructorType[]>) => {
      action.payload.sort((a, b) => b.isDisplay - a.isDisplay); // makes sure the display stays on top
      state.constructor = action.payload;
    },
    changeConstructorState: (
      state,
      action: PayloadAction<IConstrutorSliceState>
    ) => {
      return (state = action.payload);
    },
    changeIsConstructor: (
      state,
      action: PayloadAction<IChangeIsConstructorAction>
    ) => {
      state.calculator[action.payload.index].isConstructor =
        action.payload.isConstructor;
    },
    deletePart: (state, action: PayloadAction<ECalcParts>) => {
      state.constructor = state.constructor.filter(
        (part) => part.part !== action.payload
      );

      const index = state.calculator.findIndex(
        (part) => part.part === action.payload
      );
      state.calculator[index].isConstructor = false;
    },
  },
});

export const {
  changeCalculator,
  changeConstructor,
  changeConstructorState,
  changeIsConstructor,
  deletePart,
} = constructorSlice.actions;
