import React from 'react'


import NavBar from '../component/LandingPage/Navbar/Navbar';
import Carouselpart from '../component/LandingPage/Carousel/Carouselpart';
import High_value from '../component/LandingPage/High_value/High_value';
import Ready_properties from '../component/LandingPage/Ready_properties/Ready_properties';
import Lets_speak from '../component/LandingPage/Lets_speak/Lets_speak';
import Contact from '../component/LandingPage/Contact/Contact';
import Footer from '../component/LandingPage/Footer/Footer';

import img1 from '../image/bg1.png';

export default function LandingPage() {
    return (
        <div>
            <NavBar />
            <Carouselpart />
            <High_value />
            <Ready_properties />
            <Lets_speak />
            <Contact />
            <Footer />
        </div>
    )
}
