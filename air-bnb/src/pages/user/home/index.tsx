import React, { useEffect } from 'react'
import Header from './_components/Header'
import Footer from './_components/Footer'
import { useDispatch, useSelector } from 'react-redux';
import { actGetUserLogin } from '../auth/duck/action';
import Carousel from './outlet/Carousel';

export default function Home() {
    const dispatch: any = useDispatch();

    useEffect(() => {
        dispatch(actGetUserLogin());
    })

    return (
        <div>
            <Header />
            <Carousel />
            <Footer />
        </div>
    )
}
