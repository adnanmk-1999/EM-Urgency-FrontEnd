import React, { useState } from "react";
import axios from 'axios';
import { Form , Button, Container, Row, Col } from "react-bootstrap";
import './login.css'
import { useNavigate } from "react-router-dom";

import MicrosoftLogo from '../../images/microsoftLogo.png'


function Login (){
    const [data, setData] = useState({});
    const navigate= useNavigate()
    function handleChange(event){
      const name = event.target.name;
      const value = event.target.value;
      setData(values => ({...values, [name] : value}))
    };

    function handleSubmit(event){
      event.preventDefault();

      axios.post(`http://localhost:4010/users/login`, data)
          .then(response => {
              let role = response.data.roles;
              const Role="Role:ADMIN";
              console.log(role);
              localStorage.setItem('accessToken', response.data.accessToken)
              localStorage.setItem('refreshToken', response.data.refreshToken)
              localStorage.setItem('roles', response.data.roles)
              localStorage.setItem('username', response.data.username)
              localStorage.setItem('email', response.data.email)
              if(role.includes(Role)){
                // console.log("admin")
                navigate('/admindashboard')
                
              }else{
                console.log("user")
              }
          })
          .catch(error =>{
              localStorage.clear();
              if(error.response){
                  alert(error.response.data.message)  //=> response payload
              }
          })
  };

// return(
//     <>
//     <br />
//     <h4>Welcome Back to EM-Urgency</h4>
//     <h1>Login</h1>
//     {/* <div>
//     <Form className="loginForm" onSubmit = {handleSubmit}>
//       <Form.Group className="mb-3" onChange={handleChange}  >
//         <Form.Control type="text" placeholder="Username" name="username" />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword" onChange={handleChange} >
//         <Form.Control type="password" placeholder="Password" name="password" />
//       </Form.Group>

//       <Button variant="primary" type="submit" style={{ width: "100%" }}>
//         Login
//       </Button><br/><br/>
//       <p><center>OR</center></p>
//       <Button type="submit" style={{ width: "100%",backgroundColor:"white",color:"black"}}>
//         Sign In
//       </Button>
//     </Form>
//     </div> */}

//     <Container>
//       <Row>
//         <Col sm={6}>
//         <Form className="loginForm" onSubmit = {handleSubmit}>
//       <Form.Group className="mb-3" onChange={handleChange}  >
//         <Form.Control type="text" placeholder="Username" name="username" />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword" onChange={handleChange} >
//         <Form.Control type="password" placeholder="Password" name="password" />
//       </Form.Group>

//       <Button variant="primary" type="submit" style={{ width: "100%" }}>
//         Login
//       </Button><br/><br/>
//       <p><center>OR</center></p>
//       <Button type="submit" style={{ width: "100%",backgroundColor:"white",color:"black"}}>
//         Sign In
//       </Button>
//     </Form>
//         </Col>
//         <Col sm={6}>
//           <img src = {LoginImage} alt = "loginImage"></img>
//         </Col>
//       </Row>
//     </Container>
// </>
// )
// }
return(
<div id="main-wrapper" className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="card border-0">
              <div className="card-body p-0">
                <div className="row no-gutters">
                  <div className="col-lg-6">
                    <div className="p-4">
                    <h3 className="h5 mb-2" style={{fontSize:"30px",fontFamily:"Roboto"}}>Welcome back to EM-Urgency</h3><br/>
                      <div className="mb-4">
                        <h1 className="h4 font-weight-bold text-theme mb-4" style={{marginTop:"5px",fontSize:"60px",fontFamily:"Roboto", color : "#2C2424"}}>Login</h1><br/>
                      </div>
                      <form onSubmit = {handleSubmit}>
                        <div className="form-group">

                          <input
                            type="text"
                            name="username"
                            placeholder="Username" onChange={handleChange}
                            // className="form-control"
                            // style={{border:"2px solid #032D23",boxSizing:"border-box",
                            // borderRadius:"6px"}}
                            className="userTextFeild"
                              
                          />
                        </div>
                        <br/>
                       
                        <div className="form-group">
                          <input
                            type="password"
                            name="password"
                            placeholder="Password" onChange={handleChange} 
                            // className="form-control"
                            className="password"
                            id="exampleInputPassword1"
                          />
                          </div>
                          <br/>

                          <div className="form-group">

                          </div>
                           <button type="submit" className="btntheme">
                          Login
                        </button><br/><br/>
                        <p style={{color:"#E31836", textAlign: 'center'}}>OR</p>
                        <button type="submit" className="signIn">
                          <img className="microsoftLogo" src = {MicrosoftLogo}></img> Sign In
                        </button><br/>

                       
  
                      </form>
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
      </div>
      



        );
    };
    
 

export default Login;