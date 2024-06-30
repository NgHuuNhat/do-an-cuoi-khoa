// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useForm } from 'react-hook-form';
// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { actGetUserLogin, actPutThongTinCaNhan } from '../../../../store/store-trang-chu/user-reducer/action';

// const schema = yup.object().shape({
//     name: yup.string().required('Vui lòng nhập tên'),
//     email: yup.string().email('Email không đúng định dạng').required('Vui lòng nhập email'),
//     phone: yup.string().matches(/^\+?(84|0)\d{9,10}$/, 'Số điện thoại không hợp lệ').required('Vui lòng nhập số điện thoại'),
//     birthday: yup.string().required('Vui lòng nhập ngày sinh'),
//     gender: yup.string().required('Vui lòng chọn giới tính'),
//     role: yup.string(),
// });

// const UpdateProfileForm = () => {
//     const dispatch: any = useDispatch();
//     const { loading, data } = useSelector((state: any) => state.userReducer);

//     const { register, handleSubmit, formState, reset } = useForm({
//         defaultValues: {
//             name: '',
//             email: '',
//             phone: '',
//             birthday: '',
//             gender: '',
//             role: 'USER',
//         },
//         // @ts-expect-error ts(2554)
//         resolver: yupResolver(schema),
//     });

//     useEffect(() => {
//         if (data && data.user) {
//             reset({
//                 name: data?.user?.name || '',
//                 email: data?.user?.email || '',
//                 phone: data?.user?.phone || '',
//                 birthday: data?.user?.birthday || '',
//                 gender: data?.user?.gender ? 'true' : 'false',
//                 role: data?.user?.role || '',
//             });
//         }
//     }, [data, reset]);

//     const onSubmit = (values: any) => {
//         console.log("click")
//         let btnClose = document.getElementById('btn-info-close')
//         console.log(btnClose)
//         btnClose?.click()
//         dispatch(actPutThongTinCaNhan(data?.user?.id, values));
//         dispatch(actGetUserLogin())
//     };

//     // if (!data || !data.user) {
//     //     return null; // hoặc bạn có thể render một component loading hoặc thông báo lỗi ở đây
//     // }

//     return (
//         <>
//             <div className="modal fade" id="updateForm" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div className="modal-dialog" role="document">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title" id="exampleModalLabel">Chỉnh sửa thông tin cá nhân</h5>
//                             <button id='btn-info-close' type="button" className="close" data-dismiss="modal" aria-label="Close">
//                                 <span aria-hidden="true">×</span>
//                             </button>
//                         </div>
//                         <div className="modal-body">

//                             <form onSubmit={handleSubmit(onSubmit)} >
//                                 <div className="form-group mb-0">
//                                     <label htmlFor="email">Email</label>
//                                     <input {...register('email')} type="email" className="form-control" placeholder="Enter email" />
//                                     <span className='text-danger inline-block pl-1 text-sm'>{formState.errors.email?.message as any}</span>
//                                 </div>
//                                 <div className='grid grid-cols-2 gap-2'>
//                                     <div className="form-group mb-0">
//                                         <label htmlFor="name">Name</label>
//                                         <input {...register('name')} type="text" className="form-control" placeholder="Enter name" />
//                                         <span className='text-danger inline-block pl-1 text-sm'>{formState.errors.name?.message as any}</span>
//                                     </div>
//                                     <div className="form-group mb-0">
//                                         <label htmlFor="phone">Phone</label>
//                                         <input {...register('phone')} type="text" className="form-control" placeholder="Enter phone" />
//                                         <span className='text-danger inline-block pl-1 text-sm'>{formState.errors.phone?.message as any}</span>
//                                     </div>
//                                 </div>
//                                 <div className='grid grid-cols-2 gap-2'>
//                                     <div className="form-group mb-0">
//                                         <label htmlFor="birthday">Birthday</label>
//                                         <input {...register('birthday')} type="date" className="form-control" placeholder="Enter birthday" />
//                                         <span className='text-danger inline-block pl-1 text-sm'>{formState.errors.birthday?.message as any}</span>
//                                     </div>
//                                     <div className="form-group mb-0">
//                                         <label htmlFor="gender">Gender</label>
//                                         <select {...register('gender')} defaultValue='' name="gender" className="form-control"  >
//                                             <option value='' disabled hidden className='cursor-pointer'>Chọn</option>
//                                             <option value='true' className='cursor-pointer'>Nam</option>
//                                             <option value='false' className='cursor-pointer'>Nữ</option>
//                                         </select>
//                                         <span className='text-danger inline-block pl-1 text-sm'>{formState.errors.gender?.message as any}</span>
//                                     </div>
//                                 </div>

//                                 <button type="submit" className="btn btn-dark w-100" style={{ backgroundColor: '#fe6b6e', border: 'none' }}>
//                                     {loading ? (<div className="spinner-border spinner-border-sm"></div>) : 'Cập Nhật'}
//                                 </button>
//                             </form>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default UpdateProfileForm;
