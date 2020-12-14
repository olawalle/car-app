import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Dashboard.scss";

export default function Dashboard() {
  return (
    <div className='dashboard'>
      <Sidebar />
      <div className='dashbody'></div>
    </div>
  );
}
