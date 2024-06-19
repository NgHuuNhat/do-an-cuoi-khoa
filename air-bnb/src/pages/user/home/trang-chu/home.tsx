import React, { useEffect, useState } from 'react'
import Carousel from './carousel/Carousel';
import KhamPha from './kham-pha/KhamPha';
import OBatCuDau from './o-bat-cu-dau/OBatCuDau';
import SearchDemo from './search-demo/SearchDemo';
import Menu from './menu/Menu';

export default function Home() {
    return (
        <>
            <KhamPha />
            <Carousel />
            <OBatCuDau />
        </>
    )
}
