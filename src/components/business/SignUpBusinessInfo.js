import React, { useState } from "react"
import { Redirect } from "react-router-dom"

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Container from 'react-bootstrap/Container'

function SignUpBusinessInfo(props) {
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
    const { setBizInfo } = props
    setBizInfo({ businessInfo })
    return <Redirect to="/sign-up-business-location" />
  }

  var backgroundIMG = 'https://res.cloudinary.com/lenilunderman/image/upload/v1616709370/BusinessSignUp_LogoBusinessTag-PopUp_nvztku.png'
  var backgroundhome = {
        'backgroundImage': 'url('+backgroundIMG+')',
        'backgroundSize': "contain",
        'height':'100vh',
        'width':'100%',
        'objectFit': 'cover',
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': '100% 100%',
  }

  return(
    <Container style={backgroundhome} fluid>
    <div className="login-div">
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
          className="login-form"
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
        className="login-btn"
        variant="primary"
        type="submit"
      >
        Next
      </Button>
    </Form>
    </div>
    </Container>
  )
}

export default SignUpBusinessInfo
