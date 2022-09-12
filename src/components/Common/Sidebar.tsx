import { Menu } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import * as React from 'react';
import { DashboardOutlined, UserOutlined } from '@ant-design/icons';
import { Link, Outlet } from 'react-router-dom';

export interface SidebarProps {
  collapsedProp?: boolean | undefined;
  // setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar(props: SidebarProps) {
  const { collapsedProp } = props;
  return (
    <Sider trigger={null} collapsible collapsed={collapsedProp}>
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
          <Link to="/admin/dashboard">
            <UserOutlined />
            <span>Dashboard</span>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/admin/students ">
            <DashboardOutlined />
            <span>Student</span>
          </Link>
        </Menu.Item>
        
      </Menu>
    </Sider>
  );
}
