import React from 'react'
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./index.css"


function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="blue">
            <Navbar.Brand href="#home">E-Com</Navbar.Brand>
                    <Nav className="me-auto navbar_warapper">
                    <Link to="/addproduct">Add Products</Link>
                    <Link to="/updateproduct">Update Products</Link>
                    <Link to="/loginform">Login</Link>
                    <Link to="/registration">Register</Link>
                   </Nav>
            </Navbar>
        </div>
    )
}

export default Header
