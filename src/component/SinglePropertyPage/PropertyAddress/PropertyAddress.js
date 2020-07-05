import React from 'react'
import {Container} from 'react-bootstrap';
import './PropertyAddress.css';


import {MdKeyboardArrowRight} from 'react-icons/md';
import {MdLocationOn} from 'react-icons/md';

export default function PropertyAddress() {
    return (
        <div style={{ margin: '9rem 0 0 0' }}>

            <Container className="single-property-container">
            
            <div className="property-address">
                <h1>Keraniganj, Dhaka</h1>
                
                </div>

                <div className="property-address-2">
                 <h4> <MdLocationOn style={{ margin: '0 15px 0 0' }} /> Dhaka </h4>  

                 <div className="property-address-link"> 
                <a href="/">  Home </a> <MdKeyboardArrowRight className="right-arrow"  /> 
                <a href="/property" style={{ color: 'rgba(0,0,0,.5)' }}> Properties </a> 
                <MdKeyboardArrowRight className="right-arrow"  />
                <a href="/singleproperty" style={{ color: 'rgba(0,0,0,.3)' }}> Property Details </a> 

                </div>
                </div>

                </Container>

        </div>
    )
}
