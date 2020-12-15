import { Col, Row } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { useEffect, useState } from "react";

import location from "../../../../../assets/images/location.svg";
import clock from "../../../../../assets/images/wall-clock.svg";
import calendar from "../../../../../assets/images/calendar.svg";
import car from "../../../../../assets/images/car2.png";

import { CheckCircleFilled } from "@ant-design/icons";

export default function DetailsModal({ open, setshowDetails }) {
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
          setshowDetails(false);
        }}
        width={700}
      >
        <div style={{ padding: "0 20px" }}>
          <div
            style={{
              fontWeight: "600",
              fontSize: 28,
              paddingBottom: 20,
              borderBottom: "1px solid rgb(173, 173, 173, 0.35)",
              marginBottom: 30,
            }}
          >
            Trip details
          </div>

          <p style={{ fontSize: 16, fontWeight: "600" }}>Trip start</p>
          <Row
            className=''
            style={{
              marginBottom: 30,
            }}
            gutter={50}
          >
            <Col sm={24} md={6}>
              <p
                style={{
                  fontSize: 10,
                  color: "#a4a4a4",
                  marginBottom: 0,
                  fontWeight: "500",
                }}
              >
                START DATE
              </p>
              <p>10/12/2020</p>
            </Col>
            <Col sm={24} md={6}>
              <p
                style={{
                  fontSize: 10,
                  color: "#a4a4a4",
                  marginBottom: 0,
                  fontWeight: "500",
                }}
              >
                START TIME
              </p>
              <p>5:30 pm</p>
            </Col>

            <Col sm={24} md={12}>
              <p
                style={{
                  fontSize: 10,
                  color: "#a4a4a4",
                  marginBottom: 0,
                  fontWeight: "500",
                }}
              >
                START LOCATION
              </p>
              <p style={{ marginBottom: 10 }}>Merentii HQ Texas</p>
              <p className='green--text'>Show on map</p>
            </Col>

            <hr
              style={{
                height: 1,
                width: "94%",
                backgroundColor: "rgb(173, 173, 173, 0.35)",
                border: 0,
              }}
            />
          </Row>

          <p style={{ fontSize: 16, fontWeight: "600" }}>Trip ends</p>
          <Row
            className=''
            style={{
              marginBottom: 30,
            }}
            gutter={50}
          >
            <Col sm={24} md={6}>
              <p
                style={{
                  fontSize: 10,
                  color: "#a4a4a4",
                  marginBottom: 0,
                  fontWeight: "500",
                }}
              >
                END DATE
              </p>
              <p>10/12/2020</p>
            </Col>
            <Col sm={24} md={6}>
              <p
                style={{
                  fontSize: 10,
                  color: "#a4a4a4",
                  marginBottom: 0,
                  fontWeight: "500",
                }}
              >
                END TIME
              </p>
              <p>5:30 pm</p>
            </Col>

            <Col sm={24} md={12}>
              <p
                style={{
                  fontSize: 10,
                  color: "#a4a4a4",
                  marginBottom: 0,
                  fontWeight: "500",
                }}
              >
                END LOCATION
              </p>
              <p style={{ marginBottom: 10 }}>Merentii HQ Texas</p>
              <p className='green--text'>Show on map</p>
            </Col>

            <hr
              style={{
                height: 1,
                width: "94%",
                backgroundColor: "rgb(173, 173, 173, 0.35)",
                border: 0,
              }}
            />
          </Row>

          <Row
            className=''
            style={{
              marginBottom: 30,
            }}
            gutter={50}
          >
            <Col sm={24} md={12}>
              <p style={{ fontSize: 16, fontWeight: "600" }}>Car</p>
              <p
                style={{
                  fontSize: 10,
                  color: "#a4a4a4",
                  marginBottom: 0,
                  fontWeight: "500",
                }}
              >
                MODEL
              </p>
              <p>Toyota Hybrid</p>
              <p
                style={{
                  fontSize: 10,
                  color: "#a4a4a4",
                  marginBottom: 0,
                  fontWeight: "500",
                  marginTop: 20,
                }}
              >
                ACCESSORIES
              </p>
              <p>VFL Recovery</p>
            </Col>
            <Col sm={24} md={12}>
              <p style={{ fontSize: 16, fontWeight: "600" }}>Extra charge</p>
              <p
                style={{
                  fontSize: 10,
                  color: "#a4a4a4",
                  marginBottom: 0,
                  fontWeight: "500",
                }}
              >
                ITEM <span style={{ float: "right" }}>CHARGE</span>
              </p>
              <p style={{ fontSize: 14, marginBottom: 5, color: "#5f5f5f" }}>
                VFL Licencing fee <span style={{ float: "right" }}>$25</span>{" "}
              </p>
              <p style={{ fontSize: 14, marginBottom: 5, color: "#5f5f5f" }}>
                VFL Licencing fee <span style={{ float: "right" }}>$25</span>{" "}
              </p>
              <p style={{ fontSize: 14, marginBottom: 5, color: "#5f5f5f" }}>
                VFL Licencing fee <span style={{ float: "right" }}>$25</span>{" "}
              </p>

              <hr
                style={{
                  height: 1,
                  width: "100%",
                  backgroundColor: "rgb(173, 173, 173, 0.75)",
                  border: 0,
                }}
              />
              <p
                style={{
                  fontSize: 14,
                  marginBottom: 5,
                  color: "#000",
                  fontWeight: "600",
                }}
              >
                Total amount <span style={{ float: "right" }}>$250</span>{" "}
              </p>
            </Col>

            <hr
              style={{
                height: 1,
                width: "94%",
                backgroundColor: "rgb(173, 173, 173, 0.35)",
                border: 0,
                marginTop: 15,
              }}
            />
          </Row>
          <div className='buttons' style={{ textAlign: "right" }}>
            <button className='green-btn' style={{ borderRadius: 40 }}>
              Download reciept
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
