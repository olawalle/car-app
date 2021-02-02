import { CheckCircleFilled } from "@ant-design/icons";
import { Button } from "antd";
import React, { useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import PasswordData from "./Components/PasswordData";
import PersonalInfo from "./Components/PersonalInfo";
import ReferenceData from "./Components/ReferenceData";
import ScanID from "./Components/ScanID";
import "./MyAccount.scss";
import { UseUserContext } from "../../../../contexts/User";

export default function MyAccount() {
  const [percentage, setpercentage] = useState(50);
  const { user } = UseUserContext().userData;
  const {profile_completion_rate} = user;

  return (
    <div className="my-account">
      <div className="complete">
        <CircularProgressbar
          strokeWidth={12}
          value={profile_completion_rate}
          text={`${percentage}%`}
          styles={buildStyles({
            pathColor: "#24c599",
            textColor: "#b9b9b9",
          })}
        />

        <div
          style={{
            paddingLeft: 25,
            borderLeft: "1px solid #eee",
            marginLeft: 30,
          }}
        >
          <p
            style={{
              color: "#24c599",
              fontSize: 18,
              fontWeight: 600,
              marginBottom: 15,
              marginTop: 10,
            }}
          >
            Complete your profile
          </p>
          <p style={{ color: "#a4a4a4", marginBottom: 5 }}>
            <CheckCircleFilled
              style={{ color: "#24c599", fontSize: 20, marginRight: 5 }}
            />{" "}
            Your account is created
          </p>
          <p style={{ color: "#a4a4a4", marginBottom: 5 }}>
            <CheckCircleFilled
              style={{ color: "#24c599", fontSize: 20, marginRight: 5 }}
            />{" "}
            Your account is created
          </p>
          <p style={{ color: "#a4a4a4", marginBottom: 5 }}>
            <CheckCircleFilled
              style={{ color: "#24c599", fontSize: 20, marginRight: 5 }}
            />{" "}
            Your account is created
          </p>
          <p style={{ color: "#a4a4a4", marginBottom: 5 }}>
            <CheckCircleFilled
              style={{ color: "#24c599", fontSize: 20, marginRight: 5 }}
            />{" "}
            Your account is created
          </p>
          <p style={{ color: "#a4a4a4", marginBottom: 5 }}>
            <CheckCircleFilled
              style={{ color: "#24c599", fontSize: 20, marginRight: 5 }}
            />{" "}
            Your account is created
          </p>
        </div>
      </div>

      <div className="data-wrap">
        <PersonalInfo />

        <ScanID />

        <ReferenceData />

        <PasswordData />
      </div>
    </div>
  );
}
