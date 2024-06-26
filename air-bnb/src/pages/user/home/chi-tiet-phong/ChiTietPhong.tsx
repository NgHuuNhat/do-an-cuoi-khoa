import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actGetChiTietPhong } from '../../../../store/store-chi-tiet-phong/action';
import { useParams } from 'react-router-dom';
import { PhongThue } from '../../../../store/store-danh-sach-phong/types';

export default function ChiTietPhong() {
  const { dataChiTietPhong } = useSelector((state: any) => state.chiTietPhongReducer)
  console.log(dataChiTietPhong);

  const { id } = useParams<{
    id: string,
  }>();

  const dispatch: any = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(actGetChiTietPhong(id))
    }
  }, [dispatch, id]);

  return (
    <>
      <div id='chi-tiet-phong' className='container my-5'>

        <div>
          <h4>{dataChiTietPhong?.tenPhong}</h4>
          <div className='grid grid-cols-12'>
            <p className='col-span-11 text-sm'>4sao - (18 đánh giá) - chủ nhà siêu cấp - thành phố vtau - vùng tàu - việt nam</p>
            <p className='col-span-1 text-center'><i id='icon' className="fa-solid fa-heart"></i></p>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
          <div className='lg:col-span-2'>
            <div className='mb-4 height-300'>
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
                    <img src={dataChiTietPhong?.hinhAnh} alt="Los Angeles" className='h-100 rounded' />
                  </div>
                  <div className="carousel-item h-100">
                    <img src={dataChiTietPhong?.hinhAnh} alt="Chicago" className='h-100 rounded' />
                  </div>
                  <div className="carousel-item h-100">
                    <img src={dataChiTietPhong?.hinhAnh} alt="New York" className='h-100 rounded' />
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

            <div className='lg:col-span-1 d-lg-none my-5'>
            <div className='custom-shadow rounded p-3'>
              <div className='grid grid-cols-2'>
                <h5 className='font-weight-bold'>$44 / đêm</h5>
                <p className='text-right font-weight-bold'>4sao (18 đánh giá)</p>
              </div>
              <div className='grid grid-cols-2 gap-5'>
                <div className='col-span-1'>
                  <label htmlFor="" className='text-sm'>Nhận phòng</label>
                  <input className='w-100 form-control text-sm' type="date" />
                </div>
                <div className='col-span-1'>
                  <label htmlFor="" className='text-sm'>Trả phòng</label>
                  <input className='w-100 form-control text-sm' type="date" />
                </div>
                <div className='col-span-2'>
                  <label htmlFor="" className='text-sm'>Khách</label>
                  <select className='w-100 form-control' name="" id="">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                  </select>
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

              <button className='border w-100 p-3 my-3 rounded font-weight-bold text-light' style={{ backgroundColor: '#fe6b6e' }}>Đặt phòng</button>

            </div>
          </div>

            <div className='p-2 rounded'>
              <div className='grid grid-cols-12'>
                <div className='col-span-10'>
                  <h5>Toàn bộ căn hộ condo - Chủ nhà Phong</h5>
                  <p className='text-sm'>6 khách - 2 phòng ngủ - 2 giường - 2 phòng tắm</p>
                </div>
                <div className='col-span-2'><img className='rounded-full w-12 h-12 ml-auto' src="https://cdn.dribbble.com/users/3495372/screenshots/7137410/media/44410f9a2a5a4225d1677a57b16dc924.png?resize=768x576&vertical=center" alt="hinh anh" /></div>
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
                <button className='border w-50 my-2 p-2 rounded'>Dịch sang tiếng việt</button>
              </div>

              <hr />

              <div>
                <h5>Tiên nghi</h5>
                <div className='grid grid-cols-2 gap-5'>
                  <div>
                    <p className='text-sm'>{dataChiTietPhong?.bep ? 'Bếp' : ''}</p>
                    <p className='text-sm'>{dataChiTietPhong?.tivi ? 'TV với truyền hình cáp tiêu chuẩn' : ''}</p>
                    <p className='text-sm'>{dataChiTietPhong?.dieuHoa ? 'Điều hòa nhiệt độ' : ''}</p>
                    <p className='text-sm'>{dataChiTietPhong?.doXe ? 'Bãi đỗ xe thu phí nằm ngoài khuôn viên' : ''}</p>
                    <p className='text-sm'>{dataChiTietPhong?.banUi ? 'Bàn ủi' : ''}</p>
                  </div>
                  <div>
                    <p className='text-sm'>{dataChiTietPhong?.wifi ? 'Wifi' : ''}</p>
                    <p className='text-sm'>{dataChiTietPhong?.mayGiat ? 'Máy giặt' : ''}</p>
                    <p className='text-sm'>{dataChiTietPhong?.hoBoi ? 'Hồ bơi' : ''}</p>
                    <p className='text-sm'>{dataChiTietPhong?.banLa ? 'Bàn là' : ''}</p>
                  </div>
                  <button className='border w-100 p-2 rounded'>Thêm tiện nghi</button>
                </div>
              </div>

              <hr />

              <div>
                <h5 className='mb-3'>Bình luận</h5>
                <div>
                  <div className='grid grid-cols-12'>
                    <div className='col-span-2 md:col-span-1 lg:col-span-1 mx-auto'>
                      <img className='rounded-full w-12 h-12' src="https://cdn.dribbble.com/users/3495372/screenshots/7137410/media/44410f9a2a5a4225d1677a57b16dc924.png?resize=768x576&vertical=center" alt="avatar" />
                    </div>
                    <div className='col-span-10 md:col-span-11 lg:col-span-11'>
                      <div className='px-3 py-2 bg-light mx-1' style={{ borderRadius: '20px' }}>
                        <h6 className='p-0 m-0'>Nguyen Huu Nhat</h6>
                        <p className='text-sm p-0 m-0 mt-1'>Noi dung binh luan</p>
                      </div>
                      <p className='text-sm px-3 mx-1' style={{ fontSize: 'small' }}>19h00 27-06-2024</p>
                    </div>
                  </div>
                </div>
                <div >
                  <div className='grid grid-cols-12'>
                    <div className='col-span-2 md:col-span-1 lg:col-span-1 mx-auto'><img className='rounded-full w-12 h-12' src="https://cdn.dribbble.com/users/3495372/screenshots/7137410/media/44410f9a2a5a4225d1677a57b16dc924.png?resize=768x576&vertical=center" alt="avatar" /></div>
                    <div className="form-group col-span-10 md:col-span-11 lg:col-span-11 px-2 pt-1">
                      <textarea style={{ borderRadius: '20px' }} className="form-control" rows={1} id="comment" defaultValue={""} placeholder='Thêm bình luận...' />
                      <button style={{ borderRadius: '20px', backgroundColor: '#fe6b6e' }} className='text-light border w-100 p-2 my-2'>Gửi</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className='lg:col-span-1 d-none d-lg-block'>
            <div className='custom-shadow rounded p-3'>
              <div className='grid grid-cols-2'>
                <h5 className='font-weight-bold'>$44 / đêm</h5>
                <p className='text-right font-weight-bold'>4sao (18 đánh giá)</p>
              </div>
              <div className='grid grid-cols-2 gap-5'>
                <div className='col-span-1'>
                  <label htmlFor="" className='text-sm'>Nhận phòng</label>
                  <input className='w-100 form-control text-sm' type="date" />
                </div>
                <div className='col-span-1'>
                  <label htmlFor="" className='text-sm'>Trả phòng</label>
                  <input className='w-100 form-control text-sm' type="date" />
                </div>
                <div className='col-span-2'>
                  <label htmlFor="" className='text-sm'>Khách</label>
                  <select className='w-100 form-control' name="" id="">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                  </select>
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

              <button className='border w-100 p-3 my-3 rounded font-weight-bold text-light' style={{ backgroundColor: '#fe6b6e' }}>Đặt phòng</button>

            </div>
          </div>
        </div>

      </div>
    </>
  )
}
