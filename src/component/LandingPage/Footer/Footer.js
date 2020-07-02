import React from 'react'
import { Container } from 'react-bootstrap'

import './Footer.css';

export default function Footer() {
    return (
        <div className="footerbg" >
            <Container >

                <div className="footertext" >
            <p style={{ color: '#FFE9B1' }}> &copy;Copyright 2020,Alifia Properties LTD. &nbsp;&nbsp;</p>
            <p style={{ color: '#FFE9B1' }}> Designed by Beatnik Technologies  </p>
            
            </div>
            </Container>
        </div>
    )
}
