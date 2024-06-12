import React, { useEffect, useRef, useState } from 'react'
import Header from './_components/Header'
import Footer from './_components/Footer'
import Carousel from './outlet/Carousel';

export default function Home() {

    return (
        <div className="home-container">
            <Header />
            <Carousel />
            <Footer />
        </div>
    )
}
