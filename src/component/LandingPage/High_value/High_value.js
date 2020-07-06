import React from 'react'
import './High_value.css';
import {Image, Container,Row, Col} from 'react-bootstrap';
import highvalue from '../../../image/highvalue.png';

export default function High_value() {
    return (
        <div className="highvalue" >

            <Container>

                <div className="bgtext">

                <h1>High Value Properties<br/>In the City of Tomorrow... </h1>

                <Row>
            <Col lg={4}>

            <div className="bgtextp">
            
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Excepturi molestiae, reprehenderit adipisci quam molestias 
                placeat velit cupiditate exercitationem officia. 
                Dolores repellendus rerum labore fugiat sit 
                maiores tempora harum deleniti voluptatem.
            </p>
        </div>  

            </Col>
            
            <Col lg={8}>

                   <div className="">
                    <Image src={highvalue} fluid />
                    </div>

            </Col>
        
        
            </Row>  

            </div>
           
        </Container>

        </div>
    )
}
