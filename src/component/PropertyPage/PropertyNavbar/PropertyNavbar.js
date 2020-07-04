import React from 'react'
import {Nav, Navbar, Container, Row, Dropdown } from 'react-bootstrap';
import logo from '../../../image/Union.png';


import './PropertyNavbar.css';

// import img1 from '../../image/bg.png';

export default class PropertyNavBar extends React.Component {
    
    state = {
        navBackground: "#7b7b7b"
      };
      
      componentDidMount() {
        document.addEventListener("scroll", () => {
          const backgroundcolor = window.scrollY < 70 ? "#7b7b7b" : "rgba(48,48,48,.5)";
    
          this.setState({ navBackground: backgroundcolor });
        });
      }

   render(){
    return (
        <div className="fixed-top" >

            <nav  style={{  backgroundColor: `${this.state.navBackground}` }} >
            
            <Navbar collapseOnSelect expand="sm" >
            
            
            <Navbar.Brand className="brandsmall" href="/">
                    <img
                     src={logo}
                     width="80"
                     height="80"
                     className="d-inline-block align-top"
                     alt="React Bootstrap logo"
                 />

                </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                
          

                <Nav>
                <Nav.Link href="/">LAND</Nav.Link>
                <Nav.Link href="/property">APARTMENTS</Nav.Link>
               
                </Nav>
               
                <Navbar.Brand className="brandlarge" href="/">
                    <img
                     src={logo}
                     width="80"
                     height="80"
                     className="d-inline-block align-top"
                     alt="React Bootstrap logo"
                 />

                </Navbar.Brand>

                <Nav>
                <Nav.Link href="/mission&vision">BUSINESS</Nav.Link>
                <Nav.Link href="/contactpage">CONTACT</Nav.Link>
               
                </Nav>

               

            </Navbar.Collapse>
            </Navbar>
            
            </nav>


           

            

               

        </div>
    )
}
}
