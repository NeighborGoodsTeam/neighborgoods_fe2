import React, { useState } from "react"
import { Redirect } from "react-router-dom"
// import CSVReader from "react-csv-reader"

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

function SignUpBusinessUploadInventory(props) {
  // const [businessInventory, setBusinessInventory] = useState(null)
  // const [file, setFile] = useState(null)
  const [nextClicked, setNextClicked] = useState(false)

  // const { bizInfo, bizLatLong } = props

  const handleSubmit = event => {
    event.preventDefault()

    // console.log('this is the file: ', file)

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
      <p>1. Add list of your products to a single column CSV file.</p>
      <p>2. Upload CSV file below.</p>
      <Form.File
        id="custom-file"
        label="Select your file"
        onChange={(event) => console.log('here is the file: ', event.target.files[0])}
        custom
      />

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
