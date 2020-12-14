import React, { useState } from "react";
import logo from "../../assets/images/blackLogo.svg";
import "./Login.scss";
import FloatingLabelInput from "react-floating-label-input";
import { Button } from "antd";
import { Link } from "react-router-dom";

export default function Login() {
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });
  return (
    <div className='login'>
      <div className='half fields'>
        <img src={logo} alt='' />

        <h1>Login</h1>
        <p>We just need a bit of information about you</p>

        <FloatingLabelInput
          id='example-3'
          label='Email address'
          onChange={(e) =>
            setloginData({ ...loginData, email: e.target.value })
          }
          value={loginData.email}
        />

        <FloatingLabelInput
          id='example-3'
          label='Password'
          onChange={(e) =>
            setloginData({ ...loginData, email: e.target.value })
          }
          value={loginData.email}
          type='password'
        />
        <p className='forgot'>Forogt password?</p>

        <Button className='green-btn'>Log in</Button>

        <p className='idont'>
          I dont have an account yet?{" "}
          <Link to='/signup'>
            <span className='green--text'>Sign up</span>
          </Link>
        </p>
      </div>
      <div className='half woman'></div>
    </div>
  );
}
