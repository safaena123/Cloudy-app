import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, Navbar, Nav } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import CenteredContainer from "./CenteredContainer"
import { signInWithGoogle } from "../../firebase";



export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  //const [user, setUser] = useState()

  /*const handleLogin = () => {
    if (!user) {
      auth.signInWithPopup(provider).then((result) => {
        setUser(result.user)
        console.log(result.user)
      }).catch((error) => {
        alert(error.message);
      });
    } else if (user) {
      auth.signOut().then(() => {
        setUser(null)
      }).catch((err) => alert(err.message))
    }
  } */

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <div>
      <Navbar bg="light" expand="lg">
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
          <h2 className="text-center mb-4">Sign In</h2>
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
            <div class="d-grid gap-2 col-6 mx-auto">
                <Button type="submit" disabled={loading} className="btn btn-dark btn-block">Sign in</Button>
                <Link to="/" disabled={loading} className="btn btn-secondary btn-block" onClick={signInWithGoogle}>Sign in with Google</Link>
            </div>
          </Form>
          <div className="forgot-password w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="forgot-password w-100 text-center mt-2">
      <p style={{color: "white"}}>Need an account? <Link to="/signup">Sign Up</Link></p>
      </div>
      <div className="forgot-password w-100 text-center mt-2">
      <Link to="/aboutus" class="btn btn-light">About us</Link>
      </div>
    </CenteredContainer>
    </div>
  )
}