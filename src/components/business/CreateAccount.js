import React, { useState } from "react"
import { Redirect } from "react-router-dom"

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

import { signUp } from "../../api/auth"
import { signIn } from "../../api/auth"

function CreateAccount(props) {
  const [credentials, setCredentials] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)

  const handleChange = event => {
    event.persist()
    setCredentials({ ...credentials, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    const { setUser } = props
    event.preventDefault()

    signUp(credentials)
      .then(() => {
        let signInCreds = {
          email: credentials.email,
          password: credentials.password
        }
        signIn(signInCreds)
          .then(res => setUser(res.data.user))
          .catch(error => console.log(error))
      })
      .then(() => setLoggedIn(true))
      .catch(error => console.log(error))
  }

  if (loggedIn) {
    return <Redirect to="/sign-up-business-info" />
  }

  return(
    <Form
      className="login-form"
      onSubmit={handleSubmit}
      >
      <h2>Let's Get Started</h2>
      <Form.Group controlId="formBasicFirstName">
        <Form.Control
          onChange={handleChange}
          name="firstName"
          type="text"
          placeholder="First Name"
        />
      </Form.Group>
      <Form.Group controlId="formBasicLastName">
        <Form.Control
          onChange={handleChange}
          name="lastName"
          type="text"
          placeholder="Last Name"
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
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
      <Form.Group controlId="formBasicConfirmPassword">
        <Form.Control
          onChange={handleChange}
          name="password_confirmation"
          type="password"
          placeholder="Confirm Password"
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
      >
        Next
      </Button>
    </Form>
  )
}

export default CreateAccount
