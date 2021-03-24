import React, { useState } from "react"
import { Link } from "react-router-dom"

import "../../index.css"

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

function Login() {
  const [credentials, setCredentials] = useState(null)

  const handleChange = event => {
    event.persist()

    setCredentials({ ...credentials, [event.target.name]: event.target.value })

    console.log(credentials)

    // setCredentials(prevState => {
    //   const updatedField = { [event.target.name]: event.target.value }
    //   const editCredentials = Object.assign({}, prevState, updatedField)
    //   return editCredentials
    // })
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(credentials)
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
      <Link to='/sign-up'>SIGN UP</Link>
    </Form>
  )
}

export default Login;
