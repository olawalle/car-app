import React, { useState } from "react";
import logo from "../../assets/images/blackLogo.svg";
import logo_ from "../../assets/images/logoIcon.svg";
import "./Login.scss";
import FloatingLabelInput from "react-floating-label-input";
import { Button } from "antd";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { UseUserContext } from "../../contexts/User";

export default withRouter(function Login({ history }) {
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });

  const {setUserData} = UseUserContext();

    const LoginCall = () => {
      axios.post("/login", loginData).then((res) => {
        const response = res.data;
        setUserData({token: response.token, user: response.user})
        history.push("/dashboard");
      });
    };

  return (
    <div className="login">
      <div className="half fields">
        <div onClick={() => history.push("/")}>
          <img src={logo} alt="" className="web-logo" />
          <img src={logo_} alt="" className="mobile-logo" />
        </div>

        <h1>Login</h1>
        <p>We just need a bit of information about you</p>

        <FloatingLabelInput
          id="example-3"
          label="Email address"
          onChange={(e) =>
            setloginData({ ...loginData, email: e.target.value })
          }
          value={loginData.email}
        />

        <FloatingLabelInput
          id="example-3"
          label="Password"
          onChange={(e) =>
            setloginData({ ...loginData, password: e.target.value })
          }
          value={loginData.password}
          type="password"
        />
        <p className="forgot">Forogt password?</p>

        <Button className="green-btn" onClick={LoginCall}>
          Log in
        </Button>

        <p className="idont">
          I dont have an account yet?{" "}
          <Link to="/signup">
            <span className="green--text">Sign up</span>
          </Link>
        </p>
      </div>
      <div className="half woman"></div>
    </div>
  );
});
