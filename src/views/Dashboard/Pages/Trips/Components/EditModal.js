import { Col, Row } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { useEffect, useState } from "react";

import location from "../../../../../assets/images/location.svg";
import clock from "../../../../../assets/images/wall-clock.svg";
import calendar from "../../../../../assets/images/calendar.svg";
import car from "../../../../../assets/images/car2.png";

import { CheckCircleFilled } from "@ant-design/icons";

export default function EditModal({ open, setshowEdit }) {
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
          setshowEdit(false);
        }}
        width={800}
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
          Edit or cancel trip
        </div>
        <Row className='edit-modal' gutter={50}>
          <Col sm={24} md={12}>
            <p style={{ fontWeight: "600" }}>Date and address</p>
            <div className='green-div'>
              <img src={location} alt='' /> <span>New york</span>
            </div>
            <div className='green-div'>
              <img src={location} alt='' /> <span>Texas</span>
            </div>
            <div className='green-div'>
              <img src={calendar} alt='' /> <span>Mon Sep 23 - Tue Oct 12</span>
            </div>
            <div className='green-div'>
              <div style={{ width: "50%", borderRight: "1px solid #eee" }}>
                <img src={clock} alt='' /> <span>9:00 am</span>
              </div>
              <div style={{ paddingLeft: 30 }}>
                <img src={clock} alt='' />
                <span>9:00 am</span>
              </div>
            </div>
          </Col>

          <Col sm={24} md={12}>
            <p style={{ fontWeight: "600" }}>Car</p>
            <div className='bordered'>
              <img src={car} alt='' className='car' />
              <div>
                <p style={{ marginBottom: 0, fontSize: 15 }}>
                  Full coverage plan
                </p>
                <p style={{ color: "#000000b0", fontSize: 14 }}>Price: $50</p>
              </div>
            </div>

            <p style={{ fontWeight: "600", marginTop: 100 }}>
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
                  <p style={{ color: "#000000b0", fontSize: 14 }}>Price: $50</p>
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
            marginTop: 50,
          }}
        >
          <button className='red-btn' style={{ borderRadius: 50 }}>
            Cancel trip
          </button>
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
