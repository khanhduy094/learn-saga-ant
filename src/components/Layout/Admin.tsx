import * as React from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import "./style.css"
import HeaderLayout from 'components/Common/Header';

const { Header, Sider, Content } = Layout;
export interface  AdminLayoutProps {
}

export default function AdminLayout (props:  AdminLayoutProps) {
  const [collapsed, setCollapsed] = React.useState(false);
  return (
    <Layout style={{minHeight: "100vh"}}>
    <Sider  trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <UserOutlined />,
            label: 'Student',
          },
          {
            key: '2',
            icon: <VideoCameraOutlined />,
            label: 'Dashboard',
          },

        ]}
      />
    </Sider>
    <Layout className="site-layout">
      {/* <Header className="site-layout-background" style={{ padding: 0 }}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: () => setCollapsed(!collapsed),
        })}
      </Header> */}
      <HeaderLayout collapsed={collapsed} setCollapsed={setCollapsed}/>
      <Content
        className="site-layout-background"
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
      >
        Content
      </Content>
    </Layout>
  </Layout>
  );
}
