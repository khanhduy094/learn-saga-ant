import { Col, Row, Spin, Typography } from 'antd';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { useEffect } from 'react';
import StatisticItem from './components/StatisticItem';
import {
  dashboardActions,
  selectDashboardLoading,
  selectDashboardStatistics,
  selectHighestStudentList,
  selectLowestStudentList,
  selectRankingByCityList,
} from './dashboardSlice';
import { UserDeleteOutlined } from '@ant-design/icons';
import Widget from './components/Widget';
import StudentRankingList from './components/StudentRankingList';

export interface DashboardFeatureProps {}

export default function DashboardFeature(props: DashboardFeatureProps) {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectDashboardLoading);
  const statistics = useAppSelector(selectDashboardStatistics);
  const highestStudentList = useAppSelector(selectHighestStudentList);
  const lowestStudentList = useAppSelector(selectLowestStudentList);
  const rankingByCityList = useAppSelector(selectRankingByCityList);

  useEffect(() => {
    dispatch(dashboardActions.fetchData());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Spin size="large" />
        </div>
      ) : (
        // statistic
        <div>
          <Row gutter={[16, 24]}>
            <Col xs={24} md={12} lg={6}>
              <StatisticItem
                icon={<UserDeleteOutlined />}
                label="Male"
                value={statistics.maleCount}
              />
            </Col>
            <Col xs={24} md={12} lg={6}>
              <StatisticItem
                icon={<UserDeleteOutlined />}
                label="Female"
                value={statistics.femaleCount}
              />
            </Col>
            <Col xs={24} md={12} lg={6}>
              <StatisticItem
                icon={<UserDeleteOutlined />}
                label="Mark > 8"
                value={statistics.highMarkCount}
              />
            </Col>
            <Col xs={24} md={12} lg={6}>
              <StatisticItem
                icon={<UserDeleteOutlined />}
                label="Mark < 5"
                value={statistics.lowMarkCount}
              />
            </Col>
          </Row>
          {/* //all student ranking */}
          <div style={{ marginTop: 32 }}>
            <Typography.Title level={4}>All Student</Typography.Title>
            <Row gutter={24}>
              <Col xs={24} md={12} lg={6}>
                <Widget title="Student with highest mark">
                  <StudentRankingList studentList={highestStudentList} />
                </Widget>
              </Col>
              <Col xs={24} md={12} lg={6}>
                <Widget title="Student with lowgest mark">
                  <StudentRankingList studentList={lowestStudentList} />
                </Widget>
              </Col>
            </Row>
          </div>
        </div>
      )}
    </>
  );
}
