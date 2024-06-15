import React, { useEffect, useState } from 'react'
import Header from '../_components/Header'
import Footer from '../_components/Footer'
import Carousel from './Carousel';
import Search from './Search';

export default function Home() {
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        const header = document.getElementById('header');
        if (header) {
            const height = header.clientHeight;
            setHeaderHeight(height);
        }
    }, [])

    return (
        <>
            <Header />
            <div id='body' style={{ marginTop: `${headerHeight}px` }}>
                <Search />
                <Carousel />
                <Footer />
            </div>
        </>
    )
}
