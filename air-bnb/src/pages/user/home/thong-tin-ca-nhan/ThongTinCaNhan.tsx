// import React from 'react'
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { object } from 'yup';
import { actGetPhongDaThue } from '../../../../store/store-thong-tin-ca-nhan/phong-da-thue-reducer/action';
import { PhongDaThue } from '../../../../store/store-thong-tin-ca-nhan/phong-da-thue-reducer/types';
import { actGetChiTietPhong } from '../../../../store/store-chi-tiet-phong/chi-tiet-phong-reducer/action';
import dayjs from 'dayjs'

export default function ThongTinCaNhan() {
    const h3Ref = useRef<HTMLHeadingElement>(null);
    const location = useLocation();
    const dispatch: any = useDispatch();
    const { data } = useSelector((state: any) => state.userReducer)
    const { dataPhongDaThue } = useSelector((state: any) => state.phongDaThueReducer)
    const navigate = useNavigate();


    //click -> scroll to danh sach phong
    useEffect(() => {
        if (h3Ref.current) {
            const h3Rect = h3Ref.current.getBoundingClientRect();
            const topPosition = h3Rect.top + window.pageYOffset - 60;
            window.scrollTo({ top: topPosition, behavior: 'smooth' });
        }
    });

    useEffect(() => {
        if (data?.user?.id) {
            const maNguoiDung = data?.user?.id
            dispatch(actGetPhongDaThue(maNguoiDung))
        }

    }, [dispatch])

    const handleClick = (maPhong: any) => {
        // console.log("click");
        // console.log(id);
        dispatch(actGetChiTietPhong(maPhong));
        navigate(`/phong-thue/${maPhong}`);
    }

    console.log(data)
    console.log(dataPhongDaThue)

    return (
        <>
            <div className='container my-5'>
                <h6 ref={h3Ref}>Thông tin cá nhân</h6>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
                    <div className='bg-light rounded p-3 col-span-1'>
                        <div className='w-40 h-40 mx-auto'><img style={{ objectFit: 'cover' }} className='rounded-full w-100 h-100' src="https://cdn.dribbble.com/users/3495372/screenshots/7137410/media/44410f9a2a5a4225d1677a57b16dc924.png?resize=768x576&vertical=center" alt="hinh-anh" /></div>
                        <div>
                            <h6 className='text-center pt-1'>Nguyen Huu Nhat</h6>
                            <div className='text-center my-3'> <button style={{ backgroundColor: '#fe6b6e' }} className='text-light px-3 rounded'>Chỉnh sửa</button> </div>
                            <hr />
                            <div className='grid grid-cols-4'>
                                <div className='col-span-1 grid'>
                                    <span >Email:</span>
                                    <span >SĐT:</span>
                                    <span >Birthday:</span>
                                    <span >Gender:</span>
                                </div>
                                <div className='col-span-3 ml-2'>
                                    <p className='mb-1'>nhat200901@gmail.com</p>
                                    <p className='mb-1'>0985627061</p>
                                    <p className='mb-1'>20/09/2001</p>
                                    <p className='mb-1'>Nam</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-light p-3 col-span-1 lg:col-span-2'>
                        <h6>Phòng đã thuê ({dataPhongDaThue?.length})</h6>
                        <div>
                            {dataPhongDaThue?.map((item: PhongDaThue, index: number) => (
                                (

                                    <div id='item' key={index} data-aos="flip-left" className="aos-init aos-animate">
                                        <div className="custom-shadow p-2 rounded ant-card ant-card-bordered ant-card-hoverable w-full css-mzwlov">

                                            <div className="height-250 ant-card-cover w-100 h-100">
                                                <div id={`demo${index}`} className="carousel slide h-100" data-ride="carousel">
                                                    {/* Indicators */}
                                                    <ul className="carousel-indicators">
                                                        <li data-target={`#demo${index}`} data-slide-to={0} className="active" />
                                                        <li data-target={`#demo${index}`} data-slide-to={1} />
                                                        <li data-target={`#demo${index}`} data-slide-to={2} />
                                                    </ul>
                                                    {/* The slideshow */}
                                                    <div className="carousel-inner h-100">
                                                        <div className="h-100 carousel-item active">
                                                            <img onClick={() => handleClick(item.maPhong)} style={{ objectFit: 'cover' }} className='rounded w-100 h-100' alt="Los Angeles" />
                                                        </div>
                                                        <div className="h-100 carousel-item">
                                                            <img onClick={() => handleClick(item.maPhong)} style={{ objectFit: 'cover' }} className='rounded w-100 h-100' alt="Chicago" />
                                                        </div>
                                                        <div className="h-100 carousel-item">
                                                            <img onClick={() => handleClick(item.maPhong)} style={{ objectFit: 'cover' }} className='rounded w-100 h-100' alt="New York" />
                                                        </div>
                                                    </div>
                                                    {/* Left and right controls */}
                                                    <a className="carousel-control-prev" href={`#demo${index}`} data-slide="prev">
                                                        <span className="carousel-control-prev-icon" />
                                                    </a>
                                                    <a className="carousel-control-next" href={`#demo${index}`} data-slide="next">
                                                        <span className="carousel-control-next-icon" />
                                                    </a>
                                                </div>
                                            </div>

                                            <div id='' onClick={() => handleClick(item.maPhong)} className="ant-card-body cursor">
                                                <div className="ant-card-meta">
                                                    <div className="ant-card-meta-detail">
                                                        <div className="ant-card-meta-title p-0 m-0 mt-2">Buon Ma Thuot</div>
                                                        <p className='text-sm text-dark p-0 m-0'> 5 khách - 2 phòng ngủ- 2 phòng tắm</p>
                                                        <div className='grid grid-cols-12'>
                                                            <p className='col-span-11 text-sm text-dark font-weight-bold'> 10 $ / đêm</p>
                                                            <p id='icon-yeu-thich' className='text-center'><i id='icon' className="fa-solid fa-heart"></i></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ant-card-meta">
                                                    <div className="ant-card-meta-detail">
                                                        <p className="text-sm text-dark p-0 m-0">ID: {item.id}</p>
                                                        <p className='text-sm text-dark p-0 m-0'>Mã người dùng: {item.maNguoiDung}</p>
                                                        <p className='text-sm text-dark p-0 m-0'>Mã phòng: {item.maPhong}</p>
                                                        <p className='text-sm text-dark p-0 m-0'>  Ngày đến: {dayjs(item.ngayDen).format('DD-MM-YYYY')} - Ngày đi: {dayjs(item.ngayDi).format('DD-MM-YYYY')}</p>
                                                        <p className='text-sm text-dark p-0 m-0'>Số lượng khách: {item.soLuongKhach}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            ))}

                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}
