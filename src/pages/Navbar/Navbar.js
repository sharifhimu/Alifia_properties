import React from 'react'
import {Nav, Navbar, Dropdown} from 'react-bootstrap';
import logo from '../../image/Union.png';

import './Navbar.css';

export default function NavBar() {
    return (
        <div className="bg">
            {/* <Navbar collapseOnSelect expand="sm" variant="dark" className="justify-content-center">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                
                <Nav >
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                
                <Nav.Link href="#deets">More deets</Nav.Link>
            
                </Nav>
            </Navbar.Collapse>
            </Navbar> */}

            <Navbar variant="dark" className="justify-content-center">
                
                <Nav>
                <Nav.Link href="#home">LAND</Nav.Link>
                <Nav.Link href="#features">APARTMENTS</Nav.Link>
               
                </Nav>
               
                <Navbar.Brand href="#home">
                    <img
                     src={logo}
                     width="60"
                     height="60"
                     className="d-inline-block align-top"
                     alt="React Bootstrap logo"
                 />

                </Navbar.Brand>

                <Nav>
                <Nav.Link href="#home">BUSINESS</Nav.Link>
                <Nav.Link href="#features">CONTACT</Nav.Link>
               
                </Nav>
                
            </Navbar>

            <div className="bg-inside" >
                <h1>Make your <br/> next address <br/> close to your hurt...</h1>
            
                <Dropdown>
                <Dropdown.Toggle variant="" className="dropdown-btn" id="dropdown-basic">
                    Explore Properties
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
    
                </div>
                        
        </div>
    )
}
