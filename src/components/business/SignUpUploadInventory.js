import React, { useState } from "react"
import { Redirect } from "react-router-dom"

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

import { createBusiness } from "./../../api/business"

function SignUpBusinessUploadInventory(props) {
  const [inventory, setInventory] = useState(null)
  const [nextClicked, setNextClicked] = useState(false)

  const { bizInfo, bizAddress, latitude, longitude, user } = props

  const handleChange = event => {
    event.persist()
    setInventory({ ...inventory, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    const businessData = {
      name: bizInfo.name,
      description: '',
      addressOne: bizAddress.address,
      addressTwo: bizAddress.address2,
      city: bizAddress.city,
      state: bizAddress.state,
      zipCode: bizAddress.zipCode,
      longitude: longitude,
      latitude: latitude,
      industry: bizInfo.industry,
      phone: '',
      website: bizAddress.url,
      email: '',
      logo: bizInfo.logo,
      inventory: inventory
    }
    // console.log({
    //   name: bizInfo.business_name,
    //   description: '',
    //   addressOne: bizAddress.address,
    //   addressTwo: bizAddress.address2,
    //   city: bizAddress.city,
    //   state: bizAddress.state,
    //   zipCode: bizAddress.zipCode,
    //   longitude: longitude,
    //   latitude: latitude,
    //   industry: bizInfo.industry,
    //   phone: '',
    //   website: bizAddress.url,
    //   email: '',
    //   logo: bizInfo.logo,
    //   inventory: inventory
    // })

    createBusiness(user, businessData)
      .then(res => console.log('create business: ', res))

    setNextClicked(true)
  }

  if (nextClicked) {
    return <Redirect to="/business-page" />
  }

  return(
    <Form
      className="login-form"
      onSubmit={handleSubmit}
      >
      <h2>Add Your Inventory</h2>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Enter products separated by commas:</Form.Label>
        <Form.Control
          as="textarea"
          onChange={handleChange}
          rows={3}
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

export default SignUpBusinessUploadInventory
