import React, { useState } from "react";
import logo from "../../assets/images/blackLogo.svg";
import logo_ from "../../assets/images/logoIcon.svg";
import "./Login.scss";
import FloatingLabelInput from "react-floating-label-input";
import { Button, Col, Row } from "antd";
import { Link, withRouter } from "react-router-dom";
import Modal from "antd/lib/modal/Modal";
import PinInput from "react-pin-input";

export default withRouter(function Signup({ history }) {
  const [regData, setregData] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    phone: "",
    code: "",
  });
  const [pinModal, setpinModal] = useState(false);
  return (
    <div className='login'>
      <div className='half fields'>
        <div onClick={() => history.push("/")}>
          <img src={logo} alt='' className='web-logo' />
          <img src={logo_} alt='' className='mobile-logo' />
        </div>

        <h1>Create an account</h1>
        <p>We just need a bit of information about you</p>

        <Row gutter={20}>
          <Col sm={24} xs={24} md={12}>
            <FloatingLabelInput
              id='example-3'
              label='First name'
              onChange={(e) =>
                setregData({ ...regData, firstname: e.target.value })
              }
              value={regData.firstname}
            />
          </Col>
          <Col sm={24} xs={24} md={12}>
            <FloatingLabelInput
              id='example-3'
              label='Last name'
              onChange={(e) =>
                setregData({ ...regData, lastname: e.target.value })
              }
              value={regData.lastname}
            />
          </Col>

          <Col sm={24} xs={24} md={6}>
            <FloatingLabelInput
              id='example-3'
              label=''
              onChange={(e) => setregData({ ...regData, code: e.target.value })}
              value={regData.code}
            />
          </Col>

          <Col sm={24} xs={24} md={18}>
            <FloatingLabelInput
              id='example-3'
              label='Phone no'
              onChange={(e) =>
                setregData({ ...regData, phone: e.target.value })
              }
              value={regData.phone}
            />
          </Col>

          <Col sm={24} xs={24} md={24}>
            <FloatingLabelInput
              id='example-3'
              label='Email address'
              onChange={(e) =>
                setregData({ ...regData, email: e.target.value })
              }
              value={regData.email}
            />
          </Col>

          <Col sm={24} xs={24} md={24}>
            <FloatingLabelInput
              id='example-3'
              label='Password'
              onChange={(e) =>
                setregData({ ...regData, password: e.target.value })
              }
              value={regData.password}
              type='password'
            />
          </Col>
        </Row>

        <Button className='green-btn' onClick={() => setpinModal(true)}>
          Create an account
        </Button>

        <Modal
          visible={pinModal}
          header={null}
          footer={null}
          onCancel={() => setpinModal(false)}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
            className='modal-form'
          >
            <p style={{ textAlign: "center" }}>
              Enter the 4 digit code sent to your phone number to verify your
              account
            </p>
            <PinInput
              length={4}
              initialValue=''
              secret
              onChange={(value, index) => {}}
              type='numeric'
              inputMode='number'
              style={{ padding: "10px" }}
              inputStyle={{
                borderColor: "#eee",
                margin: "0 6px",
                borderRadius: 5,
                height: 60,
              }}
              inputFocusStyle={{ borderColor: "#24c599" }}
              onComplete={(value, index) => {}}
              autoSelect={true}
            />
            <Button
              className='green-btn'
              style={{
                width: "100%",
                height: 50,
                marginBottom: 12,
                marginTop: 10,
              }}
            >
              Verify Phone Number
            </Button>
            <span>Resend code</span>
          </div>
        </Modal>

        <p className='idont'>
          Have an account already?{" "}
          <Link to='/login'>
            <span className='green--text'>Log in</span>
          </Link>
        </p>
      </div>
      <div className='half woman_'></div>
    </div>
  );
});
