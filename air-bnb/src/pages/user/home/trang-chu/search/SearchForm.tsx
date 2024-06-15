import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actGetViTri } from '../../_duck/action';
import { ViTri } from '../../_duck/types';
import { useForm } from 'react-hook-form';

export default function SearchForm() {
    const dispatch: any = useDispatch();
    const { data, error } = useSelector((state: any) => state.viTriReducer);

    useEffect(() => {
        dispatch(actGetViTri());
    }, [dispatch]);

    console.log(data)
    data?.map((item: ViTri) => {
        console.log(item.id)
    })


    const { register, handleSubmit, formState, reset } = useForm<any>({
        defaultValues: {
            diaDiem: '',
            ngayNhanPhong: '',
            ngayTraPhong: '',
            soLuongNguoi: '',
        },

    });

    const diaDiem = register('diaDiem');
    const ngayNhanPhong = register('ngayNhanPhong');
    const pasngayTraPhongsword = register('ngayTraPhong');
    const soLuongNguoi = register('soLuongNguoi');

    useEffect(() => {
    }, [formState]);

    const onSubmit = (values: any) => {
        // const { confirmPassword, ...user } = values;
        // dispatch(actPostUserReister(user));
        console.log(values);
        console.log(values.diaDiem)
    }

    // useEffect(() => {
    //     if (data) {
    //         let btnClosee = document.getElementById('btn-closee');
    //         btnClosee?.click();
    //         reset();
    //     }
    // }, [data])


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="diaDiem">Địa điểm</label>
                    <select {...register('diaDiem')} defaultValue='' className="form-control" id="diaDiem">
                        <option value='' disabled hidden className='cursor-pointer'>Chọn</option>
                        {data?.map((item: ViTri, index: any) => {
                            return <option key={index} value={item.id}>{item.tinhThanh}</option>
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="ngayNhanPhong">Ngày nhận phòng</label>
                    <input {...register('ngayNhanPhong')} type="date" className="form-control" placeholder="Enter ngayNhanPhong" id="ngayNhanPhong" />
                </div>
                <div className="form-group">
                    <label htmlFor="ngayTraPhong">Ngày trả phòng</label>
                    <input {...register('ngayTraPhong')} type="date" className="form-control" placeholder="Enter ngayTraPhong" id="trangayTraPhong" />
                </div>
                <div className="form-group">
                    <label htmlFor="soLuongNguoi">Số lượng người</label>
                    <select {...register('soLuongNguoi')} defaultValue='' className="form-control" id="soLuongNguoi">
                        <option value='' disabled hidden className='cursor-pointer'>Chọn</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>
        </>
    )
}
