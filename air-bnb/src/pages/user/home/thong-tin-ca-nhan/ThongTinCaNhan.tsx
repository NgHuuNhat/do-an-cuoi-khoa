// import React from 'react'
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { actGetPhongDaThue } from '../../../../store/store-thong-tin-ca-nhan/phong-da-thue-reducer/action';
import { PhongDaThue } from '../../../../store/store-thong-tin-ca-nhan/phong-da-thue-reducer/types';
import { actGetChiTietPhong } from '../../../../store/store-chi-tiet-phong/chi-tiet-phong-reducer/action';
import dayjs from 'dayjs'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { actPutThongTinCaNhan } from '../../../../store/store-thong-tin-ca-nhan/thong-tin-ca-nhan-reducer/action';
import Password from 'antd/es/input/Password';


const schema = yup.object().shape({
    avatar: yup.string(),
    name: yup.string().required('Vui lòng nhập tên'),
    email: yup.string().email('Email không đúng định dạng').required('Vui lòng nhập email'),
    password: yup.string(),
    phone: yup.string().matches(/^\+?(84|0)\d{9,10}$/, 'Số điện thoại không hợp lệ').required('Vui lòng nhập số điện thoại'),
    birthday: yup.string().required('Vui lòng nhập ngày sinh'),
    gender: yup.string().required('Vui lòng chọn giới tính'),
    role: yup.string(),
});

