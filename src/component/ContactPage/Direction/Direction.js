import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

import './Direction.css';

import map from '../../../image/map.png';

export default function Direction() {
    return (
        <div>
            <Container style={{ marginTop: '4rem' }}>
                <Row  style={{ justifyContent: 'space-between' }}>

                    <Col lg={5} md sm xs={12}>
                    
                    <Card style={{ border: '1px solid #FFE9B1',margin: '20px 0'  }}>
                    <h1 className="maptitle"> Directions </h1>
                    <Card.Body>
                     <a href= "/contactpage" >   
                    <Card.Img className="mapimg" variant="top" src={map} />
                    </a>
                    </Card.Body>
                </Card>

                    </Col >

                    <Col lg={6} md sm xs={12} id="contact">
                    
                    <Card style={{ border: '1px solid #FFE9B1', margin: '20px 0'  }}>
                        <h1 className="maptitle">Contact Us</h1>
                   
                    <Card.Body className="contactbtm">
                    
                    <form >
                        <div className="form-group">
                            <input 
                            type="text"
                            className="form-control"
                            placeholder="Name" />
                        </div>

                        <div className="form-group">
                            <input 
                            type="email"
                            className="form-control"
                            placeholder="Email" />
                        </div>

                        <div className="form-group">
                            <input 
                            type="text"
                            className="form-control"
                            placeholder="Subject" />
                        </div>

                        <div className="form-group">
                            <textarea  
                            rows="10"
                            className="form-control"
                            placeholder="Message" />
                        
                        </div>

                        <div className="form-group">
                        <input type="submit"
                        value="SEND"
                        className="sendbtn" 
                        />
                        </div>

                    </form>

                    </Card.Body>
                </Card>

                    </Col >

                </Row>
            </Container>
        </div>
    )
}
