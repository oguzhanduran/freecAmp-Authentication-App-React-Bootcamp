import React from 'react'
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./index.css"


function Header() {
    return (
        <div>
            <Navbar bg="light" variant="light" className='navbar'>
            <Navbar.Brand  className='navbar-brand'><Link to="/">freecAmp</Link></Navbar.Brand>
                    <Nav className="me-auto navbar_warapper">
                        <Link to="/wildcamping">Wild Camping</Link>
                        <Link to="/riverside">Riverside</Link>
                        <Link to="/loginform">Login</Link>
                        <Link to="/registration">Register</Link>
                   </Nav>
            </Navbar>
        </div>
    )
}

export default Header
