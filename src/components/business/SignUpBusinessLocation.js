import React, { useState } from "react"
// import { Redirect } from "react-router-dom"

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

function SignUpBusinessLocation() {
  const [businessLocation, setBusinessLocation] = useState(null)
  // const [nextClicked, setNextClicked] = useState(false)

  const handleChange = event => {
    event.persist()
    setBusinessLocation({ ...businessLocation, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(businessLocation)
    // setNextClicked(true)
  }

  // if (nextClicked) {
  //   return <Redirect to="/sign-up-business-location" />
  // }

  return(
    <Form
      className="login-form"
      onSubmit={handleSubmit}
      >
      <h2>Where Can We Find You?</h2>
      <Form.Group controlId="formBasicLogo">
        <Form.Control
          onChange={handleChange}
          name="logo"
          type="text"
          placeholder="Image Link"
        />
      </Form.Group>
      <Form.Group controlId="formBasicBusinessName">
        <Form.Control
          onChange={handleChange}
          name="business_name"
          type="text"
          placeholder="Business Name"
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

export default SignUpBusinessLocation
