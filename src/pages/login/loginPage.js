import React from "react";
import { Form , Button } from "react-bootstrap";

function Login (){
    const [data, setData] = useState([]);
return(
    <>
    <br/>
    <h4>Welcome Back to EM-Urgency</h4>
    <h1>Login</h1>
    <Form className="loginForm">
  <Form.Group className="mb-3">
    <Form.Control type="text" placeholder="Username" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit" style={{width:"100%"}}>
     Login
  </Button>
</Form>
</>
)
}
export default Login;