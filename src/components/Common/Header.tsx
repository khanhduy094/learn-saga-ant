import * as React from 'react';
import { Button, Col, Layout, Row } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useAppDispatch } from 'app/hooks';
import { authActions } from 'features/auth/authSlice';



const { Header } = Layout;
export interface HeaderLayoutProp {
  collapsed: any;
  setCollapsed: any;
}



export default function HeaderLayout({ collapsed, setCollapsed }: HeaderLayoutProp) {
  const dispatch = useAppDispatch();

  const handleLogoutClick = () => {
    dispatch(authActions.logout())
  }

  return (
    <Header className="site-layout-background" style={{ padding: "15px", height: "70px", lineHeight: 0 }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => setCollapsed(!collapsed),
      })}
      <Row justify='end'>
        <Col>
        <Button  type='primary' onClick={handleLogoutClick}>Logout</Button>
        </Col>
      </Row>
    </Header>
  );
}
