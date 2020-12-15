import { Button } from "antd";
import React from "react";
import PasswordData from "./Components/PasswordData";
import PersonalInfo from "./Components/PersonalInfo";
import ReferenceData from "./Components/ReferenceData";
import ScanID from "./Components/ScanID";
import "./MyAccount.scss";

export default function MyAccount() {
  return (
    <div className='my-account'>
      <PersonalInfo />

      <ScanID />

      <ReferenceData />

      <PasswordData />
    </div>
  );
}
