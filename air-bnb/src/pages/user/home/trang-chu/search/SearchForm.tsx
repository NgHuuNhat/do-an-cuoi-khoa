import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actGetViTri } from '../../../../../store/vi-tri-reducer/action';
import { ViTri } from '../../../../../store/vi-tri-reducer/types';
import { useForm } from 'react-hook-form';
import { actGetListPhongThue } from '../../../../../store/phong-thue-reducer/action';
import { useNavigate } from 'react-router-dom';

export default function SearchForm() {
    const dispatch: any = useDispatch();
    const { data } = useSelector((state: any) => state.viTriReducer);
    // const { data } = useSelector((state: any) => state.phongThueReducer);

    const navigator = useNavigate();

    useEffect(() => {
        dispatch(actGetViTri());
    }, [dispatch]);
    // console.log(data);

    const { register, handleSubmit } = useForm<any>();

    const onSubmit = (values: any) => {
        const id = values.diaDiem;
        console.log('Selected location ID:', id);
        // Gọi action để lấy danh sách phòng với id địa điểm được chọn
        dispatch(actGetListPhongThue(id));
        let btnClose = document.getElementById('btn-closenhat');
        console.log(btnClose);
        btnClose?.click();
        navigator(`/phong-thue/${id}`);
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="diaDiem">Địa điểm</label>
                    <select {...register('diaDiem')} defaultValue='' className="form-control" id="diaDiem">
                        <option value='' disabled hidden>Chọn địa điểm</option>
                        {data?.map((item: ViTri, index: number) => (
                            <option key={index} value={item.id}>{item.tinhThanh}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="ngayNhanPhong">Ngày nhận phòng</label>
                    <input {...register('ngayNhanPhong')} type="date" className="form-control" id="ngayNhanPhong" />
                </div>
                <div className="form-group">
                    <label htmlFor="ngayTraPhong">Ngày trả phòng</label>
                    <input {...register('ngayTraPhong')} type="date" className="form-control" id="ngayTraPhong" />
                </div>
                <div className="form-group">
                    <label htmlFor="soLuongNguoi">Số lượng người</label>
                    <select {...register('soLuongNguoi')} defaultValue='' className="form-control" id="soLuongNguoi">
                        <option value='' disabled hidden>Chọn số lượng người</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary w-100">Gửi</button>
            </form>
        </>
    )
}
