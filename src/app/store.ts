import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './rootSaga';

const sagaMiddleWare = createSagaMiddleware();


export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  devTools: true,
  // thêm saga middleware vào redux
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleWare)
});

//run saga
sagaMiddleWare.run(rootSaga)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
