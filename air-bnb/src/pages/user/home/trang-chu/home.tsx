import React, { useEffect, useRef, useState } from 'react'
import Header from '../_components/Header'
import Footer from '../_components/Footer'
import Carousel from './Carousel';
import Search from './Search';

export default function Home() {
    const [headerHeight, setHeaderHeight] = useState(0); // State để lưu chiều cao của header

    // Sử dụng useEffect để lấy chiều cao của header khi component được mount
    useEffect(() => {
        const header = document.getElementById('header'); // Lấy element của header bằng id
        if (header) {
            const height = header.clientHeight; // Lấy chiều cao của header
            setHeaderHeight(height); // Lưu chiều cao vào state
        }
    }, []); // Chỉ chạy một lần sau khi component mount

    return (
        <>
            <Header />
            {/* Sử dụng margin-top với chiều cao của header */}
            <div id='body' style={{ marginTop: `${headerHeight}px` }}>
                {/* Nội dung của trang */}
                <Search />
                <Carousel />
                <Footer />
            </div>
        </>
    )
}
