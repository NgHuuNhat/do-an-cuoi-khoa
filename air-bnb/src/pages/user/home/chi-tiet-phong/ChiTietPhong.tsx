import React, { useEffect, useState } from 'react'
import './ChiTietPhong.css'
import { useDispatch, useSelector } from 'react-redux'
import { actGetChiTietPhong } from '../../../../store/store-chi-tiet-phong/chi-tiet-phong-reducer/action';
import { useParams } from 'react-router-dom';
import { actGetDatPhong } from '../../../../store/store-chi-tiet-phong/dat-phong-reducer/action';
import { message } from 'antd';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { actPostDatPhong } from '../../../../store/store-chi-tiet-phong/post-dat-phong-reducer/action';
import { actBinhLuan } from '../../../../store/store-chi-tiet-phong/binh-luan-reducer/action';
import { BinhLuan } from '../../../../store/store-chi-tiet-phong/binh-luan-reducer/types';
import dayjs from 'dayjs';
import { actPostBinhLuan } from '../../../../store/store-chi-tiet-phong/post-binh-luan-reducer/action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faTv, faSnowflake, faParking, faWifi, faTshirt, faSwimmingPool, faHeart } from '@fortawesome/free-solid-svg-icons';

const schema = yup.object({
  ngayDen: yup
    .string()
    .required('Vui lòng chọn ngày nhận phòng'),
  ngayDi: yup
    .string()
    .required('Vui lòng chọn ngày trả phòng'),
  soLuongKhach: yup
    .string()
    .required('Vui lòng chọn số lượng khách'),
});

const schemaBinhLuan = yup.object({
  noiDung: yup
    .string()
    .required('Vui lòng nhập nội dung bình luận'),
});

