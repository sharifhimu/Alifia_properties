import React from 'react'


import NavBar from '../component/Navbar/Navbar';
import High_value from '../component/High_value/High_value';
import Ready_properties from '../component/Ready_properties/Ready_properties';
import Lets_speak from '../component/Lets_speak/Lets_speak';
import Contact from '../component/Contact/Contact';
import Footer from '../component/Footer/Footer';


export default function LandingPage() {
    return (
        <div>
            <NavBar />
            <High_value />
            <Ready_properties />
            <Lets_speak />
            <Contact />
            <Footer />
        </div>
    )
}
