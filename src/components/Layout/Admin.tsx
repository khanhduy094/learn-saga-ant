import { DashboardOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { PrivateRoute } from 'components/Common';
import HeaderLayout from 'components/Common/Header';
import Sidebar from 'components/Common/Sidebar';
import DashboardFeature from 'features/dashboard';
import StudentFeature from 'features/student';
import * as React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import './style.css';

const { Header, Sider, Content } = Layout;
export interface AdminLayoutProps {}

export default function AdminLayout(props: AdminLayoutProps) {
  const [collapsed, setCollapsed] = React.useState(false);
  return (
    <Layout style={{ minHeight: '100vh', flexDirection: "row" }}>
      {/* <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          // items={[
          //   {
          //     key: '1',
          //     icon: <UserOutlined />,
          //     label: 'Student',
          //   },
          //   {
          //     key: '2',
          //     icon: <VideoCameraOutlined />,
          //     label: 'Dashboard',
          //   },

          // ]}
        >
          <Menu.Item>
            <DashboardOutlined />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item>
            <UserOutlined />
            <span>Option 2</span>
          </Menu.Item>
        </Menu>
      </Sider> */}
      <Sidebar collapsedProp={collapsed}/>
      <Layout className="site-layout">
        {/* <Header className="site-layout-background" style={{ padding: 0 }}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: () => setCollapsed(!collapsed),
        })}
      </Header> */}
        <HeaderLayout collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