export default function ChiTietPhong() {
  const { dataChiTietPhong } = useSelector((state: any) => state.chiTietPhongReducer)
  const { dataDatPhong, loading } = useSelector((state: any) => state.datPhongReducer)
  const { dataPostDatPhong } = useSelector((state: any) => state.postDatPhongReducer)
  const { dataBinhLuan } = useSelector((state: any) => state.binhLuanReducer)
  const { data } = useSelector((state: any) => state.userReducer)
  const [messageApi, contextHolder] = message.useMessage();
  const { id } = useParams<{ id: string, }>();
  const dispatch: any = useDispatch();

  const { register, handleSubmit, formState, reset } = useForm<any>({
    defaultValues: {
      ngayDen: '',
      ngayDi: '',
      soLuongKhach: '',
    },
    // @ts-expect-error ts(2554)
    resolver: yupResolver(schema),
    criteriaMode: 'all',
  });

  const { register: registerBinhLuan, handleSubmit: handleSubmitBinhLuan, formState: formStateBinhLuan, reset: resetBinhLuan } = useForm<any>({
    defaultValues: {
      noiDung: '',
    },
    // @ts-expect-error ts(2554)
    resolver: yupResolver(schemaBinhLuan),
    criteriaMode: 'all',
  });


  const successPostDatPhong = () => {
    messageApi.open({
      type: 'success',
      content: 'Đặt phòng thành công',
    });
  };
  const errorPostDatPhong = () => {
    messageApi.open({
      type: 'error',
      content: 'Vui lòng đăng nhập để đặt phòng!',
    });
  };

  useEffect(() => {
    if (id) {
      dispatch(actGetChiTietPhong(id))
    }

    dispatch(actGetDatPhong());
    dispatch(actBinhLuan(id)) //id = maPhong
  }, [dispatch, id]);

  useEffect(() => {
    const isPostDatPhong = localStorage.getItem("isPostDatPhong");
    if (dataPostDatPhong) {
      if (isPostDatPhong === "true") {
        successPostDatPhong();
      }
      localStorage.removeItem("isPostDatPhong");
    }
  }, [dataPostDatPhong, dataDatPhong])

  //dat phong
  const onSubmit = (values: any) => {
    if (data) {
      const newValues = {
        ...values,
        maNguoiDung: data.user.id,
        maPhong: id,
      };
      console.log("newValues", newValues)
      dispatch(actPostDatPhong(newValues));
    } else {
      errorPostDatPhong();
    }
  }

  //alert cmt
  const successBinhLuan = () => {
    messageApi.open({
      type: 'success',
      content: 'Thêm bình luận thành công',
    });
  };
  const errorBinhLuan = () => {
    messageApi.open({
      type: 'error',
      content: 'Vui lòng đăng nhập để bình luận',
    });
  };

  //gui binh luan
  const onSubmitComment = (values: any) => {
    if (data) {
      const newComment = {
        ...values,
        maNguoiBinhLuan: data.user.id,
        maPhong: id,
        ngayBinhLuan: dayjs().toISOString(), // Example: use current date/time as ngayBinhLuan
      };
      dispatch(actPostBinhLuan(newComment));
      resetBinhLuan(); // Reset the form after submission
      successBinhLuan();
      dispatch(actBinhLuan(id)); // update list cmt
    } else {
      errorBinhLuan();
    }
  };

  // console.log(dataBinhLuan)

  //hien thi them cmt
  const [visibleCommentCount, setVisibleCommentCount] = useState(3);
  const handleShowMoreComments = () => {
    setVisibleCommentCount(prevCount => prevCount + 3);
  };
  const handleShowLessComments = () => {
    setVisibleCommentCount(3);
  };

  return (
    <>
      {contextHolder}

      <div id='chi-tiet-phong' className='container my-5'>
        {/* header */}
        <div>
          <h4>{dataChiTietPhong?.tenPhong}</h4>
          <div className='grid grid-cols-12'>
            <p className='col-span-11 text-sm'>4sao - (18 đánh giá) - chủ nhà siêu cấp - thành phố vtau - vùng tàu - việt nam</p>
            <p className='col-span-1 text-center'><i id='icon' className="fa-solid fa-heart"></i></p>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
          {/* img */}
          <div className='col-span-1 lg:col-span-2 sm-height-300'>
            <div className='mb-4 h-100'>
              <div id="demo" className="carousel slide h-100" data-ride="carousel">
                {/* Indicators */}
                <ul className="carousel-indicators">
                  <li data-target="#demo" data-slide-to={0} className="active" />
                  <li data-target="#demo" data-slide-to={1} />
                  <li data-target="#demo" data-slide-to={2} />
                </ul>
                {/* The slideshow */}
                <div className="carousel-inner h-100">
                  <div className="carousel-item active h-100">
                    <img src={dataChiTietPhong?.hinhAnh} alt="Los Angeles" className='h-100 rounded img-object-cover' />
                  </div>
                  <div className="carousel-item h-100">
                    <img src={dataChiTietPhong?.hinhAnh} alt="Chicago" className='h-100 rounded img-object-cover' />
                  </div>
                  <div className="carousel-item h-100">
                    <img src={dataChiTietPhong?.hinhAnh} alt="New York" className='h-100 rounded img-object-cover' />
                  </div>
                </div>
                {/* Left and right controls */}
                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                  <span className="carousel-control-prev-icon" />
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                  <span className="carousel-control-next-icon" />
                </a>
              </div>

            </div>
          </div>

          {/* form dat phong laptop */}
          <div className='col-span-1'>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <div className='lg:col-span-1 '>
                <div className='custom-shadow rounded p-3'>
                  <div className='grid grid-cols-2'>
                    <h5 className='font-weight-bold'>$44 / đêm</h5>
                    <p className='text-right font-weight-bold text-sm'>5<i className="fa-solid fa-star"></i> (18 đánh giá)</p>
                  </div>
                  <div className='grid grid-cols-2 gap-0'>
                    <div className='col-span-1 border p-2 px-3' style={{ borderRadius: '10px 0 0 0' }}>
                      <label htmlFor="" className='text-sm m-0' style={{ fontSize: 'x-small' }}>NHẬN PHÒNG</label>
                      <input {...register('ngayDen')} className='w-100 form-control text-sm border-0 outline-0 p-0' type="date" style={{ fontSize: 'small' }} />
                      <span className='text-danger inline-block pl-1 text-sm'>{formState.errors.ngayDen?.message as any}</span>

                    </div>
                    <div className='col-span-1 border p-2 px-3' style={{ borderRadius: '0 10px 0 0' }}>
                      <label htmlFor="" className='text-sm m-0' style={{ fontSize: 'x-small' }}>TRẢ PHÒNG</label>
                      <input {...register('ngayDi')} className='w-100 form-control text-sm border-0 outline-0 p-0' type="date" style={{ fontSize: 'small' }} />
                      <span className='text-danger inline-block pl-1 text-sm'>{formState.errors.ngayDi?.message as any}</span>

                    </div>
                    <div className='col-span-2 border p-2 px-3' style={{ borderRadius: '0 0 10px 10px' }}>
                      <label htmlFor="soLuongKhach" className='text-sm m-0' style={{ fontSize: 'x-small' }}>KHÁCH</label>
                      <select {...register('soLuongKhach')} defaultValue='' className='w-100 form-control border-0 outline-0 p-0' name="soLuongKhach" id="soLuongKhach" style={{ fontSize: 'small' }}>
                        <option value="">Số lượng khách</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                      <span className='text-danger inline-block pl-1 text-sm'>{formState.errors.soLuongKhach?.message as any}</span>
                    </div>
                  </div>
                  <hr />
                  <div>
                    <div className=' grid grid-cols-2'>
                      <p className=''>$44 x 5 đêm</p>
                      <p className='text-right '>$221</p>
                    </div>
                    <div className=' grid grid-cols-2'>
                      <p className=''>Phí dịch vụ</p>
                      <p className='text-right '>$31</p>
                    </div>
                    <hr className='mt-0' />
                    <div className=' grid grid-cols-2'>
                      <p className='font-weight-bold'>Tổng</p>
                      <p className='text-right font-weight-bold'>$252</p>
                    </div>
                  </div>

                  <button type='submit' className='border w-100 p-3 my-3 rounded font-weight-bold text-light' style={{ backgroundColor: '#fe6b6e' }}>
                    {loading ? (<div className="spinner-border spinner-border-sm"></div>) : 'Đặt phòng'}
                  </button>

                </div>
              </div>
            </form>
          </div>

          {/* content */}
          <div className='col-span-1 lg:col-span-2'>
            <div className='p-2 rounded'>
              <div className='grid grid-cols-12'>
                <div className='col-span-10'>
                  <h5>Toàn bộ căn hộ condo - Chủ nhà Phong</h5>
                  <p className='text-sm'>6 khách - 2 phòng ngủ - 2 giường - 2 phòng tắm</p>
                </div>
                <div className='col-span-2'><img className='rounded-full w-12 h-12 ml-auto img-object-cover' src="https://cdn.dribbble.com/users/3495372/screenshots/7137410/media/44410f9a2a5a4225d1677a57b16dc924.png?resize=768x576&vertical=center" alt="hinh anh" /></div>
              </div>

              <hr />

              <div>
                <div className='d-flex'>
                  <span><i className="fa-solid fa-house"></i></span>
                  <div className='ml-2'>
                    <h5>Toàn bộ nhà</h5>
                    <p className='text-sm'>Bạn sẽ có chung cư cao cấp cho riêng mình.</p>
                  </div>
                </div>

                <div className='d-flex'>
                  <span><i className="fa-solid fa-broom"></i></span>
                  <div className='ml-2'><h5>Vệ sinh tăng cường</h5>
                    <p className='text-sm'>Chủ nhà này đã cam kết vệ sinh tăng cường 5 bước của Airbnb</p>
                  </div>
                </div>

                <div className='d-flex'>
                  <span><i className="fa-solid fa-trophy"></i></span>
                  <div className='ml-2'><h5>Phong là chủ nhà siêu cấp</h5>
                    <p className='text-sm'>Chủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh giá cao và là những cam kết mang lại quãng thời gian ở tuyệt vời cho khách.</p>
                  </div>
                </div>

                <div className='d-flex'>
                  <span><i className="fa-solid fa-spinner"></i></span>
                  <div className='ml-2'><h5>Miễn phí hủy trong 48 giờ</h5>
                  </div>
                </div>
              </div>

              <hr />

              <div>
                <p className='text-sm'>{dataChiTietPhong?.moTa}</p>
                <button className='border w-75 my-2 p-2 rounded d-flex justify-content-center'>
                  <span>Dịch sang tiếng việt</span>
                  <span className='ml-2'>
                    <svg width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M20 18h-1.44a.6.6 0 0 1-.4-.12a.8.8 0 0 1-.23-.31L17 15h-5l-1 2.54a.8.8 0 0 1-.22.3a.6.6 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56l-1.58 4.19zm-6.3-1.58a13.4 13.4 0 0 1-2.91-1.41a11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.2 17.2 0 0 1-5 2.1q.56.82.87 1.38a23.3 23.3 0 0 0 5.22-2.51a15.6 15.6 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 0 1-2.45 4.45a9.1 9.1 0 0 1-2.46-4.45"></path></svg>
                  </span>
                </button>
              </div>

              <hr />

              <div>
                <h5>Tiện nghi</h5>
                <div className='grid grid-cols-2 gap-5'>
                  <div>
                  {dataChiTietPhong?.wifi && (
                      <p className='text-sm'><FontAwesomeIcon icon={faWifi} /> Wifi</p>
                    )}
                    {dataChiTietPhong?.bep && (
                      <p className='text-sm'><FontAwesomeIcon icon={faUtensils} /> Bếp</p>
                    )}
                    {dataChiTietPhong?.tivi && (
                      <p className='text-sm'><FontAwesomeIcon icon={faTv} /> Smart TV</p>
                    )}
                    {dataChiTietPhong?.dieuHoa && (
                      <p className='text-sm'><FontAwesomeIcon icon={faSnowflake} /> Điều hòa</p>
                    )}
                    {dataChiTietPhong?.mayGiat && (
                      <p className='text-sm'><FontAwesomeIcon icon={faTshirt} /> Máy giặt</p>
                    )}
                    {dataChiTietPhong?.doXe && (
                      <p className='text-sm'><FontAwesomeIcon icon={faParking} /> Bãi đỗ xe</p>
                    )}
                  </div>
                  <div>
                    {dataChiTietPhong?.hoBoi && (
                      <p className='text-sm'><FontAwesomeIcon icon={faSwimmingPool} /> Hồ bơi</p>
                    )}
                    {dataChiTietPhong?.banLa && (
                      <p className='text-sm'><FontAwesomeIcon icon={faHeart} /> Bàn là</p>
                    )}
                    {dataChiTietPhong?.banUi && (
                      <p className='text-sm'><FontAwesomeIcon icon={faHeart} /> Bàn ủi</p>
                    )}
                  </div>
                </div>
                <button className='border w-75 p-2 rounded'>Thêm tiện nghi</button>
              </div>

              <hr />

              {/* binh luan */}
              <div>
                <h5 className='mb-3'>Bình luận ({dataBinhLuan?.length})</h5>

                {dataBinhLuan?.slice(0, visibleCommentCount).map((item: BinhLuan, index: any) => (
                  <div className='grid grid-cols-12' key={index}>
                    <div className='col-span-2 md:col-span-1 lg:col-span-1 mx-auto'>
                      <img className='rounded-full w-12 h-12 img-object-cover' src={item.avatar ? (`${item.avatar}`) : (`https://inkythuatso.com/uploads/thumbnails/800/2023/03/9-anh-dai-dien-trang-inkythuatso-03-15-27-03.jpg`)} alt="avatar" />
                    </div>
                    <div className='col-span-10 md:col-span-11 lg:col-span-11'>
                      <div className='px-3 py-2 bg-light mx-1' style={{ borderRadius: '20px' }}>
                        <h6 className='p-0 m-0'>{item.tenNguoiBinhLuan}</h6>
                        <p className='text-sm p-0 m-0 mt-1'>{item.noiDung}</p>
                      </div>
                      <p className='text-sm px-3 mx-1' style={{ fontSize: 'small' }}>{dayjs(item.ngayBinhLuan).format('HH:mm DD-MM-YYYY')} <span className='ml-3 span-hover'>Thích</span> <span className='ml-3 span-hover'>Trả lời</span></p>
                    </div>
                  </div>
                ))}

                {dataBinhLuan?.length > visibleCommentCount && (
                  <button className="btn btn-link outline-0 border-0" onClick={handleShowMoreComments}>
                    Hiển thị thêm
                  </button>
                )}

                {visibleCommentCount > 3 && (
                  <button className="btn btn-link outline-0 border-0" onClick={handleShowLessComments}>
                    Thu gọn
                  </button>
                )}


                {/* viet binh luan */}
                <form onSubmit={handleSubmitBinhLuan(onSubmitComment)} action="">
                  <div className='grid grid-cols-12'>
                    <div className='col-span-2 md:col-span-1 lg:col-span-1 mx-auto'><img className='rounded-full w-12 h-12 img-object-cover' src={data?.user?.avatar ? (`${data?.user?.avatar}`) : (`https://inkythuatso.com/uploads/thumbnails/800/2023/03/9-anh-dai-dien-trang-inkythuatso-03-15-27-03.jpg`)} alt="avatar" /></div>
                    <div className="form-group col-span-10 md:col-span-11 lg:col-span-11 px-2 pt-1">
                      <textarea {...registerBinhLuan('noiDung')} style={{ borderRadius: '20px' }} className="form-control" rows={1} id="noiDung" defaultValue={""} placeholder='Viết bình luận...' />
                      <span className='text-danger inline-block pl-1 text-sm'>{formStateBinhLuan.errors.noiDung?.message as any}</span>
                      <button type='submit' style={{ borderRadius: '20px', backgroundColor: '#fe6b6e' }} className='text-light border w-100 p-2 my-2'>Gửi</button>
                    </div>
                  </div>
                </form>

              </div>

            </div>
          </div>
        </div>
      </div >
    </>
  )
}
