import React from 'react'
// import { Container } from 'react-bootstrap'
import {Container, CardDeck, Card, Row, Col} from 'react-bootstrap';
import './Lets_speak.css';
import {info} from './spaekSectionInfo';

// import img from './image/buyers.png';


export default function Lets_speak() {
    return (
        <div>
            <Container>

                <h1 className="letsheader">Lets Speak Business</h1>
                <p className="text" style={{ margin: '0 0 5em 0' }}> Ready for Construction, Ready for Life </p>

                
                {/* <Row> */}

                <CardDeck className="speaksection" >

                {info.map((prop,i) => {

                return(
                   
                //    <Col>

                   
                <Card style={{ width: '18rem', textAlign: 'start', border: '0',margin: '0 2em 2em 0'  }}>
                    <Card.Img variant="top" src= {info[i].img} />
                    <Card.Body style={{ padding: '0' }}>
                        <div className="imgborder"></div>
                        <Card.Title className="title"> {info[i].title} </Card.Title>
                        <Card.Text className="text">
                        {info[i].text}
                        </Card.Text>
                        
                    </Card.Body>
                    </Card>

                    // </Col>
                )
                    })}

                </CardDeck>

                {/* </Row> */}
             

                    <button className="contactbtn"> Contact Us </button>

            </Container>
        </div>
    )
}
