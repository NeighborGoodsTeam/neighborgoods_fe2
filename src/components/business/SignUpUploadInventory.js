import React, { useState } from "react"
import { Redirect } from "react-router-dom"

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

function SignUpBusinessUploadInventory(props) {
  // const [businessInventory, setBusinessInventory] = useState(null)
  const [nextClicked, setNextClicked] = useState(false)

  // const { bizInfo, bizLatLong } = props

  const handleSubmit = event => {
    event.preventDefault()

    // convert csv to list of product objects
    // convert that list to a list of product strings
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
      <h2>Upload Your Inventory</h2>
      <p>1. Download and fill out the inventory form below</p>
      <Button
        variant="primary"
        type="button"
      >
        Download
      </Button>

      <p>2. Submit form below</p>
      <Button
        variant="primary"
        type="button"
      >
        Upload
      </Button>

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
