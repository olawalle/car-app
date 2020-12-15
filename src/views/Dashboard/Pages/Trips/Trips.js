import { Tabs } from "antd";
import React, { useState } from "react";
import "./Trips.scss";

import { Table, Tag, Space } from "antd";
import EditModal from "./Components/EditModal";
import DetailsModal from "./Components/DetailsModal";

const { TabPane } = Tabs;
export default function Trips() {
  const [showEdit, setshowEdit] = useState(false);
  const [showDetails, setshowDetails] = useState(false);
  const currentColumns = [
    {
      title: "User",
      dataIndex: "user",
      key: "user",
      render: (text) => <div className='avtr'>DC</div>,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text) => (
        <div className='date'>
          09/12/2020 - 09/12/2020
          <p style={{ fontSize: 12, color: "#afafaf" }}>Tuesday - Friday</p>
        </div>
      ),
    },
    {
      title: "Days",
      dataIndex: "days",
      key: "days",
    },
    {
      title: "Car",
      dataIndex: "car",
      key: "car",
    },
    {
      title: "Extra Fee",
      dataIndex: "extra_fee",
      key: "extra_fee",
    },
    {
      title: "",
      key: "action",
      render: (text, record) => (
        <p
          className='green--text'
          style={{ cursor: "pointer" }}
          onClick={() => setshowEdit(true)}
        >
          Edit or Cancel
        </p>
      ),
    },
  ];
  const pastColumns = [
    {
      title: "User",
      dataIndex: "user",
      key: "user",
      render: (text) => <div className='avtr'>DC</div>,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text) => (
        <div className='date'>
          09/12/2020 - 09/12/2020
          <p style={{ fontSize: 12, color: "#afafaf" }}>Tuesday - Friday</p>
        </div>
      ),
    },
    {
      title: "Days",
      dataIndex: "days",
      key: "days",
    },
    {
      title: "Car",
      dataIndex: "car",
      key: "car",
    },
    {
      title: "Extra Fee",
      dataIndex: "extra_fee",
      key: "extra_fee",
    },
    {
      title: "STATUS",
      key: "action",
      render: (text, record) => (
        <p className='green--text' style={{ cursor: "pointer" }}>
          Completed
        </p>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      date: "John Brown",
      days: 32,
      car: "Toyota Camry",
      extra_fee: "$200",
      action: "",
    },
    {
      key: "2",
      date: "John Brown",
      days: 32,
      car: "Toyota Camry",
      extra_fee: "$200",
      action: "",
    },
    {
      key: "3",
      date: "John Brown",
      days: 32,
      car: "Toyota Camry",
      extra_fee: "$200",
      action: "",
    },
  ];
  return (
    <div className='trips'>
      <p className='page-heading'>My Trips</p>
      <Tabs defaultActiveKey='1'>
        <TabPane tab='Planned Trips' key='1'>
          <Table columns={currentColumns} dataSource={data} />
        </TabPane>
        <TabPane tab='Past Trips' key='2'>
          <Table
            columns={pastColumns}
            dataSource={data}
            onRow={(record, rowIndex) => {
              return {
                onClick: (event) => {
                  setshowDetails(true);
                  console.log(record);
                  // you can pass the rows data using the "Record" key
                },
              };
            }}
          />
        </TabPane>
      </Tabs>

      <EditModal open={showEdit} setshowEdit={setshowEdit} />
      <DetailsModal open={showDetails} setshowDetails={setshowDetails} />
    </div>
  );
}
