import React, { useState } from "react";
import axios from 'axios';
import { Form , Button } from "react-bootstrap";
import './login.css'

function Login (){
    const [data, setData] = useState({});

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
                console.log("admin")
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
                    <div className="p-3">
                    <h5 className="h5 mb-2" style={{fontSize:"20px",fontFamily:"Roboto"}}>Welcome back to EM-Urgency</h5>
                      <div className="mb-4">
                        <h3 className="h4 font-weight-bold text-theme mb-4" style={{marginTop:"5px",fontSize:"39px",fontFamily:"Roboto"}}>Login</h3>
                      </div>
                      <form onSubmit = {handleSubmit}>
                        <div className="form-group">

                          <input
                            type="text"
                            name="username"
                            placeholder="  Username" onChange={handleChange}
                            // className="form-control"
                            // style={{border:"2px solid #032D23",boxSizing:"border-box",
                            // borderRadius:"6px"}}
                            className="userTextFeild"
                            
                            
                            
                          />
                        </div><br/>
                        <div className="form-group mb-4">
                          <input
                            type="password"
                            name="password"
                            placeholder="  Password" onChange={handleChange} 
                            // className="form-control"
                            className="password"
                            id="exampleInputPassword1"
                          />
                        </div>
                        <button type="submit" className="btn-theme">
                          Login
                        </button><br/><br/>
                        <p style={{color:"#FFC2B3", marginLeft:"43%"}}>OR</p>
                        <button type="submit" className="signIn">
                          Sign In
                        </button><br/>
  
                      </form>
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