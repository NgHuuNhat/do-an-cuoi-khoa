import React, { useEffect, useState } from 'react'
import Carousel from './carousel/Carousel';
import KhamPha from './kham-pha/KhamPha';
import OBatCuDau from './o-bat-cu-dau/OBatCuDau';
import { useDispatch, useSelector } from 'react-redux';
import { actGetUserLogin } from '../../../../store/store-trang-chu/user-reducer/action';

export default function TrangChu() {
    const dispatch: any = useDispatch();
    const { loading, data } = useSelector((state: any) => state.userReducer)

    useEffect(() => {
        dispatch(actGetUserLogin())
    }, [dispatch])

    console.log(data)
    return (
        <>
            <KhamPha />
            <Carousel />
            <OBatCuDau />
        </>
    )
}
