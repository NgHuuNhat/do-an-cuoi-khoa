import React, { useEffect, useState } from 'react'
import Header from '../_components/header/Header'
import Footer from '../_components/footer/Footer'
import Carousel from './carousel/Carousel';
import Search from './search/Search';
import KhamPha from './kham-pha/KhamPha';
import OBatCuDau from './o-bat-cu-dau/OBatCuDau';
import MoveTop from './btn-move-top/MoveTop';
import SearchDemo from './search-demo/SearchDemo';
import Menu from './menu/Menu';

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
            <div id='body' style={{ marginTop: `${headerHeight + 50}px` }}>
                {/* <Search /> */}
                <SearchDemo />
                <Menu />
                <KhamPha />
                <Carousel />
                <OBatCuDau />
                <Footer />
                <MoveTop />
            </div>
        </>
    )
}
