// import React from 'react'
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { object } from 'yup';
import { actGetPhongDaThue } from '../../../../store/store-thong-tin-ca-nhan/phong-da-thue-reducer/action';
import { PhongDaThue } from '../../../../store/store-thong-tin-ca-nhan/phong-da-thue-reducer/types';
import { actGetChiTietPhong } from '../../../../store/store-chi-tiet-phong/chi-tiet-phong-reducer/action';
import dayjs from 'dayjs'
import { PhongThue } from '../../../../store/store-danh-sach-phong/danh-sach-phong-reducer/types';
import Register from '../../auth/register/Register';
import UpdateProfileForm from './UpdateProfileForm';

export default function ThongTinCaNhan() {
    const h3Ref = useRef<HTMLHeadingElement>(null);
    const location = useLocation();
    const dispatch: any = useDispatch();
    const { data } = useSelector((state: any) => state.userReducer)
    const { dataPhongDaThue } = useSelector((state: any) => state.phongDaThueReducer)
    const { dataChiTietPhong } = useSelector((state: any) => state.chiTietPhongReducer)
    const navigate = useNavigate();
    const scrollPositionRef = useRef<number>(0); // Ref to store scroll position
    const [phongDaThue, setphongDaThue] = useState(3);
    const [shouldScrollToH3, setShouldScrollToH3] = useState(true);

    //click -> scroll to danh sach phong
    useEffect(() => {
        if (h3Ref.current && shouldScrollToH3) {
            const h3Rect = h3Ref.current.getBoundingClientRect();
            const topPosition = h3Rect.top + window.pageYOffset - 60;
            window.scrollTo({ top: topPosition, behavior: 'smooth' });
        }
    }, [shouldScrollToH3]);


    const handelHienThiThem = () => {
        setphongDaThue(prevCount => prevCount + 3);
        setShouldScrollToH3(false); // Ngăn không scroll đến h3 khi nhấp vào nút "Hiển thị thêm"
    };

    const handleThuGon = () => {
        setphongDaThue(3);
        setShouldScrollToH3(false); // Ngăn không scroll đến h3 khi nhấp vào nút "Thu gọn"
    };

    useEffect(() => {
        if (data?.user?.id) {
            const maNguoiDung = data?.user?.id
            dispatch(actGetPhongDaThue(maNguoiDung))
        }
    }, [dispatch])

    const handleClick = (maPhong: any) => {
        dispatch(actGetChiTietPhong(maPhong));
        navigate(`/phong-thue/${maPhong}`);
    }

    return (
        <>

            <div className='container my-5'>
                <h6 ref={h3Ref}>Thông tin cá nhân</h6>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
                    <div className='bg-light rounded p-3 col-span-1'>
                        <div className='w-40 h-40 mx-auto'><img style={{ objectFit: 'cover' }} className='rounded-full w-100 h-100' src={data?.user?.avatar ? (`${data?.user?.avatar}`) : 'https://i.pinimg.com/736x/bc/43/98/bc439871417621836a0eeea768d60944.jpg'} alt="hinh-anh" /></div>
                        <div>
                            <h6 className='text-center pt-1'>{data?.user?.name}</h6>
                            <div className='text-center my-3'>
                                <button className="navbar-toggler text-light px-3 rounded" data-toggle="modal" data-target="#updateForm" style={{ backgroundColor: '#fe6b6e' }} >Chỉnh sửa</button>
                            </div>
                            <hr />
                            <div className='grid grid-cols-4'>
                                <div className='col-span-1 grid'>
                                    <span >Email:</span>
                                    <span >SĐT:</span>
                                    <span >Birthday:</span>
                                    <span >Gender:</span>
                                    <span >Role:</span>
                                </div>
                                <div className='col-span-3 ml-2'>
                                    <p className='mb-1'>{data?.user?.email}</p>
                                    <p className='mb-1'>{data?.user?.phone}</p>
                                    <p className='mb-1'>{dayjs(data?.user?.birthday).format('DD-MM-YYYY')}</p>
                                    <p className='mb-1'>{data?.user?.gender ? 'Nam' : "Nữ"}</p>
                                    <p className='mb-1'>{data?.user?.role}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-light p-3 col-span-1 lg:col-span-2 rounded'>
                        <h6>Phòng đã thuê ({dataPhongDaThue?.length})</h6>
                        <div style={{ minHeight: '500px', maxHeight: '500px', overflowY: 'auto' }}>
                            <div className='grid grid-cols-2 lg:grid-cols-3 gap-1'>
                                {/* phong da thue */}
                                {dataPhongDaThue?.slice(0, phongDaThue).map((item: PhongDaThue, index: number) => (
                                    (
                                        // item phong da thue
                                        <div id='item' key={index} data-aos="flip-left" className="aos-init aos-animate">
                                            <div className="custom-shadow p-2 rounded ant-card ant-card-bordered ant-card-hoverable w-full css-mzwlov">
                                                <div id='' onClick={() => handleClick(item.maPhong)} className="ant-card-body cursor">
                                                    <div className="ant-card-meta">
                                                        <div className="ant-card-meta-detail">
                                                            <p className="text-sm text-dark p-0 m-0">STT: {index + 1}</p>
                                                            <p className="text-sm text-dark p-0 m-0">ID: {item.id}</p>
                                                            <p className='text-sm text-dark p-0 m-0'>Mã người dùng: {item.maNguoiDung}</p>
                                                            <p className='text-sm text-dark p-0 m-0'>Mã phòng: {item.maPhong}</p>
                                                            <p className='text-sm text-dark p-0 m-0'>Ngày đến: {dayjs(item.ngayDen).format('DD-MM-YYYY')}</p>
                                                            <p className='text-sm text-dark p-0 m-0'>Ngày đi: {dayjs(item.ngayDi).format('DD-MM-YYYY')}</p>
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
                        {dataPhongDaThue?.length > phongDaThue && (
                            <button type="button" className="btn btn-link outline-0 border-0" onClick={handelHienThiThem}>
                                Hiển thị thêm
                            </button>
                        )}

                        {phongDaThue > 3 && (
                            <button type="button" className="btn btn-link outline-0 border-0" onClick={handleThuGon}>
                                Thu gọn
                            </button>
                        )}

                    </div>
                </div>
            </div >
            <UpdateProfileForm />
        </>
    )
}
