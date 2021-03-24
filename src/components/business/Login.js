import React from "react"
import { Link } from "react-router-dom"

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

function Login() {
  return(
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>

      <p>Don't Have an Account Yet?</p>
      <Link to='/sign-up'>SIGN UP</Link>
    </Form>
  )
}

export default Login;
