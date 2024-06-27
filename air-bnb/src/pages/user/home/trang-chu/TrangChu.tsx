import React, { useEffect, useState } from 'react'
import Carousel from './carousel/Carousel';
import KhamPha from './kham-pha/KhamPha';
import OBatCuDau from './o-bat-cu-dau/OBatCuDau';

export default function TrangChu() {
    return (
        <>
            <KhamPha />
            <Carousel />
            <OBatCuDau />
        </>
    )
}
