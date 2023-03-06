import React, { useState } from "react";
import "../style/Login.css";
import logo from "../assets/logo.png";
import leftLogo from "../assets/support-team 1 (1).png";
import google from "../assets/Group 124.png";
// import { useGoogleLogin } from "@react-oauth/google";
// import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    badgeImg: "",
  });

  // google client id = 454265286170-g78tl5j8fpv9j6dbel5n1cu4a4cv2jqn.apps.googleusercontent.com
  // google client secreat = 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

  const signup = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );
        user.fname = response.data.given_name;
        user.lname = response.data.family_name;
        user.email = response.data.email;
        user.password = response.data.sub;
        user.badgeImg = response.data.picture;

        try {
          const resp = await axios.post("http://localhost:9876/signup", user, {
            withCredentials: true,
          });
          if (resp.data.user) {
            console.log(resp.data.user);
            setUser({
              fname: "",
              lname: "",
              email: "",
              password: "",
              badgeImg: "",
            });
          }
        } catch (error) {
          alert(error);
        }
      } catch (error) {
        alert(error);
      }
    },
  });

  const signin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );
        user.email = response.data.email;
        user.password = response.data.sub;

        try {
          const resp = await axios.post("http://localhost:9876/signin", user, {
            withCredentials: true,
          });
          if (resp.data.user) {
            console.log("Signin Successfull ", resp.data.fname);
          } else {
            alert("Invalid credentials");
          }
        } catch (error) {
          alert(error);
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

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
          <button className="signinButton" onClick={signin}>
            <img src={google} alt=""></img>
          </button>
        </div>
        <div className="signup">
          <p>
            Don’t have an account? <button onClick={signup}>Sign up</button>
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
