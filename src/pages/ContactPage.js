import React from 'react'

import Navbar from '../component/LandingPage/Navbar/Navbar';
import ContactCarousel from '../component/ContactPage/ContactCarousel/ContactCarousel';
import Direction from '../component/ContactPage/Direction/Direction';
import AddressSection from '../component/ContactPage/AddressSection/AddressSection';
import Footer from '../component/LandingPage/Footer/Footer';

export default function ContactPage() {
    return (
        <div>
            <Navbar />
            <ContactCarousel />
            <Direction />
            <AddressSection />
            <Footer />

        </div>
    )
}
