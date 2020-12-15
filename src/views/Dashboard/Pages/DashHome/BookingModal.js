import { Col, Row } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { useEffect, useState } from "react";

import car from "../../../../assets/images/car2.png";

import { CheckCircleFilled } from "@ant-design/icons";

export default function BookingModal({ open, setOpen }) {
  const [modalOpen, setmodalOpen] = useState(open);
  useEffect(() => {
    setmodalOpen(open);
  }, [open]);
  return (
    <div>
      <Modal
        title={null}
        footer={null}
        visible={modalOpen}
        onCancel={() => {
          setmodalOpen(false);
          setOpen(false);
        }}
        width={700}
        centered
      >
        <div
          style={{
            fontWeight: "600",
            fontSize: 22,
            paddingBottom: 20,
            borderBottom: "1px solid rgb(173, 173, 173, 0.35)",
            marginBottom: 30,
          }}
        >
          Car request
        </div>
        <Row className='booking-modal' gutter={50}>
          <Col sm={24} md={12}>
            <p style={{ fontWeight: "600", fontSize: 20, color: "#24c599" }}>
              Planned trips
            </p>
            <img src={car} style={{ width: "70%" }} alt='' />

            <p style={{ fontWeight: "600", fontSize: 20 }}>BMW 2010</p>

            <p className='label'>START</p>
            <p className='info'>Mon Sept 20 at 9:00 am</p>
            <p className='label'>END</p>
            <p className='info'>Mon Sept 20 at 9:00 am</p>
            <p className='label'>DRIVING DAYS</p>
            <p className='info'>2</p>
          </Col>

          <Col sm={24} md={12}>
            <p style={{ fontWeight: "600", fontSize: 20, color: "#24c599" }}>
              Protections and coverage
            </p>
            {[1, 2, 3].map((plan) => (
              <div
                className={`bordered plan ${
                  plan === 1 ? "active recommended" : ""
                }`}
              >
                <div>
                  <p style={{ marginBottom: 3, fontSize: 16 }}>
                    Full coverage plan
                  </p>
                  <p style={{ color: "#000000b0", fontSize: 12 }}>Price: $50</p>
                </div>
                {plan === 1 ? (
                  <CheckCircleFilled
                    style={{ color: "#24c599", fontSize: 22 }}
                  />
                ) : (
                  <div className='circle'></div>
                )}
              </div>
            ))}
          </Col>
        </Row>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 0,
          }}
        >
          <div></div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                paddingRight: 20,
              }}
            >
              <p
                style={{
                  fontSize: 10,
                  color: "#8d8d8d",
                  marginBottom: 0,
                  marginTop: 30,
                }}
              >
                ADDITIONAL CHANGE
              </p>
              <p style={{ fontSize: 20, textAlign: "right" }}>$234</p>
            </div>
            <button className='green-btn' style={{ borderRadius: 50 }}>
              Request change
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
