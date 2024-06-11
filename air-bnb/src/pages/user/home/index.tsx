import React, { useEffect, useRef, useState } from 'react'
import Header from './_components/Header'
import Footer from './_components/Footer'
import Carousel from './outlet/Carousel';
import Card from './outlet/Card';
import { useDispatch } from 'react-redux';
import { actGetUserLogin } from '../auth/_duck/action';

export default function Home() {
    // const dispatch: any = useDispatch();
    // useEffect(() => {
    //     dispatch(actGetUserLogin());
    // }, [dispatch])

    return (
        <div className="home-container">
            <Header />
            <Carousel />
            {/* <div className='grid grid-cols-2'>
                <div className='col-span-1'><Card/></div>
                <div className='col-span-1'><Card/></div>
            </div> */}
            <Footer />
        </div>
    )
}
