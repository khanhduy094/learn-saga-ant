import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './rootSaga';
import authReducer from 'features/auth/authSlice';
import dashboardReducer from 'features/dashboard/dashboardSlice';
import studentReducer from 'features/student/studentSlice';
import cityReducer from 'features/city/citySlice';

const sagaMiddleWare = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    dashboard: dashboardReducer,
    student: studentReducer,
    city: cityReducer,
  },
  devTools: true,
  // thêm saga middleware vào redux
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleWare),
});

//run saga
sagaMiddleWare.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
