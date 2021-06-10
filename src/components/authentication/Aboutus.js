import React from 'react'
import CenteredContainer from "./CenteredContainer"
import { Card, Navbar, Nav, Container, Row, Col, Image } from "react-bootstrap"
import { Link } from "react-router-dom"
import logo from '../../media/Blacklogo.png';

export default function Aboutus() {
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
        <Container className="d-flex align-items-center justify-content-center">
        <Row>
          <Col xs={3} md={2}>
            <Image style={{width: "300px"}} src={logo} roundedCircle />
          </Col>
        </Row>
        </Container>
           <Card>
              <Card.Body>
               <h2 className="text-center mb-4">About us</h2>
               <h5 className="text-center mb-4">We are a storage service that wants to help you manage your files in the cloud.</h5>
               <div class="d-grid gap-2 col-6 mx-auto">
                <Link to="/login" type="submit" className="btn btn-dark btn-block">Sign in</Link>
                <Link to="/signup" className="btn btn-secondary btn-block" >Sign up</Link>
               </div>
              </Card.Body>
           </Card>
        </CenteredContainer>
        </div>
    )
}