export default function ThongTinCaNhan() {
    const h3Ref = useRef<HTMLHeadingElement>(null);
    const dispatch: any = useDispatch();
    const { loading, data } = useSelector((state: any) => state.userReducer)
    const { dataPhongDaThue } = useSelector((state: any) => state.phongDaThueReducer)
    const navigate = useNavigate();
    const [phongDaThue, setphongDaThue] = useState(3);
    const [shouldScrollToH3, setShouldScrollToH3] = useState(true);
    const userDataLocal = JSON.parse(localStorage.getItem('data') || '{}')

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
            const maNguoiDung = data?.user?.id || ''; // Gán giá trị mặc định khi không tồn tại
            dispatch(actGetPhongDaThue(maNguoiDung))
        }
    }, [dispatch])

    const handleClick = (maPhong: any) => {
        dispatch(actGetChiTietPhong(maPhong));
        navigate(`/phong-thue/${maPhong}`);
    }

    const { register, handleSubmit, formState, reset, setValue } = useForm({
        defaultValues: {
            avatar: '',
            name: '',
            email: '',
            password: '',
            phone: '',
            birthday: '',
            gender: '',
            role: 'USER',
        },
        // @ts-expect-error ts(2554)
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        if (data && data.user) {
            reset({
                avatar: data?.user?.avatar || '',
                name: data?.user.name || '',
                email: data?.user.email || '',
                password: data?.user.password || '',
                phone: data?.user.phone || '',
                birthday: data?.user.birthday || '',
                gender: data?.user.gender ? 'true' : 'false',
                role: data?.user.role || '',
            });
        }
    }, [data, reset]);

    const onSubmit = (values: any) => {
        let btnClose = document.getElementById('btn-info-close')
        btnClose?.click()
        dispatch(actPutThongTinCaNhan(data?.user?.id, values));
        console.log("values", values)
    };

    // get img
    const [selectedImage, setSelectedImage] = useState<null | string>(null);
    const handleImageChange = (e: any) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
            setValue('avatar', imageUrl);
        }
    };
    const avatarSrc = selectedImage || (userDataLocal?.user?.avatar ? (userDataLocal?.user?.avatar) : 'https://i.pinimg.com/736x/bc/43/98/bc439871417621836a0eeea768d60944.jpg');

    console.log("userDataLocal", userDataLocal)

    return (
        <>
            {/* hien thi thong tin ca nhan */}
            <div className='container my-5'>
                <h6 ref={h3Ref}>Thông tin cá nhân</h6>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>

                    <div className='bg-light rounded p-3 col-span-1'>
                        <div className='w-40 h-40 mx-auto'>
                            <img style={{ objectFit: 'cover' }} className='rounded-full w-100 h-100' src={avatarSrc} alt="hinh-anh" />
                        </div>
                        <div>
                            <h6 className='text-center pt-1'>{userDataLocal?.user.name}</h6>
                            <div className='text-center my-3'>
                                <button className="navbar-toggler text-light px-3 rounded" data-toggle="modal" data-target="#updateForm" style={{ backgroundColor: '#fe6b6e' }} >Chỉnh sửa</button>
                            </div>
                            <hr />
                            <div className='grid grid-cols-4'>
                                <div className='col-span-1 grid'>
                                    <span >ID:</span>
                                    <span >Email:</span>
                                    {/* <span >Password:</span> */}
                                    <span >SĐT:</span>
                                    <span >Birthday:</span>
                                    <span >Gender:</span>
                                    <span >Role:</span>
                                </div>
                                <div className='col-span-3 ml-2'>
                                    <p className='mb-1'>{userDataLocal?.user.id}</p>
                                    <p className='mb-1'>{userDataLocal?.user.email}</p>
                                    {/* <p className='mb-1'>{userDataLocal?.user.password}</p> */}
                                    <p className='mb-1'>{userDataLocal?.user.phone}</p>
                                    <p className='mb-1'>{dayjs(userDataLocal?.user.birthday).format('DD-MM-YYYY')}</p>
                                    <p className='mb-1'>{userDataLocal?.user.gender === 'true' ? 'nam' : 'nữ'}</p>
                                    <p className='mb-1'>{userDataLocal?.user.role}</p>
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
            {/* <UpdateProfileForm /> */}


            {/* update form */}
            <>
                <div className="modal fade" id="updateForm" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel" style={{ color: '#fe6b6e' }}>Chỉnh sửa thông tin cá nhân</h5>
                                <button id='btn-info-close' type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">

                                {/* form put */}
                                <form onSubmit={handleSubmit(onSubmit)} >
                                    <div className='w-20 h-20 mx-auto mb-5 text-sm'>
                                        <img style={{ objectFit: 'cover' }} className='rounded-full w-100 h-100' src={avatarSrc} alt="hinh-anh" />
                                        <div className='text-center mt-2'>
                                            {/* Thêm một label để kích hoạt chọn ảnh */}
                                            <label htmlFor="avatarUpload" className="text-light span-hover p-1 px-2 rounded mx-auto" style={{ backgroundColor: '#fe6b6e', border: 'none' }}>
                                                Chọn ảnh
                                            </label>
                                            {/* Input type file ẩn, sẽ không hiển thị */}
                                            <input
                                                {...register('avatar')}
                                                type="file"
                                                id="avatarUpload"
                                                className="hidden"
                                                accept="image/*"
                                                onChange={handleImageChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group mb-0">
                                        <label htmlFor="email">Email</label>
                                        <input {...register('email')} type="email" className="form-control" placeholder="Enter email" />
                                        <span className='text-danger inline-block pl-1 text-sm'>{formState.errors.email?.message as any}</span>
                                    </div>
                                    <div className="form-group mb-0">
                                        <label htmlFor="password">Password</label>
                                        <input {...register('password')} type="password" className="form-control" placeholder="Enter password" />
                                        <span className='text-danger inline-block pl-1 text-sm'>{formState.errors.password?.message as any}</span>
                                    </div>
                                    <div className='grid grid-cols-2 gap-2'>
                                        <div className="form-group mb-0">
                                            <label htmlFor="name">Name</label>
                                            <input {...register('name')} type="text" className="form-control" placeholder="Enter name" />
                                            <span className='text-danger inline-block pl-1 text-sm'>{formState.errors.name?.message as any}</span>
                                        </div>
                                        <div className="form-group mb-0">
                                            <label htmlFor="phone">Phone</label>
                                            <input {...register('phone')} type="text" className="form-control" placeholder="Enter phone" />
                                            <span className='text-danger inline-block pl-1 text-sm'>{formState.errors.phone?.message as any}</span>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 gap-2'>
                                        <div className="form-group mb-0">
                                            <label htmlFor="birthday">Birthday</label>
                                            <input {...register('birthday')} type="date" className="form-control" placeholder="Enter birthday" />
                                            <span className='text-danger inline-block pl-1 text-sm'>{formState.errors.birthday?.message as any}</span>
                                        </div>
                                        <div className="form-group mb-0">
                                            <label htmlFor="gender">Gender</label>
                                            <select {...register('gender')} defaultValue='' name="gender" className="form-control"  >
                                                <option value='' disabled hidden className='cursor-pointer'>Chọn</option>
                                                <option value='true' className='cursor-pointer'>Nam</option>
                                                <option value='false' className='cursor-pointer'>Nữ</option>
                                            </select>
                                            <span className='text-danger inline-block pl-1 text-sm'>{formState.errors.gender?.message as any}</span>
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-dark w-100" style={{ backgroundColor: '#fe6b6e', border: 'none' }}>
                                        {loading ? (<div className="spinner-border spinner-border-sm"></div>) : 'Cập Nhật'}
                                    </button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}
