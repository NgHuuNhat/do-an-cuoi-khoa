// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { actGetViTri } from '../../../../../store/store-trang-chu/vi-tri-reducer/action';
// import { ViTri } from '../../../../../store/store-trang-chu/vi-tri-reducer/types';
// import { useForm } from 'react-hook-form';
// import { actGetListPhongThue } from '../../../../../store/store-danh-sach-phong/action';
// import { useNavigate } from 'react-router-dom';
// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';

// const schema = yup.object({
//     diaDiem: yup.string().required('Vui lòng chọn địa điểm'),

// });

// export default function SearchForm() {
//     const dispatch: any = useDispatch();
//     const { data } = useSelector((state: any) => state.viTriReducer);
//     const navigator = useNavigate();

//     useEffect(() => {
//         dispatch(actGetViTri());
//     }, [dispatch]);

//     const { register, handleSubmit, formState, reset } = useForm<any>({
//         defaultValues: {
//             diaDiem: '',
//             ngayNhanPhong: '',
//             ngayTraPhong: '',
//             soLuongNguoi: '',
//         },
//         // @ts-expect-error ts(2554)
//         resolver: yupResolver(schema),
//         criteriaMode: 'all',
//     });

//     const diaDiem = register('diaDiem');
//     const ngayNhanPhong = register('ngayNhanPhong');
//     const ngayTraPhong = register('ngayTraPhong');
//     const soLuongNguoi = register('soLuongNguoi');

//     useEffect(() => {
//     }, [formState]);

//     const onSubmit = (values: any) => {
//         const id = values.diaDiem;
//         dispatch(actGetListPhongThue(id));
//         let btnClose = document.getElementById('btn-closenhat');
//         btnClose?.click();
//         navigator(`/phong-thue/${id}`);
//     }

//     return (
//         <>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <div className="form-group mb-0">
//                     <label htmlFor="diaDiem">Địa điểm</label>
//                     <select {...register('diaDiem')} defaultValue='' className="form-control" id="diaDiem">
//                         <option value='' disabled hidden>Chọn</option>
//                         {data?.map((item: ViTri, index: number) => (
//                             <option key={index} value={item.id}>{item.tinhThanh}</option>
//                         ))}
//                     </select>
//                     <span className='text-danger inline-block pl-1 text-sm'>{formState.errors.diaDiem?.message as any}</span>
//                 </div>
//                 <div className="form-group mb-0">
//                     <label htmlFor="ngayNhanPhong">Ngày nhận phòng</label>
//                     <input {...register('ngayNhanPhong')} type="date" className="form-control" id="ngayNhanPhong" />
//                     <span className='text-danger inline-block pl-1 text-sm'></span>
//                 </div>
//                 <div className="form-group mb-0">
//                     <label htmlFor="ngayTraPhong">Ngày trả phòng</label>
//                     <input {...register('ngayTraPhong')} type="date" className="form-control" id="ngayTraPhong" />
//                     <span className='text-danger inline-block pl-1 text-sm'></span>
//                 </div>
//                 <div className="form-group mb-0">
//                     <label htmlFor="soLuongNguoi">Số lượng người</label>
//                     <select {...register('soLuongNguoi')} defaultValue='' className="form-control" id="soLuongNguoi">
//                         <option value='' disabled hidden>Chọn</option>
//                         <option value='1'>1</option>
//                         <option value='2'>2</option>
//                         <option value='3'>3</option>
//                         <option value='4'>4</option>
//                         <option value='5'>5</option>
//                     </select>
//                     <span className='text-danger inline-block pl-1 text-sm'></span>

//                 </div>

//                 <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#fe6b6e', border: 'none' }}>Tìm kiếm</button>
//             </form>
//         </>
//     )
// }
