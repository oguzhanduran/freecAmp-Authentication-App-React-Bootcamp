import React from 'react'
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import "./index.css"


function Header() {

    let user = JSON.parse(localStorage.getItem("user-info"))
    const history = useHistory();
    
    function logOut () {
        localStorage.clear();
        window.location.reload();
        history.push("/loginform")
    }
    return (
        <div>
            <Navbar bg="light" variant="light" className='navbar'>
            <Navbar.Brand  className='navbar-brand'><Link to="/">freecAmp</Link></Navbar.Brand>
                    <Nav className="me-auto navbar_warapper">
                        {
                            localStorage.getItem("user-info") ?
                            <>
                                <Link to="/homepage">Home Page</Link>
                                <Link to="/wildcamping">Wild Camping</Link>
                                <Link to="/riverside">Riverside</Link>

                            </>
                            :
                            <>
                                <Link to="/loginform">Login</Link>
                                <Link to="/registration">Register</Link>
                            </>
                        }
                        {/* Kullanıcı login olursa wildcamping, riverside ve camppage sayfaları görünecek navbarda olmazsa login ve riverside görünecek. */}
                       
                   </Nav>
                   {localStorage.getItem("user-info") ?
                   <Nav>
                        <NavDropdown title={user && user.email || user.emailLogin}>
                            <NavDropdown.Item onClick={logOut} >Logout</NavDropdown.Item>
                        </NavDropdown>
                   </Nav>
                   : null }
            </Navbar>
        </div>
    )
}

export default Header
