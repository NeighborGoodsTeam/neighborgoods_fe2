import React, { useState } from "react"
import { Redirect } from "react-router-dom"

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

import { getLatLong } from "../../api/google-maps"

function SignUpBusinessLocation(props) {
  const [businessLocation, setBusinessLocation] = useState(null)
  const [nextClicked, setNextClicked] = useState(false)
  const [lat, setLat] = useState(null)
  const [lng, setLng] = useState(null)

  const { setLatitude, setLongitude, setBizAddress } = props

  const handleChange = event => {
    event.persist()
    setBusinessLocation({ ...businessLocation, [event.target.name]: event.target.value })
  }

  // format the address data from form to be sent to Google API
  const translateAddress = () => {
    if (businessLocation.address2) {
      const formatAddress = `${businessLocation.address}, ${businessLocation.address2},
        ${businessLocation.city}, ${businessLocation.state}, ${businessLocation.zipCode}`
      const formatAddressToUrl = formatAddress.replace(/ /g, '+')
      return formatAddressToUrl
    } else {
      const formatAddress = `${businessLocation.address}, ${businessLocation.city}, ${businessLocation.state}, ${businessLocation.zipCode}`
      const formatAddressToUrl = formatAddress.replace(/ /g, '+')
      return formatAddressToUrl
    }
  }

  const handleSubmit = event => {
    event.preventDefault()

    setBizAddress(businessLocation)

    // call Google API to retrieve lat long
    getLatLong(translateAddress)
      .then(res => {
        setLatitude(res.data.results[0].geometry.location.lat)
        setLongitude(res.data.results[0].geometry.location.lng)
      })
      .catch(error => console.log(error))

    setNextClicked(true)
  }

  if (nextClicked) {
    setLatitude(lat)
    setLongitude(lng)
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
