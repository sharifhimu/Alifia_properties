import React from 'react'
import {Container, Row, Col, Carousel } from 'react-bootstrap';
import {Link} from 'react-scroll';
import './MissionVisionCarousel.css';

import img2 from '../../../image/bg2.png';
import {IoIosArrowDropdown} from 'react-icons/io';


export default function Carouselpart(  ) {

    

    return (
        <div className="missionbg" >

         
               
                
               
               
            <Container className="missionbg-inside">

            

                {/* <Row style={{ justifyContent: 'center' }}> */}
                
                <h1>Mission & Vision </h1>

                {/* </Row> */}

                {/* <Row   style={{ justifyContent: 'center' }}>    */}
                     
              <Link to="msgsection" smooth={true} duration={500}> <IoIosArrowDropdown className="downarrow"  /> </Link>
     
                    
     
                {/* </Row> */}
                     
         
                     
                     </Container> 

               
            
        </div>
    )
}
