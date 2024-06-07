import React, { useEffect, useState, } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { actPostUserLogin } from './duck/action';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Alert from './Alert';

const schema = yup.object({
    email: yup
        .string()
        .required('Vui lòng nhập email!')
        .email('email không đúng định dạng!'),
    password: yup
        .string()
        .required('Vui lòng nhập password!'),
});

export default function Login() {
    const dispatch: any = useDispatch();
    const { loading, data, error } = useSelector((state: any) => state.userReducer);
    const navigate = useNavigate();
    const [showAlert, setShowAlert] = useState(false);

    const { register, handleSubmit, formState } = useForm<any>({
        defaultValues: { email: '', password: '' },
        // @ts-expect-error ts(2554)
        resolver: yupResolver(schema),
        criteriaMode: 'all',
    });

    const email = register('email');
    const password = register('password');

    useEffect(() => {
        console.log("errors", formState.errors)
    }, [formState]);

    const onSubmit = (values: any) => {
        console.log("values", values)
        dispatch(actPostUserLogin(values));
    }

    // useEffect(() => {
    //     if (error) {
    //         // Hiển thị alert khi có lỗi
    //         setShowAlert(true);
    //         // Tự động ẩn alert sau 3 giây
    //         setTimeout(() => {
    //             setShowAlert(false);
    //         }, 1000);
    //     }
    // }, [error]);

    useEffect(() => {
        if (data && data.user) {
            if (data.user.role === 'ADMIN') {
                return navigate('/admin');
            }
            navigate('/');
        }
    }, [data])

    return (
        <>
            {/* {showAlert && (
                <div className="absolute top-0 left-0 bg-opacity-50 z-50 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 rounded-lg" role="alert">
                    <span className="font-medium">Login thất bại!</span> Sai email hoặc password!.
                </div>
            )} */}
            {error && <Alert message="Login thất bại!" type="error" onClose={() => { }} />}

            <div className="bg-login flex justify-center items-center min-h-screen">

                <div className="p-4 bg-white shadow-md rounded w-full max-w-md">
                    <h2 className="text-3xl font-bold mb-6 text-center text-white">
                        <span className="text-dark bg-gradient-to-r text-transparent from-blue-500 to-purple-500 bg-clip-text">
                            Login
                        </span>
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                <i className="fas fa-envelope mr-2" />Email
                            </label>
                            <div>
                                <input id="email" type="text"
                                    {...register('email')}
                                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email" />
                                {formState.errors.email?.message && (<span className='text-danger pl-1'>{formState.errors.email?.message as any}</span>)}
                            </div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                                <i className="fas fa-lock mr-2" />Password
                            </label>
                            <div>
                                <input id="password" type="password"
                                    {...register('password')}
                                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your password" />
                                {formState.errors.password?.message && (<span className='text-danger pl-1'>{formState.errors.password?.message as any}</span>)}

                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <button disabled={loading} type="submit" className="bg-dark from-blue-500 to-purple-500 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                                {loading ? (<div className="spinner-border"></div>) : 'Login'}
                            </button>
                        </div>
                        <div className="text-center mt-4">
                            <a href="#" className="text-gray-600 hover:underline">Forgot password?</a>
                        </div>
                    </form>
                    <p className="text-center text-gray-600 mt-6">Don't have an account? <NavLink to="/register" className="text-blue-500 hover:underline">Sign up</NavLink></p>
                    <div className="mt-4">
                        <p className="text-center text-gray-600">Or log in with:</p>
                        <div className="flex justify-center mt-2">
                            <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a href="#" className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mx-2">
                                <i className="fab fa-twitter" />
                            </a>
                            <a href="#" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2">
                                <i className="fab fa-google" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
