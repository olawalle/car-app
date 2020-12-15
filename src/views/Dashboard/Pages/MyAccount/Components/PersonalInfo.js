import { Button, Input } from "antd";
import React, { useState } from "react";

import edit from "../../../../../assets/images/edit.svg";

export default function PersonalInfo() {
  const [isEditting, setIsEditting] = useState(false);
  return (
    <>
      <p className='title'>
        Personal Information
        <img
          src={edit}
          alt=''
          onClick={() => setIsEditting(!isEditting)}
          style={{ cursor: "pointer", marginLeft: 80 }}
        />
      </p>
      <div className='user-photo'>
        <div className='photo'></div>
        <span className='name'>David O.C</span>
      </div>

      {!isEditting ? (
        <section>
          <p className='label'>Email address</p>
          <p className='info'>David@mail.com</p>

          <p className='label'>Phone number</p>
          <p className='info'>+234(0)80 6782 6781</p>

          <p className='label'>Permanent Address</p>
          <p className='info'>Merentii HQ Texas</p>
        </section>
      ) : (
        <section className='cut'>
          <p className='label'>Email address</p>
          <Input />
          <p className='label'>Phone number</p>
          <Input />
          <p className='label'>Permanent Address</p>
          <Input />

          <div className='buttons' style={{ marginTop: 20 }}>
            <Button
              className='green-btn'
              type='primary'
              style={{ borderRadius: 40 }}
            >
              Save personal info
            </Button>
            <Button
              onClick={() => setIsEditting(!isEditting)}
              className=''
              type='ghost'
              style={{ borderRadius: 40 }}
            >
              Cancel
            </Button>
          </div>
        </section>
      )}
    </>
  );
}
