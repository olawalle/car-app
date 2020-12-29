import { Button, Col, Input, Row, Select } from "antd";
import React, { useEffect, useState } from "react";
import "./DashboardHome.scss";
import { DatePicker } from "antd";
import ItemsCarousel from "react-items-carousel";
import calendar from "../../../../assets/images/calendar.svg";
import location from "../../../../assets/images/location.svg";
import clock from "../../../../assets/images/wall-clock.svg";
import car2 from "../../../../assets/images/car2.png";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import BookingModal from "./BookingModal";
import { Link } from "react-router-dom";

const { RangePicker, TimePicker } = DatePicker;

export default function DashboardHome() {
  const [open, setOpen] = useState(false);
  const percentage = 66;
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [carouselCount, setCarouselCount] = useState(2);

  useEffect(() => {
    if (window.innerWidth < 767) {
      setCarouselCount(1);
    }
  }, []);

  return (
    <>
      <Link to='/dashboard/account'>
        <a>
          <div className='complete'>
            <CircularProgressbar
              strokeWidth={12}
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                pathColor: "#24c599",
                textColor: "#b9b9b9",
              })}
            />

            <div style={{ paddingLeft: 15 }}>
              <p
                style={{
                  color: "#24c599",
                  fontSize: 18,
                  fontWeight: 600,
                  marginBottom: 0,
                  marginTop: 10,
                }}
              >
                Complete your profile
              </p>
              <p style={{ color: "#a4a4a4" }}>
                Please scan all the required documents in the app. make sure the
                details are legible
              </p>
            </div>
          </div>
        </a>
      </Link>

      <div className='dashhome'>
        <Row className='roww'>
          <Col sm={24} md={11} className='form'>
            <p className='page-heading'>Request a car</p>
            <div className='field'>
              <img
                src={location}
                style={{
                  marginLeft: 12,
                  position: "absolute",
                  top: 15,
                  left: 12,
                  zIndex: 3,
                }}
              />
              <Select
                bordered={false}
                style={{
                  width: "100%",
                  border: "1px solid #ededed",
                  backgroundColor: "#fcfcfc",
                  borderRadius: 40,
                  height: 50,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 1,
                }}
              ></Select>
            </div>
            <p
              className='green--text'
              style={{ marginTop: -15, marginBottom: 20 }}
            >
              + Add return location
            </p>

            <div className='field'>
              <Input
                prefix={<img src={calendar} style={{ marginLeft: 12 }} />}
                bordered={false}
                style={{
                  width: "100%",
                  border: "1px solid #ededed",
                  backgroundColor: "#fcfcfc",
                  borderRadius: 40,
                  height: 50,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 1,
                }}
              />
              <RangePicker
                style={{
                  opacity: 0,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 6,
                  width: "100%",
                  height: 50,
                }}
              />
            </div>

            <div className='field'>
              <div
                className='dark-bg'
                style={{
                  width: "100%",
                  border: "1px solid #ededed",
                  backgroundColor: "#fcfcfc",
                  borderRadius: 40,
                  height: 50,
                }}
              >
                <div className='half'>
                  <img src={clock} />
                  <TimePicker
                    style={{
                      opacity: 0,
                      width: "80%",
                    }}
                  />
                </div>
                <div className='half'>
                  <img src={clock} />
                  <TimePicker
                    style={{
                      opacity: 0,
                      width: "80%",
                    }}
                  />
                </div>
              </div>
            </div>
            <Button
              className='green-btn'
              style={{ width: "100%", borderRadius: 30 }}
            >
              Search for car
            </Button>
            <p className='caveat' style={{ color: "#a4a4a4", marginTop: 15 }}>
              Please scan all the required documents in the app. make sure the
              details are legible
            </p>
          </Col>
          <Col sm={24} md={13} className='results'>
            <p className='res'>SEARCH RESULTS</p>
            <ItemsCarousel
              requestToChangeActive={setActiveItemIndex}
              activeItemIndex={activeItemIndex}
              numberOfCards={carouselCount}
              gutter={20}
              leftChevron={
                <div className='arrow' style={{ marginLeft: 40 }}>
                  <LeftOutlined />
                </div>
              }
              rightChevron={
                <div className='arrow' style={{ marginRight: 40 }}>
                  <RightOutlined />
                </div>
              }
              outsideChevron
              chevronWidth={40}
            >
              {[1, 2, 3, 4, 5, 6].map((itm) => (
                <div>
                  <div className='slide'>
                    <p
                      style={{
                        fontSize: 17,
                        fontWeight: "600",
                        marginBottom: 0,
                      }}
                    >
                      Bmw 2021
                    </p>
                    <p style={{ fontSize: 18, fontWeight: 300 }}>
                      70,000 miles
                    </p>
                    <img src={car2} alt='' style={{ width: "70%" }} />

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        padding: "15px 30px",
                      }}
                    >
                      <div
                        style={{
                          width: "50%",
                          fontWeight: "300",
                          fontSize: 12,
                          color: "#b9b9b9",
                        }}
                      >
                        8 Seats
                      </div>
                      <div
                        style={{
                          width: "50%",
                          fontWeight: "300",
                          fontSize: 12,
                          color: "#b9b9b9",
                        }}
                      >
                        8 Seats
                      </div>
                      <div
                        style={{
                          width: "50%",
                          fontWeight: "300",
                          fontSize: 12,
                          color: "#b9b9b9",
                        }}
                      >
                        8 Seats
                      </div>
                      <div
                        style={{
                          width: "50%",
                          fontWeight: "300",
                          fontSize: 12,
                          color: "#b9b9b9",
                        }}
                      >
                        8 Seats
                      </div>
                    </div>
                    <button className='book-btn' onClick={() => setOpen(true)}>
                      Book now
                    </button>
                  </div>
                </div>
              ))}
            </ItemsCarousel>
          </Col>
        </Row>

        <BookingModal open={open} setOpen={setOpen} />
      </div>
    </>
  );
}
