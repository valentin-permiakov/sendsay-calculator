import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IModeSeletorState {
  isModeRuntime: boolean;
}

const initialState: IModeSeletorState = {
  isModeRuntime: false,
};

export const modeSelectorSlice = createSlice({
  name: 'modeSelector',
  initialState,
  reducers: {
    changeMode: (state, action: PayloadAction<boolean>) => {
      state.isModeRuntime = action.payload;
    },
  },
});

export const { changeMode } = modeSelectorSlice.actions;
