import { Button, Row, Typography } from 'antd';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import * as React from 'react';
import StudentTable from '../components/StudentTable';
import { selectStudentFilter, selectStudentList, studentActions } from '../studentSlice';



export interface  ListPageProps {
}

export default function ListPage (props:  ListPageProps) {
  const dispatch = useAppDispatch();
  const studentList = useAppSelector(selectStudentList);
  const filter = useAppSelector(selectStudentFilter);
  
  React.useEffect(() => {
    dispatch(studentActions.fetchStudentList(filter));
  }, [dispatch, filter]);

  
  return (
    <div>
      <Row justify='space-between' align='middle' style={{marginBottom: "32px"}}> 
        <Typography.Title level={4}>Students</Typography.Title>
        <Button type='primary'>Add new student</Button>

      
      </Row>
      <StudentTable studentData={studentList}/>
    </div>
  );
}
