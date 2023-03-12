import { configureStore } from '@reduxjs/toolkit';
import { calculatorSlice } from './calculatorSlice';
import { constructorSlice } from './constructorSlice';
import { modeSelectorSlice } from './modeSelectorSlice';

export const store = configureStore({
  reducer: {
    calculator: calculatorSlice.reducer,
    constructorSlice: constructorSlice.reducer,
    modeSelector: modeSelectorSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
