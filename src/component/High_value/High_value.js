import React from 'react'
import './High_value.css';
import {Image, Container} from 'react-bootstrap';
import highvalue from '../../image/highvalue.png';

export default function High_value() {
    return (
        <div style={{ margin: '9rem 0 0 0 ' }}>

            {/* <Container> */}
        
        <div className="highvaluetext">
            <h1>High Value Properties<br/>In the City of Tomorrow... </h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Excepturi molestiae, reprehenderit adipisci quam molestias 
                placeat velit cupiditate exercitationem officia. 
                Dolores repellendus rerum labore fugiat sit 
                maiores tempora harum deleniti voluptatem.
            </p>
        </div>
        <div className="bghighvalue" style={{  }}>
        <Image src={highvalue} fluid />
        </div>

        {/* </Container> */}

        </div>
    )
}
