import { Typography } from 'antd';
import * as React from 'react';
import { Button, Spin } from 'antd';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { authActions} from '../authSlice';
import { Navigate } from 'react-router-dom';

export interface LoginPageProps {}

export default function LoginPage(props: LoginPageProps) {
  const isLogging = useAppSelector(state => state.auth.logging)
  const isLoggedIn = Boolean(localStorage.getItem("access_token"))

  const dispatch = useAppDispatch();
  const handleLoginClick = () => {
    dispatch(authActions.login({
      username: "",
      password: "",
    }))
  };
  if(isLoggedIn){
    console.log("đã login");
    
    return <Navigate to={"/admin"} replace={true}/>
  }
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <div style={{ padding: 15 }}>
        <Typography.Title level={5}>Student Management</Typography.Title>

        <div style={{ marginTop: '32px' }}>
          <Button  type='primary' onClick={handleLoginClick}>
            {isLogging && <Spin />} &nbsp; Fake Login
          </Button>
        </div>
      </div>
    </div>
  );
}
