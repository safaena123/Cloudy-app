import React, { useState } from "react"
import { Button, Card, Alert, Navbar, Nav } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import CenteredContainer from "./CenteredContainer"

export default function Profile() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <div>
          <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Cloudy</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">My Files</Nav.Link>
          <Nav.Link href="/user">My Profile</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    <CenteredContainer>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <div className="d-grid gap-3 col-6 mx-auto">
          <Link to="/update-profile" className="btn btn-dark btn-block">
            Update Profile
          </Link>
          <Button type="button" className="btn btn-secondary btn-block"  onClick={handleLogout}>
              Log Out
              </Button>
          </div>
        </Card.Body>
      </Card>
    </CenteredContainer>
    </div>
  )
}