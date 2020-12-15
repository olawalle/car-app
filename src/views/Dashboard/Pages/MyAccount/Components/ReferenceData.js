import { Button, Col, Input, Row } from "antd";
import React, { useState } from "react";

export default function ReferenceData() {
  const [isEditting, setIsEditting] = useState(false);
  return (
    <>
      {!isEditting ? (
        <section>
          <p className='title'>Reference Information</p>
          <span onClick={() => setIsEditting(true)} className='ghost'>
            Update reference information
          </span>
        </section>
      ) : (
        <section className='cut'>
          <p className='title'>Reference Information</p>
          <Row gutter={20}>
            <Col sm={24} md={12}>
              <p className='label'>Firstname</p>
              <Input />
            </Col>
            <Col sm={24} md={12}>
              <p className='label'>Lastname</p>
              <Input />
            </Col>
            <Col sm={24} md={12}>
              <p className='label'>Phone No.</p>
              <Input />
            </Col>
            <Col sm={24} md={12}>
              <p className='label'>Relationship</p>
              <Input />
            </Col>
            <Col sm={24} md={24}>
              <p className='label'>Permanent address</p>
              <Input />
            </Col>
          </Row>

          <div className='buttons' style={{ marginTop: 20 }}>
            <Button
              className='green-btn'
              type='primary'
              style={{ borderRadius: 40 }}
            >
              Save referrence
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
