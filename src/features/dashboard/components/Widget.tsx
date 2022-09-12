import { Card } from 'antd';
import * as React from 'react';
import "./style.css"

export interface  WidgetProps {
    title: string,
    children: any
}

export default function Widget ({title, children}:  WidgetProps) {
  return (
    <div className="site-card-border-less-wrapper style-card" style={{border: "1px solid #eee"}}>
    <Card title={title} bordered={false} style={{ width: 300 }}>
      {children}
    </Card>
  </div>
  );
}
