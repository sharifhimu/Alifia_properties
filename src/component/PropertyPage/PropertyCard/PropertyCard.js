import React from 'react'
import { Container, Row, Col,Card,Button, CardColumns,CardDeck } from 'react-bootstrap';
// import duplex from '../../../image/duplex.png';
import {BsArrowRight} from 'react-icons/bs';
import {MdLocationOn} from 'react-icons/md';
import {FaVectorSquare} from 'react-icons/fa';
import './PropertyCard.css';
import {info} from './PropertyCardInfo';

export default function PropertyCard() {
    return (
        <div style={{ margin: '5rem 0 1rem 0', }}>

            <Container className="containersize">
            {/* <CardColumns> */}

            {/* <CardDeck> */}

                <Row style={{ display: 'flex', justifyContent: 'center' }}>

                    {info.map((prop,i) => {  

                        return(

                        

                    <Col lg={4} xs={12} style={{ display: 'flex', justifyContent: 'center', marginBottom: '4em' }}>

                    <Card className="fullcard" >

                    <a href="/singleproperty" >

                    <Card.Img variant="top" src={info[i].img} />
                    <Card.ImgOverlay style={{ display: 'flex', justifyContent: 'flex-end', padding: '0' }}>
                        <Card.Title className="cardtitle">{info[i].insidetitle}</Card.Title>
                    </Card.ImgOverlay>
                    
                    <Card.Body className="cardbelow" >
                        <Card.Text className="viewdetails"><a href="/singleproperty" >Click To View Details <BsArrowRight /> </a> </Card.Text>
                       
                       <div className="propertydetails">
                        <Card.Title>{info[i].cardtitle}</Card.Title>
                        <Card.Text style={{ display: 'flex', alignItems: 'center' }}>
                        <MdLocationOn style={{ margin: '0 8px 0 0' }} /> {info[i].location}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <FaVectorSquare style={{ margin: '0 8px 0 0' }} /> {info[i].measure}
                        </Card.Text>
                        </div>
                        
                    </Card.Body>

                    </a>

                    </Card>
                    
                    </Col>

                        )

                        } )}

       
                </Row>

               
            </Container>
            {/* </CardColumns> */}
            {/* </CardDeck> */}
        </div>
    )
}
