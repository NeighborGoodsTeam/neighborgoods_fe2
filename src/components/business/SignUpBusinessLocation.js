import React, { useState } from "react"
import { Redirect } from "react-router-dom"

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

function SignUpBusinessLocation(props) {
  const [businessLocation, setBusinessLocation] = useState(null)
  const [nextClicked, setNextClicked] = useState(false)
  // const [latLong, setLatLong] = useState(false)

  // const { bizInfo, setBizLatLong } = props

  const handleChange = event => {
    event.persist()
    setBusinessLocation({ ...businessLocation, [event.target.name]: event.target.value })
    // console.log('businessInfo on location page: ', bizInfo)
  }

  // const findBizLatLong = (query, field)=> {
  //   // call Google Place API to find lat long based on address
  // }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(businessLocation)

    // call Google API to retrieve lat long
    // findBizLatLong(businessLocation, geometry)
    //   // set state to response
    //   .then(res => setLatLong(res))
    //   .then(() => setBizLatLong(latLong))
    setNextClicked(true)
  }

  if (nextClicked) {
    return <Redirect to="/sign-up-business-upload-inventory" />
  }

  return(
    <Form
      className="login-form"
      onSubmit={handleSubmit}
      >
      <h2>Where Can We Find You?</h2>
      <Form.Group controlId="formBasicUrl">
        <Form.Control
          onChange={handleChange}
          name="url"
          type="text"
          placeholder="http://"
        />
      </Form.Group>
      <Form.Group controlId="formBasicAddress">
        <Form.Control
          onChange={handleChange}
          name="address"
          type="text"
          placeholder="Address"
        />
      </Form.Group>
      <Form.Group controlId="formBasicAddress2">
        <Form.Control
          onChange={handleChange}
          name="address2"
          type="text"
          placeholder="Address 2"
        />
      </Form.Group>
      <Form.Group controlId="formBasicCity">
        <Form.Control
          onChange={handleChange}
          name="city"
          type="text"
          placeholder="City"
        />
      </Form.Group>
      <Form.Group controlId="formBasicState">
        <Form.Control
          onChange={handleChange}
          name="state"
          type="text"
          placeholder="State"
        />
      </Form.Group>
      <Form.Group controlId="formBasicZipCode">
        <Form.Control
          onChange={handleChange}
          name="zipCode"
          type="text"
          placeholder="Zip Code"
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
