import { PayloadAction } from '@reduxjs/toolkit';
import { call, delay, fork, put, take } from 'redux-saga/effects';
import History from 'utils/history';
import { authActions, LoginPayload } from './authSlice';

function* handleLogin(payload: LoginPayload) {
  try {
    console.log("login");
    
    yield delay(1000);
    localStorage.setItem('access_token', 'fake_token');

    // dispatch loginSuccess action chứa info user
    yield put(
      authActions.loginSuccess({
        id: 1,
        name: 'Khánh Duy',
      })
    );
    yield History.push("/admin")
  } catch (error) {
    put(authActions.loginFailed(error.message));
  }

  // navigate to admin page
}
function* handleLogout() {
  console.log("logout");
  
  yield delay(1000);
  localStorage.removeItem('access_token');
  yield History.push("/login")
  // navigate to login page
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));
    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
      yield fork(handleLogin, action.payload);
    }

    yield take([authActions.logout.type, authActions.loginFailed.type]);
    yield call(handleLogout);
  }
}

export function* authSaga() {
  yield fork(watchLoginFlow);
}
