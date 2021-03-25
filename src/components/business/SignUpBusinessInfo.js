import React, { useState } from "react"
import { Redirect } from "react-router-dom"

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

function SignUpBusinessInfo() {
  const [businessInfo, setBusinessInfo] = useState(null)
  const [nextClicked, setNextClicked] = useState(false)

  const handleChange = event => {
    event.persist()
    setBusinessInfo({ ...businessInfo, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(businessInfo)
    setNextClicked(true)
  }

  if (nextClicked) {
    return <Redirect to="/sign-up-business-location" />
  }

  return(
    <Form
      className="login-form"
      onSubmit={handleSubmit}
      >
      <h2>What do You do?</h2>
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
      <Form.Group controlId="formBasicIndustry">
        <Form.Control
          onChange={handleChange}
          name="industry"
          type="text"
          size="sm"
          as="select"
        >
          <option>Industry</option>
          <option>Grocery Store</option>
          <option>Soft Goods Retailer</option>
          <option>Hard Goods Retailer</option>
          <option>Service</option>
        </Form.Control>
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

export default SignUpBusinessInfo
