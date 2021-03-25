import React, { useState } from "react"
import { Link } from "react-router-dom"

import "../../index.css"

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Container from 'react-bootstrap/Container'

import { signIn } from "../../api/auth"

function Login() {
  const [credentials, setCredentials] = useState(null)

  const handleChange = event => {
    event.persist()
    setCredentials({ ...credentials, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(credentials)

    signIn(credentials)
      .then(res => console.log(res))
      .catch(error => console.log(error))
  }

  var backgroundIMG = 'https://res.cloudinary.com/lenilunderman/image/upload/v1616705481/BusinessLogIn_gckftg.png'
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
      <Form.Group controlId="formBasicEmail">
        <h2 className="title-site">Welcome Back!</h2>
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
      <Button className="login-btn"
        variant="primary"
        type="submit"
      >
        Login
      </Button>
    
      <div className="centerItems">
        <p>Don't Have an Account Yet?</p>
      <Link to='/create-account'> SIGN UP</Link>
      </div>
      
    </Form>
      </div>
      
    </Container>
    
  )
}

export default Login;
