import React, { useEffect } from 'react'
import Header from './_components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './_components/Footer'

import { useDispatch, useSelector } from 'react-redux';
import { actGetUserLogin } from '../auth/duck/action';

export default function Home() {
    const dispatch: any = useDispatch();

    useEffect(()=>{
        dispatch(actGetUserLogin());
    })

    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
