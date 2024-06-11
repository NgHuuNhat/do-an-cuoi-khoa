import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { actPostUserReister } from './_duck/action';
import Alert from './alert/Alert';

const schema = yup.object({
  name: yup.string().required('Vui lòng nhập name!'),
  email: yup
    .string()
    .required('Vui lòng nhập email!')
    .email('email không đúng định dạng!'),
  password: yup
    .string()
    .required('Vui lòng nhập password!')
    .min(8, 'Mật khẩu phải có ít nhất 8 ký tự!'),
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

export default function Register(props: any) {
  const { onClose, onClickLogin } = props;
  const dispatch: any = useDispatch();
  const { loading, data, error } = useSelector((state: any) => state.userReducer);

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

      <div className="absolute top-0 left-0 w-full min-h-full bg-black bg-opacity-50 flex justify-center items-center">
        <div className="position-relative w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <button onClick={onClose} type="submit" className="position-absolute top-0 end-0 bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6" action="#">
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2'>
                <div className='col-span-1'>
                  <div className='my-0'>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input {...register('name')} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                    <span className='text-danger inline-block pl-1 text-sm'>{formState.errors.name?.message as any}</span>
                  </div>
                  <div className='my-0'>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input {...register('password')} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    <span className='text-danger inline-block pl-1 text-sm'>{formState.errors.password?.message as any}</span>
                  </div>
                  <div className='my-0'>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                    <input {...register('phone')} type="text" name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                    <span className='text-danger inline-block pl-1 text-sm'>{formState.errors.phone?.message as any}</span>
                  </div>
                  <div className="my-0">
                    <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                    <select {...register('gender')} defaultValue='' name="gender" id="gender" className="bg-gray-50 border border-gray-300 text-gray-900 test-xs sm:text-xs rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
                      <option value='' disabled hidden></option>
                      <option value='true'>Nam</option>
                      <option value='false'>Nữ</option>
                    </select>
                    <span className='text-danger inline-block pl-1 text-sm'>{formState.errors.gender?.message as any}</span>
                  </div>
                </div>

                <div className='col-span-1'>
                  <div className='my-0'>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input {...register('email')} type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                    <span className='text-danger inline-block pl-1 text-sm'>{formState.errors.email?.message as any}</span>
                  </div>
                  <div className='my-0'>
                    <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                    <input {...register('confirmPassword')} type="password" name="confirmPassword" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    <span className='text-danger inline-block pl-1 text-sm'>{formState.errors.confirmPassword?.message as any}</span>
                  </div>
                  <div className="my-0">
                    <label htmlFor="birthday" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Birthday</label>
                    <input {...register('birthday')} type="date" name="birthday" id="birthday" className="bg-gray-50 border border-gray-300 text-gray-900 test-xs sm:text-xs rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                    <span className='text-danger inline-block pl-1 text-sm'>{formState.errors.birthday?.message as any}</span>
                  </div>
                </div>
              </div>

              <div className="my-0 flex items-start">
                <div className="flex items-center h-5">
                  <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                </div>
              </div>
              <button type="submit" className="bg-dark w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                {loading ? (<div className="spinner-border spinner-border-sm"></div>) : 'Create an account'}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account? <a onClick={onClickLogin} href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}