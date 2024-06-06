import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { v4 as uuidv4 } from 'uuid';

const schema = yup.object({
  name: yup.string().required('Vui lòng nhập name!'),
  email: yup.string().required('Vui lòng nhập email!'),
  password: yup.string().required('Vui lòng nhập password!'),
  confirmPassword: yup
    .string()
    .required('Vui lòng nhập lại mật khẩu để xác nhận!')
    .test('passwords-match', 'Mật khẩu không khớp!', function (value) {
      return value === this.resolve(yup.ref('password'));
    }),
  phone: yup.string().required('Vui lòng nhập phone!'),
  birthday: yup.string().required('Vui lòng nhập birthday!'),
  gender: yup.string().required('Vui lòng chọn gender!'),
  role: yup.string().required('Vui lòng chọn role!'),
});

export default function Register() {
  const { register, handleSubmit, formState, reset } = useForm<any>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      phone: '',
      birthday: '',
      gender: '',
      role: '',
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
  const role = register('role');

  useEffect(() => {
    console.log("errors", formState.errors)
  }, [formState]);

  const onSubmit = (values: any) => {
    const id = uuidv4();
    values.id = id;
    const { confirmPassword, ...filteredValues } = values;
    // reset();
    console.log("values", filteredValues);
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="min-width-50 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6" action="#">
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                  <input {...register('name')} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                  {formState.errors.name?.message && (<span className='text-danger pl-1'>{formState.errors.name?.message as any}</span>)}
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                  <input {...register('email')} type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                  {formState.errors.email?.message && (<span className='text-danger pl-1'>{formState.errors.email?.message as any}</span>)}
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input {...register('password')} type="password" name="password" id="password" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  {formState.errors.password?.message && (<span className='text-danger pl-1'>{formState.errors.password?.message as any}</span>)}
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                  <input {...register('confirmPassword')} type="password" name="confirmPassword" id="confirmPassword" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  {formState.errors.confirmPassword?.message && (<span className='text-danger pl-1'>{formState.errors.confirmPassword?.message as any}</span>)}
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                  <input {...register('phone')} type="text" name="phone" id="phone" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  {formState.errors.phone?.message && (<span className='text-danger pl-1'>{formState.errors.phone?.message as any}</span>)}
                </div>
                <div>
                  <label htmlFor="birthday" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Birthday</label>
                  <input {...register('birthday')} type="date" name="birthday" id="birthday" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  {formState.errors.birthday?.message && (<span className='text-danger pl-1'>{formState.errors.birthday?.message as any}</span>)}
                </div>
                <div>
                  <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                  <select {...register('gender')} defaultValue='' name='gender' id='gender' className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value='' disabled hidden></option>
                    <option value='true'>Nam</option>
                    <option value='false'>Nữ</option>
                  </select>
                  {formState.errors.gender?.message && (<span className='text-danger pl-1'>{formState.errors.gender?.message as any}</span>)}
                </div>
                <div>
                  <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
                  <select {...register('role')} defaultValue="" name='role' id='role' className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option disabled hidden></option>
                    <option>ADMIN</option>
                    <option>USER</option>
                  </select>
                  {formState.errors.role?.message && (<span className='text-danger pl-1'>{formState.errors.role?.message as any}</span>)}
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                </div>
              </div>
              <button type="submit" className="bg-dark w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account? <NavLink to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>

  )
}
