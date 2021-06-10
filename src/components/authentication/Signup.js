import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, Navbar, Nav } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import CenteredContainer from "./CenteredContainer"
import { signInWithGoogle } from "../../firebase";

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <div>
    <Navbar bg="dark" variant="dark" expand="lg">
<Navbar.Brand href="#home">Cloudy</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mr-auto">
    <Nav.Link href="/aboutus">Home</Nav.Link>
    <Nav.Link href="/login">Sign in</Nav.Link>
    <Nav.Link href="/signup">Sign up</Nav.Link>
  </Nav>
</Navbar.Collapse>
</Navbar>
    <CenteredContainer>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <div class="d-grid gap-2 col-6 mx-auto">
                <Button type="submit" disabled={loading} className="btn btn-dark btn-block">Sign Up</Button>
                <Link to="/" disabled={loading} className="btn btn-secondary btn-block" onClick={signInWithGoogle}>Sign up with Google</Link>
            </div>
          </Form>
        </Card.Body>
      </Card>
      <div className="forgot-password w-100 text-center mt-2">
      <p style={{color: "white"}}>Already have an account? <Link to="/login">Sign In</Link></p>
      </div>
    </CenteredContainer>
    </div>
  )
}