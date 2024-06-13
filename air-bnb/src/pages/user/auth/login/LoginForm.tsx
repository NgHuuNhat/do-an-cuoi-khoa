import React, { useEffect } from 'react';
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

    useEffect(() => {
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
            let btnClose = document.getElementById('btn-close')
            btnClose?.click()
            if (data.user.role === 'ADMIN') {
                navigate('/admin');
            } else {
                navigate('/');
            }
        }
    }, [data, navigate])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mb-0">
                <label htmlFor="email">Email address:</label>
                <input {...register('email')} type="text" className="form-control" placeholder="Enter email" id="emailLogin" />
                <span className='text-danger inline-block pl-1 text-sm'>{formState.errors.email?.message as any}</span>
            </div>
            <div className="form-group mb-0">
                <label htmlFor="pwd">Password:</label>
                <input {...register('password')} type="password" className="form-control" placeholder="Enter password" id="pwdLogin" />
                <span className='text-danger inline-block pl-1 text-sm'>{formState.errors.password?.message as any}</span>
            </div>
            <div className="form-group form-check">
                <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" /> Remember me
                </label>
            </div>
            <button type="submit" className="btn btn-primary w-100" >
                {loading ? (<div className="spinner-border spinner-border-sm"></div>) : 'Submit'}
            </button>
        </form>
    )
}
