import { cityApi } from 'api/cityApi';
import { studentApi } from 'api/studentApi';
import { ListResponse, Student } from 'models';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { dashboardActions, RankingByCity } from './dashboardSlice';

function* fetchStatistics() {
  const responseList: Array<ListResponse<Student>> = yield all([
    call(studentApi.getAll, { _page: 1, _limit: 1, gender: 'male' }),
    call(studentApi.getAll, { _page: 1, _limit: 1, gender: 'female' }),
    call(studentApi.getAll, { _page: 1, _limit: 1, mark_gte: 8 }),
    call(studentApi.getAll, { _page: 1, _limit: 1, mark_lte: 5 }),
  ]);
  const statisticList = responseList.map((x) => x.pagination._totalRows);
  const [maleCount, femaleCount, highMarkCount, lowMarkCount] = statisticList;

  yield put(
    dashboardActions.setStatistics({ maleCount, femaleCount, highMarkCount, lowMarkCount })
  );
}
function* fetchHighestStudentList() {
  const { data } = yield call(studentApi.getAll, {
    _page: 1,
    _limit: 5,
    _sort: 'mark',
    _order: 'desc',
  });
  yield put(dashboardActions.setHighestStudentList(data));
}
function* fetchLowestStudentList() {
  const { data } = yield call(studentApi.getAll, {
    _page: 1,
    _limit: 5,
    _sort: 'mark',
    _order: 'asc',
  });
  yield put(dashboardActions.setLowestStudentList(data));
}
function* fetchRankingByCityList() {
  // fetch data city
  const { data: cityList } = yield call(cityApi.getAll);
  // fetch ranking per city
  const cityCall = cityList.map((x: any) =>
    call(studentApi.getAll, {
      _page: 1,
      _limit: 5,
      _sort: 'mark',
      _order: 'desc',
      city: x.code,
    })
  );
  const responseList: Array<ListResponse<Student>> = yield all(cityCall)
  const rankingByCityList : RankingByCity[] = responseList.map((x: any, index) => ({
    cityId: cityList[index].code,
    cityName: cityList[index].name,
    rankingList: x.data
  }))
  // update state
  yield put(dashboardActions.setRankingByCityList(rankingByCityList))
}

function* fetchDashboardData() {
  try {
    yield all([
      call(fetchStatistics),
      call(fetchHighestStudentList),
      call(fetchLowestStudentList),
      call(fetchRankingByCityList),
    ]);
    yield put(dashboardActions.fetchDataSuccess());
  } catch (error) {
    yield put(dashboardActions.fetchDataFailed());
  }
}

export function* dashboardSaga() {
  yield takeLatest(dashboardActions.fetchData, fetchDashboardData);
}
