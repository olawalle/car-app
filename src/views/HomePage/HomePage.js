import React, { useEffect, useRef, useState } from "react";
import "./HomePage.scss";

import logoIcon from "../../assets/images/logoWhite.svg";
import logoBlack from "../../assets/images/logoBlack.svg";
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
import Avatar from "antd/lib/avatar/avatar";
import { Link, useHistory } from "react-router-dom";
import Menuicon from "../../components/MenuIcon/Menuicon";
import SearchForm from "../../components/SearchForm/SearchForm";
import circles from "../../assets/images/circles.svg";

export default function HomePage() {
  let history = useHistory(); 
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

  const [firstCarouselCount, setfirstCarouselCount] = useState(3);
  const [secondCarouselCount, setsecondCarouselCount] = useState(4);

  useEffect(() => {
    if (window.innerWidth < 767) {
      setfirstCarouselCount(1.2);
      setsecondCarouselCount(1.2);
    }
  }, []);

  console.log(history)

  return (
    <div className="home-page">
      <div className="hero container_">
        <nav>
          <img src={logoIcon} alt="" />
          <div className="actions">
            <Link to="/login">
              <span className="login">Sign in</span>
            </Link>
            <button
              className="green-ghost-btn"
              onClick={() => history.push("/signup")}
            >
              Create Account
            </button>
          </div>
        </nav>
        <h1 className="hero-text">
          Quality <span>vehicles</span> for real people
        </h1>

        <h5>
          We’ve safely automated the car rental process at the lowest costs, so
          you can enjoy the experience of a high-tech
        </h5>

        <button className="green-ghost-btn mobile">Create Account</button>
      </div>

      <div className="container_ circles">
        <SearchForm />
        <img src={circles} alt="" className={"circle"} />
      </div>

      <div className="container_ features">
        <p className="features-subheading">
          Using technology to keep you moving
        </p>
        <Row gutter={30}>
          <Col md={8} sm={24}>
            <div className="feature-card">
              <div className="img">
                <img src={woman} alt="" />
              </div>
              <p className="card-title">Simple bookin</p>
              <p className="card-text">
                We've safely automated the car rental process at the lowest
                costs, so you can enjoy the experience of a high tech
              </p>
            </div>
          </Col>
          <Col md={8} sm={24}>
            <div className="feature-card">
              <div className="img">
                <img src={fuelCar} alt="" />
              </div>
              <p className="card-title">Simple bookin</p>
              <p className="card-text">
                We've safely automated the car rental process at the lowest
                costs, so you can enjoy the experience of a high tech
              </p>
            </div>
          </Col>
          <Col md={8} sm={24}>
            <div className="feature-card">
              <div className="img">
                <img src={payment} alt="" />
              </div>
              <p className="card-title">Simple bookin</p>
              <p className="card-text">
                We've safely automated the car rental process at the lowest
                costs, so you can enjoy the experience of a high tech
              </p>
            </div>
          </Col>
        </Row>
      </div>

      <div className="container_ grey">
        <Row>
          <Col sm={24} md={12}>
            <div className="texts">
              <p className="features-heading" style={{ marginBottom: -50 }}>
                Awsome Features
              </p>
              <p className="features-subheading" style={{ marginBottom: 20 }}>
                Using technology to keep you safe
              </p>
              <p className="story">
                We’ve safely automated the car rental process at the lowest
                costs, so you can enjoy the experience of a high-tech vehicle at
                a lower price. We’ve safely automated the car rental process at
                the lowest costs, so you can enjoy the experience of a high-tech
                vehicle at a lower price.
              </p>
            </div>
          </Col>
          <Col sm={24} md={12}>
            <div className="img">
              <img src={keys} alt="" />
            </div>
          </Col>
        </Row>
      </div>

      <div className="container_ slides-wrap">
        <p className="features-heading">Awsome Features</p>
        <p className="features-subheading">Top vehicles for you</p>
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={firstCarouselCount}
          gutter={20}
          leftChevron={
            <div className="arrow" style={{ marginLeft: 40 }}>
              <LeftOutlined />
            </div>
          }
          rightChevron={
            <div className="arrow" style={{ marginRight: 40 }}>
              <RightOutlined />
            </div>
          }
          outsideChevron
          chevronWidth={chevronWidth}
        >
          {[1, 2, 3, 4, 5, 6].map((itm) => (
            <div>
              <div className="slide">
                <img src={car2} alt="" style={{ width: "50%" }} />
                <p style={{ fontSize: 18, fontWeight: "600", marginBottom: 0 }}>
                  Bmw 2021
                </p>
                <p style={{ fontSize: 18 }}>70,000 miles</p>
              </div>
            </div>
          ))}
        </ItemsCarousel>
      </div>

      <div className="container_ slides-wrap">
        <p className="features-subheading">Search by location</p>
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex_}
          activeItemIndex={activeItemIndex_}
          numberOfCards={secondCarouselCount}
          gutter={20}
          leftChevron={null}
          rightChevron={null}
          outsideChevron
          chevronWidth={chevronWidth}
        >
          {bgs.map((bg) => (
            <div>
              <div
                className="slide"
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
                    fontSize: 18,
                    fontWeight: "600",
                  }}
                >
                  {bg.city}
                </p>
              </div>
            </div>
          ))}
        </ItemsCarousel>
      </div>

      <div className="container_ " style={{ marginTop: 100 }}>
        <p className="features-heading" style={{ marginBottom: -60 }}>
          Testimonials
        </p>
        <p className="features-subheading">What Our Customers Are Saying</p>

        <div className="testimonials slides-wrap">
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={firstCarouselCount}
            gutter={20}
            leftChevron={
              <div className="arrow" style={{ marginLeft: 40 }}>
                <LeftOutlined />
              </div>
            }
            rightChevron={
              <div className="arrow" style={{ marginRight: 40 }}>
                <RightOutlined />
              </div>
            }
            outsideChevron
            chevronWidth={chevronWidth}
          >
            {[1, 2, 3, 4, 5].map((itm) => {
              return (
                <div className="testimonial">
                  <p className="testimonial-title">
                    Help us improve our productivity
                  </p>
                  <p className="testimonial-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptate obcaecati temporibus, vero aliquid, eveniet, rem
                  </p>
                  <div className="by">
                    <Avatar
                      style={{ width: 40, height: 40 }}
                      src={`https://randomuser.me/api/portraits/women/4${itm}.jpg`}
                    />
                    <div className="details">
                      <p className="name">James moore</p>
                      <p className="user-details">lorem ipsum is a boy</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </ItemsCarousel>
        </div>
      </div>

      <div className="container_">
        <div className="newsletter">
          <h2>Subscribe to our newsletter and stay updated</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            necessitatibus illum, fugiat alias ea, facere ullam ipsam repellat.
          </p>
          <div>
            <Input />{" "}
            <Button className="green-btn" style={{ height: 50 }}>
              Submit
            </Button>
          </div>
        </div>
      </div>
      <footer className="container_">
        <Row>
          <Col sm={24} md={12} xs={24}>
            <img src={logoBlack} alt="" className="footer-logo" />
            <p className="footer-desc">
              Etiam convallis elementum sapien, a aliquam turpis aliquam vitae.
              Praesent sollicitudin felis vel mi facilisis posuere. Nulla
              ultrices facilisis justo, non varius nisl semper vel. Interdum et
            </p>
          </Col>
          <Col sm={24} md={12} xs={24}>
            <div style={{ width: "100%" }}>
              <Row>
                <Col sm={24} xs={24} md={8}>
                  <p className="links-title">Company</p>
                  <ul>
                    <li>My Account</li>
                    <li>Contact</li>
                    <li>Company</li>
                    <li>Login</li>
                    <li>Register</li>
                  </ul>
                </Col>
                <Col sm={24} xs={24} md={8}>
                  <p className="links-title">Location</p>
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
                <Col sm={24} xs={24} md={8}>
                  <p className="links-title">Quick Links</p>
                  <ul>
                    <li>Privacy Policy</li>
                  </ul>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </footer>
    </div>
  );
}
