import { Col, Row, Typography } from 'antd';
import * as React from 'react';

export interface  StatisticItemProps {
    icon: React.ReactElement;
    label: string;
    value: string | number;
}

export default function StatisticItem ({icon, label, value}:  StatisticItemProps) {
  return (
    <Row style={{borderRadius: 8, border: "1px solid #eee", padding: 10}} justify="space-between" align='middle' >
      <Col style={{fontSize: 25}}>{icon}</Col>
      <Col>
        <Typography.Title level={4}>{value}</Typography.Title>
        <Typography.Text>{label}</Typography.Text>
      </Col>
    </Row>
  );
}
