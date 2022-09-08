import { Menu } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import * as React from 'react';

export interface SidebarProps {
  collapsedProp?: boolean | undefined;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  items: any;
}

export default function Sidebar(props: SidebarProps) {
  const { collapsedProp, setCollapsed, items } = props;
  return (
    <>
      <Sider collapsible collapsed={collapsedProp} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
    </>
  );
}
