import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { actClearError, actClearSuccess, actPostUserReister } from '../_duck/action';
import Alert from '../alert/Alert';
import { useLocation } from 'react-router-dom';

const schema = yup.object({
    name: yup.string().required('Vui lòng nhập name!'),
    email: yup
        .string()
        .required('Vui lòng nhập email!')
        .email('email không đúng định dạng!'),
    password: yup
        .string()
        .required('Vui lòng nhập password!'),
    // .min(8, 'Mật khẩu phải có ít nhất 8 ký tự!'),
    confirmPassword: yup
        .string()
        .required('Vui lòng nhập lại password!')
        .test('passwords-match', 'Mật khẩu không khớp!', function (value) {
            return value === this.resolve(yup.ref('password'));
        }),
    phone: yup
        .string()
        .required('Vui lòng nhập phone!')
        .matches(/^\+?(84|0)\d{9,10}$/, 'Số điện thoại không hợp lệ!'),
    birthday: yup.string().required('Vui lòng nhập birthday!'),
    gender: yup.string().required('Vui lòng chọn gender!'),
});

export default function DangKyForm() {
    const dispatch: any = useDispatch();
    const location = useLocation();
    const { loading, data, error } = useSelector((state: any) => state.userReducer);

    useEffect(() => {
        // Xóa dữ liệu đăng ký khi chuyển sang trang mới
        dispatch(actClearError());
        dispatch(actClearSuccess());
    }, [dispatch, location.pathname]); 

    const { register, handleSubmit, formState, reset } = useForm<any>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            phone: '',
            birthday: '',
            gender: '',
        },
        // @ts-expect-error ts(2554)
        resolver: yupResolver(schema),
        criteriaMode: 'all',
    });

    const name = register('name');
    const email = register('email');
    const password = register('password');
    const phone = register('phone');
    const birthday = register('birthday');
    const gender = register('gender');

    useEffect(() => {
    }, [formState]);

    const onSubmit = (values: any) => {
        const { confirmPassword, ...user } = values;
        console.log("user", user);
        dispatch(actPostUserReister(user));
    }

    return (
        <>
            {error && <Alert message="Email đã tồn tại!" type="error" onClose={() => { }} />}
            {data && <Alert message="Đăng ký thành công!" type="success" onClose={() => { }} />}

            <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-2 gap-2 col-sm-9 col-md-6'>
                <div className="form-group my-0">
                    <label htmlFor="name">Name</label>
                    <input {...register('name')} type="text" className="form-control" placeholder="Enter name" id="name" />
                    <span className='text-danger inline-block pl-1 text-sm'>{formState.errors.name?.message as any}</span>
                </div>
                <div className="form-group my-0">
                    <label htmlFor="email">Email</label>
                    <input {...register('email')} type="email" className="form-control" placeholder="Enter email" id="email" />
                    <span className='text-danger inline-block pl-1 text-sm'>{formState.errors.email?.message as any}</span>
                </div>
                <div className="form-group my-0">
                    <label htmlFor="pwd">Password</label>
                    <input {...register('password')} type="password" className="form-control" placeholder="Enter password" id="pwd" />
                    <span className='text-danger inline-block pl-1 text-sm'>{formState.errors.password?.message as any}</span>
                </div>
                <div className="form-group my-0">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input {...register('confirmPassword')} type="password" className="form-control" placeholder="Enter password" id="confirmPassword" />
                    <span className='text-danger inline-block pl-1 text-sm'>{formState.errors.confirmPassword?.message as any}</span>
                </div>
                <div className="form-group my-0">
                    <label htmlFor="phone">Phone</label>
                    <input {...register('phone')} type="text" className="form-control" placeholder="Enter phone" id="phone" />
                    <span className='text-danger inline-block pl-1 text-sm'>{formState.errors.phone?.message as any}</span>
                </div>
                <div className="form-group my-0">
                    <label htmlFor="birthday">Birthday</label>
                    <input {...register('birthday')} type="date" className="form-control" placeholder="Enter birthday" id="birthday" />
                    <span className='text-danger inline-block pl-1 text-sm'>{formState.errors.birthday?.message as any}</span>
                </div>
                <div className="form-group my-0">
                    <label htmlFor="gender">Gender</label>
                    <select {...register('gender')} defaultValue='' name="gender" id="gender" className="cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 test-xs sm:text-xs rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
                        <option value='' disabled hidden className='cursor-pointer'></option>
                        <option value='true' className='cursor-pointer'>Nam</option>
                        <option value='false' className='cursor-pointer'>Nữ</option>
                    </select>
                    <span className='text-danger inline-block pl-1 text-sm'>{formState.errors.gender?.message as any}</span>
                </div>

                <button type="submit" className="btn btn-primary w-100 col-span-2">
                    {loading ? (<div className="spinner-border spinner-border-sm"></div>) : 'Tạo tài khoản'}
                </button>
            </form>
        </>

    );
}
