import React from 'react'
import {CardDeck, Card, CardColumns} from 'react-bootstrap';

import image1 from '../../image/ready1.png';
import image2 from '../../image/ready2.png';
import image3 from '../../image/ready3.png';

import './Ready_properties.css';

export default function Ready_properties() {
    return (
        <div style={{ margin: '5rem 0' }}>

            <h1 className="headertext">Ready Properties for Sale</h1>
            <p className="headerparagraph">Ready for Construction,Ready for Life</p>

            <CardDeck className="cardgrp" >
            {/* <CardColumns > */}
            <div>
            <Card  className="singlecard img1" >
           
                <Card.Text  className="textimage">
                <p >Modern <br/> Apartment <br/> Condos</p>
                </Card.Text>
              
            </Card>
            <div className="borderdown"></div>

            </div>
              
            <div>
            <Card className="singlecard img2"  >
               
               
                <Card.Text  className="textimage">
                <p >High<br/> Value <br/> Plots</p>
                </Card.Text>
               
            </Card>
            <div className="borderdown"></div>
            </div>


            <div>
            <Card className="singlecard img3"  >
               
                <Card.Text  className="textimage">
              
                <p>Luxury<br/> Duplex <br/> Villas</p>
                </Card.Text>
               
            </Card>
            <div className="borderdown"></div>
            </div>
            </CardDeck>
            {/* </CardColumns> */}
            
        </div>
    )
}
