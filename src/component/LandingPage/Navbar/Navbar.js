import React from 'react'
import {Nav, Navbar, Container, Row, Dropdown } from 'react-bootstrap';
import logo from '../../../image/Union.png';
import {Link} from 'react-router-dom';

import './Navbar.css';

// import img1 from '../../image/bg.png';

export default class NavBar extends React.Component {
    
    state = {
        navBackground: "transparent"
      };
      
      componentDidMount() {
        document.addEventListener("scroll", () => {
          const backgroundcolor = window.scrollY < 70 ? "transparent" : "rgba(0,0,0,.5)";
    
          this.setState({ navBackground: backgroundcolor });
        });
      }

   render(){
    return (
        <div className="fixed-top" >

            <nav  style={{  backgroundColor: `${this.state.navBackground}` }} >
            
            <Navbar collapseOnSelect expand="sm" >
            
            
            <Navbar.Brand className="brandsmall" href="#home">
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
                <Nav.Link href="#features">APARTMENTS</Nav.Link>
               
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


           

            {/* <Navbar sticky="top" collapseOnSelect expand="sm" variant="dark" >
            
            <Navbar.Brand className="brandsmall" href="#home">
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
                <Nav.Link href="#home">LAND</Nav.Link>
                <Nav.Link href="#features">APARTMENTS</Nav.Link>
               
                </Nav>
               
                <Navbar.Brand className="brandlarge" href="#home">
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
            </Navbar> */}

           

           

            {/* <Container>

            <div className="bg-inside" >

                <Row>
                
                <h1>Make your <br/> next address <br/> close to your hurt...</h1>

                </Row>  */}

                 {/* <Dropdown>
                <Dropdown.Toggle variant="" className="dropdown-btn" id="dropdown-basic">
                    Explore Properties
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Property 1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Property 2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Property 3</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>  */}

                 {/* <Row>   
                     
                <div className="dropdown">
                <button className="dropbtn">Explore Properties <i class="fa fa-angle-down"></i></button>
                <div className="dropdown-content">
                    <a href="/">Property 1</a>
                    <a href="/">Property 2</a>
                    <a href="/">Property 3</a>
                </div>
                </div>

               

                </Row>
                
    
                </div> */}
                {/* </Container>  */}

               

        </div>
    )
}
}
