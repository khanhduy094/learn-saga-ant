import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { ListResponse, Student } from 'models';
import React from 'react';
import './style.css';

interface DataType {
  key: number;
  id: string;
  name: string;
  mark: number;
}

// interface DataType2 {
//   key: string;
//   id: number;

// }

export interface StudentRankingListProps {
    studentList: Student[]
  }

const StudentRankingList = ({ studentList }: StudentRankingListProps) => {
  const columns: ColumnsType<DataType> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (id) => <a>{id}</a>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Mark',
      dataIndex: 'mark',
      key: 'mark',
    },
  ];

  // const data: DataType[] = [
  //   {
  //     key: '1',
  //     id: 1,
  //     name: "",
  //     mark: 32,
  //   },
  //   {
  //     key: '2',
  //     id: 2,
  //     name: 'Jim Green',
  //     mark: 42,
  //   },
  //   {
  //     key: '3',
  //     id: 3,
  //     name: 'Joe Black',
  //     mark: 32,
  //   },
  // ];

  const newDataRanking: DataType[] = studentList.map((item, index) => ({
    
      key: index,
      id: item.id,
      name: item.name,
      mark: item.mark
    
  }))

  console.log(studentList);
  


  return <Table className="style-table" pagination={false} columns={columns} dataSource={newDataRanking} />;
};

export default StudentRankingList;
