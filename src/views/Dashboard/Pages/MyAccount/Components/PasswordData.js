import { Button, Input } from "antd";
import React, { useState } from "react";

export default function PasswordData() {
  const [isEditting, setIsEditting] = useState(false);
  return (
    <section style={{ border: 0 }} className='cut'>
      <p className='title'>Password</p>
      {!isEditting ? (
        <div className='buttons'>
          <Button
            className='green-btn'
            type='primary'
            onClick={() => setIsEditting(!isEditting)}
            style={{ borderRadius: 40 }}
          >
            Change password
          </Button>
          <Button className='' type='ghost' style={{ borderRadius: 40 }}>
            Delete my account
          </Button>
        </div>
      ) : (
        <>
          <p className='label'>Old password</p>
          <Input />
          <p className='label'>New password</p>
          <Input />
          <p className='label'>Confirm new password</p>
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
        </>
      )}
    </section>
  );
}
