import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import "./styles.css"

export default function NavbarComponent() {
    return (
        <Navbar collapseOnSelect fixed="top" expand="lg" className='navbar-custom' variant="primary" data-aos="zoom-in" data-aos-duration="1000">
            <Container>
                <Navbar.Brand href="#"><img src="./LOGO.jpg" alt="Logo" /> <b>S<span>hree</span> R<span>am</span> H<span>ospital</span></b></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" variant="primary"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <NavDropdown title="Services" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#eye-care-service">Eye care services</NavDropdown.Item>
                            <NavDropdown.Item href="#diagnostic-service">Diagnostic services</NavDropdown.Item>
                            <NavDropdown.Item href="#sugar-service">Sugar services</NavDropdown.Item>
                            <NavDropdown.Item href="#dental-service">Dental services</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#packege">Packages</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#team">Our Team</Nav.Link>
                        <Nav.Link href="#facility">Gallery</Nav.Link>
                        <Nav.Link href="#about-us">About us</Nav.Link>
                        <Nav.Link href="#faq">FAQ</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

// primary - #007bff
// secondary - #6c757d
// success - #28a745
// danger - #dc3545
// warning - #ffc107
// info - #17a2b8
// light - #f8f9fa
// dark - #343a40
// muted - #6c757d
// white - #ffffff