import React from 'react'
import Header from './_components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './_components/Footer'

export default function Home() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
