import { takeEvery, delay, put, takeLatest } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { increment, incrementSaga, incrementSagaSuccess } from './counterSlice';

function* handleIncreamentSaga(action: PayloadAction<number>) {
    //wait 2s
    console.log("wait 1s");
    yield delay(1000) 

    console.log("wait done, dispatch action");
    yield put(incrementSagaSuccess(action.payload))
    
}

export function* counterSaga() {
  console.log('counter saga');
//   yield takeEvery(incrementSaga.toString(), handleIncreamentSaga);
  yield takeLatest(incrementSaga.toString(), handleIncreamentSaga);
}
