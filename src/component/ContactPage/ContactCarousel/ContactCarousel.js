import React from 'react'
import {Container, Row, Col, Carousel } from 'react-bootstrap';
import {Link} from 'react-scroll';
import './ContactCarousel.css';

import img2 from '../../../image/bg2.png';
import {IoIosArrowDropdown} from 'react-icons/io';


export default function Carouselpart(  ) {

    

    return (
        <div className="contacthomebg" >

         
               
                
               
               
            <Container className="contactbg-inside">

            

                {/* <Row style={{ justifyContent: 'center' }}> */}
                
                <h1> Get in touch with Alifia Properties Limited </h1>

                {/* </Row> */}

                {/* <Row   style={{ justifyContent: 'center' }}>    */}
                     
              <Link to="contact" smooth={true} duration={500}> <IoIosArrowDropdown className="downarrow"  /> </Link>
     
                    
     
                {/* </Row> */}
                     
         
                     
                     </Container> 

               
            
        </div>
    )
}
