import { Typography } from 'antd';
import * as React from 'react';
import { Button, Spin } from 'antd';
import { useAppDispatch } from 'app/hooks';
import { authActions } from '../authSlice';

export interface LoginPageProps {}

export default function LoginPage(props: LoginPageProps) {
  const isLogging = false;
  const dispatch = useAppDispatch();
  const handleLoginClick = () => {
    dispatch(authActions.login({
      username: "",
      password: "",
    }))
  };
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
