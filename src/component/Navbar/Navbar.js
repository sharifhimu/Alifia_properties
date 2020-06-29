import React from 'react'
import {Nav, Navbar, Dropdown, Container} from 'react-bootstrap';
import logo from '../../image/Union.png';

import './Navbar.css';

export default function NavBar() {
    return (
        <div className="bg">

           
            <Navbar collapseOnSelect expand="sm" variant="dark" >
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                
          

                <Nav>
                <Nav.Link href="#home">LAND</Nav.Link>
                <Nav.Link href="#features">APARTMENTS</Nav.Link>
               
                </Nav>
               
                <Navbar.Brand href="#home">
                    <img
                     src={logo}
                     width="80"
                     height="80"
                     className="d-inline-block align-top"
                     alt="React Bootstrap logo"
                 />

                </Navbar.Brand>

                <Nav>
                <Nav.Link href="#home">BUSINESS</Nav.Link>
                <Nav.Link href="#features">CONTACT</Nav.Link>
               
                </Nav>

               

            </Navbar.Collapse>
            </Navbar>
            

            {/* <Navbar variant="dark" className="justify-content-center">
                
                <Nav>
                <Nav.Link href="#home">LAND</Nav.Link>
                <Nav.Link href="#features">APARTMENTS</Nav.Link>
               
                </Nav>
               
                <Navbar.Brand href="#home">
                    <img
                     src={logo}
                     width="80"
                     height="80"
                     className="d-inline-block align-top"
                     alt="React Bootstrap logo"
                 />

                </Navbar.Brand>

                <Nav>
                <Nav.Link href="#home">BUSINESS</Nav.Link>
                <Nav.Link href="#features">CONTACT</Nav.Link>
               
                </Nav>
                
            </Navbar> */}


            <Container>
            <div className="bg-inside" >
                
                <h1>Make your <br/> next address <br/> close to your hurt...</h1>
            
                <Dropdown>
                <Dropdown.Toggle variant="" className="dropdown-btn" id="dropdown-basic">
                    Explore Properties
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Property 1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Property 2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Property 3</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
               
    
                </div>
                </Container>         
        </div>
    )
}
