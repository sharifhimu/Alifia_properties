import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import './Whoweare.css';

import missionimg from '../../../image/missionimg.png';

export default function Whoweare() {
    return (
        <div>
            <Container style={{ marginTop: '4rem' }}>
                <Row>
                    <Col lg={6} xs={12} className="who" >
                        
                    <h1>Who We Are</h1>
                    
                           
                    <p > Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Deserunt, quae facilis soluta beatae molestias quisquam amet 
                        iste voluptates rerum eius nisi cum, in quo est voluptatibus
                        recusandae exercitationem voluptate eos.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Deserunt, quae facilis soluta beatae molestias quisquam amet 
                        iste voluptates rerum eius nisi cum, in quo est voluptatibus
                        recusandae exercitationem voluptate eos. 
                    </p> 
                                
                    </Col>

                    <Col lg={6} xs={12} className="who" >
                    <img src={missionimg} style={{ width: '100%' }} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
