import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actClearError, actClearSuccess, actPostUserLogin } from '../_duck/action';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLocation } from 'react-router-dom';

const schema = yup.object({
    email: yup
        .string()
        .required('Vui lòng nhập email!')
        .email('email không đúng định dạng!'),
    password: yup
        .string()
        .required('Vui lòng nhập password!'),
});

export default function LoginForm() {
    const dispatch: any = useDispatch();
    const location = useLocation();
    const { loading, data, error } = useSelector((state: any) => state.userReducer);
    const navigate = useNavigate();
    const [loginSuccess, setLoginSuccess] = useState(false); // State để xác định trạng thái đăng nhập thành công

    useEffect(() => {
        // Xóa dữ liệu đăng ký khi chuyển sang trang mới
        dispatch(actClearError());
        dispatch(actClearSuccess());
    }, [dispatch, location.pathname]);

    const { register, handleSubmit, formState, reset } = useForm<any>({
        defaultValues: {
            email: '',
            password: ''
        },
        // @ts-expect-error ts(2554)
        resolver: yupResolver(schema),
        criteriaMode: 'all',
    });

    const onSubmit = (values: any) => {
        dispatch(actPostUserLogin(values));
    }

    useEffect(() => {
        if (data && data.user) {
            setLoginSuccess(true); // Đánh dấu đăng nhập thành công
            if (data.user.role === 'ADMIN') {
                navigate('/admin');
            } else {
                navigate('/');
            }
        }
    }, [data, navigate])

    useEffect(() => {
        // Khi trạng thái đăng nhập thành công thay đổi, thực hiện xóa class và style
        if (loginSuccess) {
            document.body.classList.remove('modal-open');
            document.body.style.paddingRight = '';
            const modalBackdrop = document.querySelector('.modal-backdrop');
            if (modalBackdrop) {
                modalBackdrop.remove();
            }
        }
    }, [loginSuccess]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} action="/action_page.php">
            <div className="form-group">
                <label htmlFor="email">Email address:</label>
                <input {...register('email')} type="text" className="form-control" placeholder="Enter email" id="emailLogin" />
                <span className='text-danger inline-block pl-1 text-sm'>{formState.errors.email?.message as any}</span>
            </div>
            <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input {...register('password')} type="password" className="form-control" placeholder="Enter password" id="pwdLogin" />
                <span className='text-danger inline-block pl-1 text-sm'>{formState.errors.password?.message as any}</span>
            </div>
            <div className="form-group form-check">
                <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" /> Remember me
                </label>
            </div>
            <button type="submit" className="btn btn-primary">
                {loading ? (<div className="spinner-border spinner-border-sm"></div>) : 'Submit'}
            </button>
        </form>
    )
}
