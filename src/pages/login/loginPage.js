import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import MicrosoftLogo from '../../images/microsoftLogo.png'
import UserContext from "../../context/userContext";

import GoogleLogin from 'react-google-login';


import './login.css';

function Login() {

  // localStorage.clear()

  const [data, setData] = useState({});

  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setData(values => ({ ...values, [name]: value }))
  };

  function handleSubmit(event) {
    event.preventDefault();

    axios.post(`http://localhost:4010/users/login`, data)
      .then(response => {
        let role = response.data.roles;
        const Role = "Role:ADMIN";
        userContext.login(response.data.accessToken, response.data.roles, response.data.username, response.data.email, response.data.refreshToken);
        if (role.includes(Role)) {
          navigate('/admindashboard')

        } else {
          navigate('/userdashboard')
        }
      })
      .catch(error => {
        localStorage.clear();
        if (error.response) {
          alert(error.response.data.message)  //=> response payload
        }
      })
  };



  const handleFailure = (result) => {
    alert(result);
  };

  // const handleLogin = async (googleData) => {
  //   console.log(googleData)
  //   const res = await fetch('/users/glogin', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       token: googleData.tokenId,
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });

  //   const data = await res.json();
  //   localStorage.setItem('email', data.email);
  //   localStorage.setItem('roles', data.role);
  //   localStorage.setItem('accessToken', data.accessToken);
  //   localStorage.setItem('refreshToken', data.refreshToken);
  //   localStorage.setItem('username', data.Username);


  // };

    const handleLogin = (googleData) => {
    console.log(googleData.tokenId)
    axios.post(`http://localhost:4010/users/glogin`, {token : googleData.tokenId})
    .then((data) => {
      userContext.login(data.data.accessToken, data.data.role, data.data.Username, data.data.email, data.data.refreshToken);
    // localStorage.setItem('email', data.data.email);
    // localStorage.setItem('roles', data.data.role);
    // localStorage.setItem('accessToken', data.data.accessToken);
    // localStorage.setItem('refreshToken', data.data.refreshToken);
    // localStorage.setItem('username', data.data.Username);
    navigate('/userdashboard')
    })
    .catch(error => {
      localStorage.clear();
      if (error.response) {
        alert("You are not an employee of the company !")  //=> response payload
      }
    })
  }

  return (
    <div id="main-wrapper" className="container">
      <div className="row justify-content-center">
        <div className="col-xl-12">
          <div className="card border-0">
            <div className="card-body p-0">
              <div className="row no-gutters">
                <div className="col-lg-6">
                  <div className="p-4">
                    <h3 className="h5 mb-2" style={{ fontSize: "30px", fontFamily: "Roboto" }}>Welcome back to EM-Urgency</h3><br />
                    <div className="mb-4">
                      <h1 className="h4 font-weight-bold text-theme mb-4" style={{ marginTop: "5px", fontSize: "60px", fontFamily: "Roboto", color: "#2C2424" }}>Login</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <input
                          type="text"
                          name="username"
                          placeholder="Username" onChange={handleChange}
                          className="userTextFeild"
                        />
                      </div>
                      <br />

                      <div className="form-group">
                        <input
                          type="password"
                          name="password"
                          placeholder="Password" onChange={handleChange}
                          className="password"
                          id="exampleInputPassword1"
                        />
                      </div>
                      <br />
                      <button type="submit" className="btntheme">
                        Login
                      </button><br /><br />
                      <p style={{ color: "#E31836", textAlign: 'center' }}>OR</p>
                      <button type="submit" className="signIn">
                        <img className="microsoftLogo" src={MicrosoftLogo} alt="logo"></img> Sign In
                      </button><br />

                    </form>
                    <GoogleLogin
                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                        buttonText="Log in with Google"
                        onSuccess={handleLogin}
                        onFailure={handleFailure}
                        cookiePolicy={'single_host_origin'}
                      ></GoogleLogin>
                  </div>
                </div>
                <div className="col-lg-6 d-none d-lg-inline-block">
                  <div className="account-block rounded-right">
                    <div className="overlay rounded-right" />
                    <div className="account-testimonial">
                      <h4 className="text-white mb-1">
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;