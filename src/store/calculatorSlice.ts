import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ICalcState = {
  display: string;
  calcString: string;
};

const initialState: ICalcState = {
  display: '0',
  calcString: '',
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    updateDisplay: (state, action: PayloadAction<string>) => {
      state.display += action.payload;
    },
    updateCalcString: (state, action: PayloadAction<string>) => {
      state.calcString += action.payload;
    },
    changeLastSymbol: (state, action: PayloadAction<string>) => {
      state.calcString =
        state.calcString.replace(/[^0-9.]/g, '') + action.payload;
    },
    removeStartingZero: (state) => {
      state.display = state.display.slice(0, -1);
    },
    resetDisplay: (state) => {
      state.display = '0';
      state.calcString = '';
    },
    deleteDisplay: (state) => {
      state.display = '';
    },
    showResult: (state, action: PayloadAction<string>) => {
      if (Number(action.payload) === Infinity) {
        state.display = 'Не определено';
      } else {
        const number = parseFloat(Number(action.payload).toFixed(5));
        state.display = number.toString();
      }
    },
  },
});

export const {
  updateDisplay,
  resetDisplay,
  changeLastSymbol,
  removeStartingZero,
  showResult,
  deleteDisplay,
  updateCalcString,
} = calculatorSlice.actions;
