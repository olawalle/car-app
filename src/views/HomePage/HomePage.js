import React, { useEffect, useRef, useState } from "react";
import "./HomePage.scss";

import logoIcon from "../../assets/images/logoWhite.svg";
import logoBlack from "../../assets/images/logoBlack.svg";
import circles from "../../assets/images/circles.svg";
import calendar from "../../assets/images/calendar.svg";
import location from "../../assets/images/location.svg";
import search from "../../assets/images/search.svg";
import woman from "../../assets/images/woman4.png";
import fuelCar from "../../assets/images/fuel-car.png";
import payment from "../../assets/images/payment.png";
import keys from "../../assets/images/keys.png";
import car2 from "../../assets/images/car2.png";

import bg1 from "../../assets/images/bg1.png";
import bg2 from "../../assets/images/bg2.png";
import bg3 from "../../assets/images/bg3.png";
import bg4 from "../../assets/images/bg4.png";

import { Button, Col, DatePicker, Input, Row, Select } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import ItemsCarousel from "react-items-carousel";

export default function HomePage() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [activeItemIndex_, setActiveItemIndex_] = useState(0);
  const [activeItemIndexBtm, setActiveItemIndexBtm] = useState(0);
  const chevronWidth = 40;
  const bgs = [
    {
      img: bg1,
      city: "Lagos",
    },
    {
      img: bg2,
      city: "London",
    },
    {
      img: bg3,
      city: "Toronto",
    },
    {
      img: bg4,
      city: "Munich",
    },
    {
      img: bg3,
      city: "Washington",
    },
    {
      img: bg2,
      city: "Birmingham",
    },
  ];
  return (
    <div className='home-page'>
      <div className='hero container_'>
        <nav>
          <img src={logoIcon} alt='' />

          <div className='actions'>
            <span className='login'>Login</span>
            <button className='green-ghost-btn'>Create Account</button>
          </div>
        </nav>
        <h1 className='hero-text'>
          Quality <span>vehicles</span> for real people
        </h1>

        <h5>
          We’ve safely automated the car rental process at the lowest costs, so
          you can enjoy the experience of a high-tech
        </h5>
      </div>

      <div className='container_ circles'>
        <div className='timing'>
          <div className='inps'>
            <div className='inp'>
              <p className='label'>Where</p>
              <img src={location} alt='' />{" "}
              <Select
                placeholder='Select your location'
                style={{ width: "90%" }}
                bordered={false}
              ></Select>
            </div>
            <div className='inp'>
              <p className='label'>Picker date/time</p>
              <img src={calendar} alt='' />{" "}
              <DatePicker
                style={{ width: "90%" }}
                suffixIcon={null}
                bordered={false}
                showTime={true}
              />
            </div>
            <div className='inp'>
              <p className='label'>Return date/time</p>
              <img src={calendar} alt='' />{" "}
              <DatePicker
                style={{ width: "90%" }}
                suffixIcon={null}
                bordered={false}
                showTime={true}
              />
            </div>
          </div>
          <img src={search} alt='' className='search' />
        </div>
        {/* <img src={circles} alt='' className={"circle"} /> */}
      </div>

      <div className='container_ features'>
        <p className='features-heading'>Awsome Features</p>
        <p className='features-subheading'>Using technology to keep you safe</p>
        <Row gutter={30}>
          <Col md={8} sm={24}>
            <div className='feature-card'>
              <div className='img'>
                <img src={woman} alt='' />
              </div>
              <p className='card-title'>Simple bookin</p>
              <p className='card-text'>
                We've safely automated the car rental process at the lowest
                costs, so you can enjoy the experience of a high tech
              </p>
            </div>
          </Col>
          <Col md={8} sm={24}>
            <div className='feature-card'>
              <div className='img'>
                <img src={fuelCar} alt='' />
              </div>
              <p className='card-title'>Simple bookin</p>
              <p className='card-text'>
                We've safely automated the car rental process at the lowest
                costs, so you can enjoy the experience of a high tech
              </p>
            </div>
          </Col>
          <Col md={8} sm={24}>
            <div className='feature-card'>
              <div className='img'>
                <img src={payment} alt='' />
              </div>
              <p className='card-title'>Simple bookin</p>
              <p className='card-text'>
                We've safely automated the car rental process at the lowest
                costs, so you can enjoy the experience of a high tech
              </p>
            </div>
          </Col>
        </Row>
      </div>

      <div className='container_ grey'>
        <Row>
          <Col sm={24} md={12}>
            <div className='texts'>
              <p className='features-heading'>Awsome Features</p>
              <p className='features-subheading'>
                Using technology to keep you safe
              </p>
              <p className='story'>
                We’ve safely automated the car rental process at the lowest
                costs, so you can enjoy the experience of a high-tech vehicle at
                a lower price. We’ve safely automated the car rental process at
                the lowest costs, so you can enjoy the experience of a high-tech
                vehicle at a lower price.
              </p>
            </div>
          </Col>
          <Col sm={24} md={12}>
            <div className='img'>
              <img src={keys} alt='' />
            </div>
          </Col>
        </Row>
      </div>

      <div className='container_ slides-wrap'>
        <p className='features-heading'>Awsome Features</p>
        <p className='features-subheading'>Top vehicles for you</p>
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={3}
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
          chevronWidth={chevronWidth}
        >
          {[1, 2, 3, 4, 5, 6].map((itm) => (
            <div>
              <div className='slide'>
                <img src={car2} alt='' style={{ width: "50%" }} />
                <p style={{ fontSize: 16, fontWeight: "600", marginBottom: 0 }}>
                  Bmw 2021
                </p>
                <p>70,000 miles</p>
              </div>
            </div>
          ))}
        </ItemsCarousel>
      </div>

      <div className='container_ slides-wrap'>
        <p className='features-heading'>Awsome Features</p>
        <p className='features-subheading'>Search by location</p>
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex_}
          activeItemIndex={activeItemIndex_}
          numberOfCards={4}
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
          chevronWidth={chevronWidth}
        >
          {bgs.map((bg) => (
            <div>
              <div
                className='slide'
                style={{
                  backgroundImage: `url(${bg.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                }}
              >
                <p
                  style={{
                    color: "#fff",
                    position: "absolute",
                    bottom: 0,
                    left: 20,
                  }}
                >
                  {bg.city}
                </p>
              </div>
            </div>
          ))}
        </ItemsCarousel>
      </div>

      <div className='container_ ' style={{ paddingRight: 0, marginTop: 100 }}>
        <p className='features-heading'>Testimonials</p>
        <p className='features-subheading'>What Our Customers Are Saying</p>

        <div className='testimonials'>
          {[1, 2, 3, 4, 5].map((itm) => {
            return (
              <div className='testimonial'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                blanditiis esse laudantium fuga, molestiae earum porro
                aspernatur. Nisi, mollitia et provident sit vitae accusamus quas
                voluptas eius voluptatum ipsa magnam?
              </div>
            );
          })}
        </div>
      </div>

      <div className='container_'>
        <div className='newsletter'>
          <h2>Subscribe to our newsletter and stay updated</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            necessitatibus illum, fugiat alias ea, facere ullam ipsam repellat.
          </p>
          <div>
            <Input
              style={{
                width: 400,
                height: 50,
                borderRadius: 12,
                marginRight: 10,
              }}
            />{" "}
            <Button className='green-btn' style={{ height: 50 }}>
              Submit
            </Button>
          </div>
        </div>
      </div>
      <footer className='container_'>
        <Row>
          <Col sm={24} md={12}>
            <img src={logoBlack} alt='' className='footer-logo' />
            <p className='footer-desc'>
              Etiam convallis elementum sapien, a aliquam turpis aliquam vitae.
              Praesent sollicitudin felis vel mi facilisis posuere. Nulla
              ultrices facilisis justo, non varius nisl semper vel. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Phasellus at
              ante mattis, condimentum velit et, dignissim nunc. Integer quis
              tincidunt purus. Duis dignissim mauris vel elit commodo, eu
              hendrerit leo ultrices. Nulla vehicula vestibulum purus at rutrum.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Curabitur dignissim massa nec
              libero scelerisque rutrum. Curabitur ac purus id elit hendrerit
              lacinia. Nullam sit amet sem efficitur, porta diam in, convallis
              tortor.
            </p>
          </Col>
          <Col sm={24} md={12}>
            <Row>
              <Col sm={24} md={8}>
                <p className='links-title'>Company</p>
                <ul>
                  <li>My Account</li>
                  <li>Contact</li>
                  <li>Company</li>
                  <li>Login</li>
                  <li>Register</li>
                </ul>
              </Col>
              <Col sm={24} md={8}>
                <p className='links-title'>Location</p>
                <ul>
                  <li>Paris</li>
                  <li>Berlin</li>
                  <li>Barcelona</li>
                  <li>Milan</li>
                  <li>London</li>
                  <li>San Francisco </li>
                  <li>Los Angeles</li>
                </ul>
              </Col>
              <Col sm={24} md={8}>
                <p className='links-title'>Quick Links</p>
                <ul>
                  <li>Privacy Policy</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </footer>
    </div>
  );
}