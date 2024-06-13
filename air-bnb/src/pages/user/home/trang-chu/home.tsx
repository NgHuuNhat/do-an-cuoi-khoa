import React, { useEffect, useRef, useState } from 'react'
import Header from '../_components/Header'
import Footer from '../_components/Footer'
import Carousel from './Carousel';

export default function Home() {

    return (
        <>
            <Header />
            <Carousel />
            <Footer />
        </>
    )
}
