import React, { useState } from "react"
import { Link } from "react-router-dom"

import "../../index.css"

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

import { signIn } from "../../api/auth"

function Login() {
  const [credentials, setCredentials] = useState(null)

  const handleChange = event => {
    event.persist()
    setCredentials({ ...credentials, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(credentials)

    signIn(credentials)
      .then(res => console.log(res))
      .catch(error => console.log(error))
  }

  return(
    <Form
      className="login-form"
      onSubmit={handleSubmit}
      >
      <Form.Group controlId="formBasicEmail">
        <h2>Welcome Back!</h2>
        <Form.Control
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="Email"
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Control
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
      >
        Login
      </Button>

      <p>Don't Have an Account Yet?</p>
      <Link to='/create-account'>SIGN UP</Link>
    </Form>
  )
}

export default Login;
