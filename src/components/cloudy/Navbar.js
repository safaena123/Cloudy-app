import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function NavbarComponent() {
  return (
    <Navbar bg="dark" expand="sm">
      <Navbar.Brand style={{color: "white"}} as={Link} to="/">
        Cloudy
      </Navbar.Brand>
      <Nav>
        <Nav.Link style={{color: "white"}} as={Link} to="/user">
          Profile
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}
