import React, { useEffect, useState } from 'react';
import './SearchDemo.css';
import { useDispatch, useSelector } from 'react-redux';
import { actGetViTri } from '../../../../../store/vi-tri-reducer/action';
import { ViTri } from '../../../../../store/vi-tri-reducer/types';
import { useForm } from 'react-hook-form';
import { actGetListPhongThue } from '../../../../../store/phong-thue-reducer/action';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
    diaDiem: yup.string().required('Vui lòng chọn địa điểm'),

});

export default function SearchDemo() {
    const dispatch: any = useDispatch();
    const { data } = useSelector((state: any) => state.viTriReducer);
    const navigator = useNavigate();

    useEffect(() => {
        dispatch(actGetViTri());
    }, [dispatch]);

    const { register, handleSubmit, formState, reset } = useForm<any>({
        defaultValues: {
            diaDiem: '',
            ngayDi: '',
            ngayVe: '',
            soLuong: '',
        },
        // @ts-expect-error ts(2554)
        resolver: yupResolver(schema),
        criteriaMode: 'all',
    });

    const diaDiem = register('diaDiem');
    const ngayDi = register('ngayDi');
    const ngayVe = register('ngayVe');
    const soLuong = register('soLuong');

    useEffect(() => {
    }, [formState]);

    const onSubmit = (values: any) => {
        const id = values.diaDiem;
        dispatch(actGetListPhongThue(id));
        let btnClose = document.getElementById('btn-closenhat');
        btnClose?.click();
        navigator(`/phong-thue/${id}`);
    }

    return (
        <div id='searchDemo' className='container'>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="search-demo custom-shadow grid grid-cols-10 smm:grid-cols-1 border-1 border-gray-300 md:rounded-full">
                    <div className="col-span-3 flex-1 p-3 flex flex-col justify-center items-center cursor-pointer">
                        <label htmlFor='diaDiem' className='mb-0'>
                            <p style={{ fontWeight: '500' }} className="text-sm">Địa điểm</p>
                            <div className="search-none smm:border-b md:hidden smm:border-gray-400 smm:w-9/12 py-2" />
                        </label>
                        <select {...register('diaDiem')} id="diaDiem" className="form-control" defaultValue='' style={{ fontSize: 'small' }}>
                            <option value=''>Bạn sắp đi đâu?</option>
                            {data?.map((item: ViTri, index: number) => (
                                <option key={index} value={item.id}>{item.tinhThanh}</option>
                            ))}
                        </select>
                        <span className='text-danger inline-block pl-1 text-sm'>{formState.errors.diaDiem?.message as any}</span>
                    </div>

                    <div className="border-lg col-span-4 flex-1 smm:h-16 p-3 flex flex-col justify-center items-center cursor-pointer relative">
                        <div className="search-none smm:border-b md:hidden smm:border-gray-400 smm:w-9/12 py-2" />
                        <div className='grid grid-cols-2 gap-1 w-100'>
                            <div className='w-100'>
                                <p style={{ fontWeight: '500', textAlign: 'center', marginBottom: '8px !important' }} className='text-sm'>Ngày đi</p>
                                <input {...register('ngayDi')} type="date" className="form-control text-center" id="ngayDi" style={{ outline: 'none' }} />
                            </div>
                            <div>
                                <p style={{ fontWeight: '500', textAlign: 'center' }} className='text-sm'>Ngày về</p>
                                <input {...register('ngayVe')} type="date" className="form-control text-center" id="ngayVe" style={{ outline: 'none' }} />
                            </div>
                        </div>
                    </div>

                    <div className="search-block col-span-3 flex-1 p-3 flex justify-center items-center cursor-pointer relative gap-3">
                        <div className='grid grid-cols-1'>
                            <label htmlFor='soLuong' className='mb-0'>
                                <p style={{ fontWeight: '500' }} className="text-sm">Thêm khách</p>
                            </label>
                            <select {...register('soLuong')} id="soLuong" className="form-control" defaultValue='' style={{ fontSize: 'small' }}>
                                <option value=''>Số lượng</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>

                        <button type='submit' style={{ backgroundColor: '#fe6b6e' }} className="search-w-100 w-12 h-12 bg-main   hover:bg-[#9e3e4e] duration-300 text-white rounded-full p-2 flex justify-center items-center">
                            <span role="img" aria-label="search" className="pb-3 pr-3 anticon anticon-search h-3 w-3">
                                <svg className='w-5 h-5' viewBox="64 64 896 896" focusable="false" data-icon="search" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                    <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </form>
        </div >
    )
}
