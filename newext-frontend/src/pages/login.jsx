import React from "react";
import "../style/Login.css";
import logo from "../assets/logo.png";
import leftLogo from "../assets/support-team 1 (1).png";
import google from "../assets/Group 124.png";

const Login = () => {
  return (
    <div className="mainContainer">
      <div className="leftContainer">
        <div className="mainHeader">
          <img src={logo} alt=""></img>
        </div>
        <div className="textHeader">
          <p>Well-rounded news website with no paywalls</p>
        </div>
        <div className="textContent">
          <p>
            Lorem ipsum dolor sit amet consectetur. Ut nulla metus congue
            tincidunt nibh vulputate. Donec sapien gravida pharetra eu nunc
            donec.
          </p>
        </div>
        <div className="signin">
          <buttom className="signinButton" onclick="#">
            <img src={google} alt=""></img>
          </buttom>
        </div>
        <div className="signup">
          <p>
            Don’t have an account? <a href="#">Sign up</a>
          </p>
        </div>
      </div>

      <div className="rightContainer">
        <img src={leftLogo} alt=""></img>
      </div>
    </div>
  );
};

export default Login;
