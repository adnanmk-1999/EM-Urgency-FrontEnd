import React, { useState } from "react";
import axios from 'axios';
import { Form , Button } from "react-bootstrap";

function Login (){
    const [data, setData] = useState({});

    function handleChange(event){
      const name = event.target.name;
      const value = event.target.value;
      setData(values => ({...values, [name] : value}))
    };

    function handleSubmit(event){
      event.preventDefault();

      axios.post(`http://localhost:4000/users/login`, data)
          .then(response => { 
              localStorage.setItem('accessToken', response.data.accessToken)
              localStorage.setItem('refreshToken', response.data.refreshToken)
              localStorage.setItem('roles', response.data.roles)
              localStorage.setItem('username', response.data.username)
              localStorage.setItem('email', response.data.email)
   
              })
          .catch(error =>{
              localStorage.clear();
              if(error.response){
                  alert(error.response.data.message)  //=> response payload
              }
          })
  };

return(
    <>
    <br />
    <h4>Welcome Back to EM-Urgency</h4>
    <h1>Login</h1>
    <Form className="loginForm" onSubmit = {handleSubmit}>

      <Form.Group className="mb-3" onChange={handleChange}  >
        <Form.Control type="text" placeholder="Username" name="username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword" onChange={handleChange} >
        <Form.Control type="password" placeholder="Password" name="password" />
      </Form.Group>

      <Button variant="primary" type="submit" style={{ width: "100%" }}>
        Login
      </Button>
    </Form>





<pre>
        {JSON.stringify(data, 10, 5)}  
</pre>

</>
)
}
export default Login;