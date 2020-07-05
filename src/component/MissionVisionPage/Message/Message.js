import React from 'react'
import {Container,Row,Col, Card} from 'react-bootstrap';

import './Message.css';
import {GoMailRead} from 'react-icons/go';

export default function Message() {
    return (
        <div style={{ backgroundColor: 'rgba(204,187,143,.2)',  padding: '5rem 0', margin: '3em 0 0 0 ' }}>
            <Container className="mission-container">

                <Row>
                    
                    <Col lg={4} className="missiontext"> 
                    <h1>Our Mission</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Fugit quibusdam ex com  modilaudantium! Earum, placeat harum 
                    at mollitia pariatur, eum ducimus unde  esse natus sunt quisquam 
                    dignissimo  explicabo eos. Praesentium.
                    Lorem ipsum  dolor sit amet, consectetur adipisicing elit 
                     Fugit quibusdam ex com  modilaudantium! Earum, placeat harum,
                    at mollitia pariatur  eum ducimus unde  esse natus sunt quisquam 
                    dignissimos explicabo eos. Praesentium.
                    </p> 
                     
                    </Col>
                  

                    <Col lg={4} className="missiontext">
                    <h1>Our Vision</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Fugit quibusdam ex com  modilaudantium! Earum, placeat harum 
                    at mollitia pariatur, eum ducimus unde  esse natus sunt quisquam 
                    dignissimo  explicabo eos. Praesentium.
                    Lorem ipsum  dolor sit amet, consectetur adipisicing elit 
                     Fugit quibusdam ex com  modilaudantium! Earum, placeat harum,
                    at mollitia pariatur  eum ducimus unde  esse natus sunt quisquam 
                    dignissimos explicabo eos. Praesentium.
                    </p> 
                     
                    </Col>

                    <Col lg={4} id="msgsection">

                    <Card className="msgcard">
                        <GoMailRead className="mailicon"/>
                        <h1 className="msgtitle">Leave Your Message</h1>
                   
                    <Card.Body className="msgbtm">
                    
                    <form >
                        <div className="msggroup">
                            <input 
                            type="text"
                            className="msgform"
                            placeholder="Enter Your Name" />
                        </div>

                        <div className="msggroup">
                            <input 
                            type="email"
                            className="msgform"
                            placeholder="Enter Your Email" />
                        </div>

                        <div className="msggroup">
                            <textarea  
                            rows="7"
                            className="msgarea"
                            placeholder="Your Message" />
                        
                        
                        </div>

                        <div className="msggroup">
                        <input type="submit"
                        value="SEND"
                        className="sendmsgbtn" 
                        />
                        </div>

                    </form>

                    </Card.Body>
                </Card>

            
                    
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
