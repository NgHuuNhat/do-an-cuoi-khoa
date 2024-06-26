import React, { useEffect, useState } from 'react';
import './SearchDemo.css';
import { useDispatch, useSelector } from 'react-redux';
import { actGetViTri } from '../../../../../store/store-trang-chu/vi-tri-reducer/action';
import { ViTri } from '../../../../../store/store-trang-chu/vi-tri-reducer/types';
import { useForm } from 'react-hook-form';
import { actGetListPhongThue } from '../../../../../store/store-danh-sach-phong/danh-sach-phong-reducer/action';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { PhongThue } from '../../../../../store/store-danh-sach-phong/danh-sach-phong-reducer/types';

const schema = yup.object({
    diaDiem: yup.string().required('Vui lòng chọn địa điểm'),

});

export default function SearchDemo() {
    const dispatch: any = useDispatch();
    const { data } = useSelector((state: any) => state.viTriReducer);
    const { dataPhongThue } = useSelector((state: any) => state.phongThueReducer);
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

    const handleOnchange = (event: any) => {
        event.preventDefault();
        const idOnChange = event.target.value;
        dispatch(actGetListPhongThue(idOnChange));
    }

    const onSubmit = (values: any) => {
        const id = values.diaDiem;
        const item = data.find((item: ViTri) => item.id === parseInt(id));
        if (item) {
            const { id, tinhThanh, tenViTri } = item;
            dispatch(actGetListPhongThue(id));
            let url = `/phong-thue/${tinhThanh}/${tenViTri}/${id}`;

            if (values.ngayDi && values.ngayVe) {
                url += `?ngayDi=${values.ngayDi}&ngayVe=${values.ngayVe}`;
                if (values.soLuong) {
                    url += `&soLuong=${values.soLuong}`;
                }
            } else if (values.soLuong) {
                url += `?soLuong=${values.soLuong}`;
            }
            navigator(url);
        }
        reset({
            diaDiem: values.diaDiem,
            ngayDi: values.ngayDi,
            ngayVe: values.ngayVe,
            soLuong: '', // Chỉ reset ô số lượng
        });
        let btnClose = document.getElementById('btn-closenhat');
        btnClose?.click();
    }
    const uniqueKhachValues = Array.from(new Set(dataPhongThue?.map((item: PhongThue) => item.khach)));

    return (
        <div id='searchDemo' className='container'>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="search-demo custom-shadow grid grid-cols-10 smm:grid-cols-1 border-1 border-gray-300 md:rounded-full">
                    <div className="col-span-3 flex-1 p-3 flex flex-col justify-center items-center cursor-pointer">
                        <label htmlFor='diaDiem' className='mb-0'>
                            <p style={{ fontWeight: '500' }} className="text-sm">Địa điểm</p>
                            <div className="search-none smm:border-b md:hidden smm:border-gray-400 smm:w-9/12 py-2" />
                        </label>
                        <select {...register('diaDiem')} onChange={handleOnchange} id="diaDiem" className="form-control" style={{ fontSize: 'small' }}>
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
                                <p style={{ fontWeight: '500' }} className="text-sm">Số khách</p>
                            </label>
                            <select {...register('soLuong')} id="soLuong" className="form-control" style={{ fontSize: 'small' }}>
                                <option value=''>Số lượng</option>
                                {uniqueKhachValues?.map((item: any, index: any) => (
                                    <option key={index} value={item}>{item}</option>
                                ))}
                            </select>
                        </div>

                        <button type='submit' style={{ backgroundColor: '#fe6b6e' }} className="search-w-100 w-12 h-12 duration-300 text-white rounded-full">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div >
    )
}
