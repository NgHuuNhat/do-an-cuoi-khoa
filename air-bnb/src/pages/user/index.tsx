import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './home/_components/footer/Footer';
import MoveTop from './home/trang-chu/btn-move-top/MoveTop';
import Header from './home/_components/header/Header';
import SearchDemo from './home/trang-chu/search-demo/SearchDemo';
import Menu from './home/trang-chu/menu/Menu';
import KhamPha from './home/trang-chu/kham-pha/KhamPha';

export default function IndexUser() {
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
                <SearchDemo />
                <Menu />
                <Outlet />
                <Footer />
                <MoveTop />
            </div>
        </>
    )
}
