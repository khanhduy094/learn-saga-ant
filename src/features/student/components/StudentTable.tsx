import { Button, Space, Table, Tag } from 'antd';
import { Student } from 'models';
import * as React from 'react';

export interface StudentTableProps {
  studentData: Student[];
  onEdit?: (student: any) => void;
  onRemove?: (student: any) => void;
}

const { Column, ColumnGroup } = Table;

interface DataType {
  key: React.Key;
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  tags: string[];
}

interface DataType2 {
  id: string;
  key?: string;
  name: string;
  gender: string;
  mark: number;
  city: string;
}

// const data: DataType[] = [
//   {
//     key: '1',
//     firstName: 'John',
//     lastName: 'Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     firstName: 'Jim',
//     lastName: 'Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     firstName: 'Joe',
//     lastName: 'Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ];

export default function StudentTable({ studentData, onEdit, onRemove }: StudentTableProps) {
  const data2: DataType2[] = studentData;
  console.log(data2);

  return (
    <>
      <Table dataSource={data2}>
        {/* {data2.map((student, index) => (
             <Column title="ID" dataIndex="id" key="id" />
        ))} */}
        <Column title="ID" dataIndex="id" key="id" />
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Gender" dataIndex="gender" key="gender" />

        <Column title="Mark" dataIndex="mark" key="mark" />
        <Column title="City" dataIndex="city" key="city" />
        <Column
          title="Action"
          key="action"
          align="right"
          render={(_: any, record: DataType2) => {
            // console.log(record);
            
            return (
              <Space size="middle">
                <Button type="primary" onClick={() => onEdit?.(record)}>Update</Button>
                <Button type="ghost" onClick={() => onRemove?.(record)}>Remove</Button>
              </Space>
            );
          }}
        />
      </Table>
    </>
  );
}
