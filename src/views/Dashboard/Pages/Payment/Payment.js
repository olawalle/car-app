import { Button, Col, Input, Row } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import Modal from "antd/lib/modal/Modal";
import React, { useState } from "react";
import "./Payment.scss";

import visa from "../../../../assets/images/VISA.svg";
import { CheckCircleFilled } from "@ant-design/icons";

export default function Payment() {
  const [addingNew, setAddingNew] = useState(false);
  return (
    <div className='payment'>
      <p className='page-heading'>Payment</p>
      <p className='empty'>No payment method available</p>

      {[1, 2].map((card) => (
        <div className={`card-info ${card === 1 ? "checked" : ""}`}>
          <div className='card-left-info'>
            {card === 1 ? (
              <CheckCircleFilled style={{ color: "#24c599", fontSize: 22 }} />
            ) : (
              <div className='circle'></div>
            )}
            <span className='number'>XXXX-1242</span>
          </div>
          <img src={visa} alt='' />
        </div>
      ))}
      <div className='add-new' onClick={() => setAddingNew(true)}>
        +<span style={{ marginLeft: 12 }}>Add new card</span>
      </div>

      <div className='actions'>
        <span>Delete card</span>

        <Button
          type='primary'
          className='green-btn'
          style={{ borderRadius: 40, marginLeft: 30 }}
        >
          Make primary
        </Button>
      </div>

      <Modal
        onCancel={() => setAddingNew(false)}
        visible={addingNew}
        title={null}
        footer={null}
        width={600}
      >
        <div className='modal-wrap'>
          <h2>Card details</h2>
          <p
            style={{
              color: "#a5a5a5",
              fontSize: 16,
              fontWeight: 300,
              marginBottom: 30,
            }}
          >
            Put your debit/credit card details
          </p>

          <Row gutter={20}>
            <Col sm={24} xs={24} md={24}>
              <Input
                style={{
                  width: "100%",
                  border: "1px solid #dcdcdc",
                  backgroundColor: "#fafafa",
                  borderRadius: 40,
                  height: 50,
                  marginBottom: 15,
                }}
                placeholder='Card number'
              />
            </Col>
            <Col sm={17} xs={17} md={17}>
              <Input
                style={{
                  width: "100%",
                  border: "1px solid #dcdcdc",
                  backgroundColor: "#fafafa",
                  borderRadius: 40,
                  height: 50,
                  marginBottom: 15,
                }}
                placeholder='MM/YY'
              />
            </Col>
            <Col sm={7} xs={7} md={7}>
              <Input
                style={{
                  width: "100%",
                  border: "1px solid #dcdcdc",
                  backgroundColor: "#fafafa",
                  borderRadius: 40,
                  height: 50,
                  marginBottom: 15,
                }}
                placeholder='CVC'
              />
            </Col>
            <Col sm={24} xs={24} md={24}>
              <Input
                style={{
                  width: "100%",
                  border: "1px solid #dcdcdc",
                  backgroundColor: "#fafafa",
                  borderRadius: 40,
                  height: 50,
                  marginBottom: 15,
                }}
                placeholder="Card holder's name"
              />
            </Col>
            <Col sm={24} xs={24} md={24}>
              <Input
                style={{
                  width: "100%",
                  border: "1px solid #dcdcdc",
                  backgroundColor: "#fafafa",
                  borderRadius: 40,
                  height: 50,
                  marginBottom: 15,
                }}
                placeholder='Card description(e.g Personal, business)'
              />
            </Col>
          </Row>
          <Button
            className='green-btn'
            style={{
              width: "100%",
              borderRadius: 30,
              fontSize: 16,
              height: 50,
            }}
          >
            Validate card
          </Button>
        </div>
      </Modal>
    </div>
  );
}
