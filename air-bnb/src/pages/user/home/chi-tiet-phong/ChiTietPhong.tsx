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
      <div id='chi-tiet-phong' className='container'>

        <div>
          <h4>{dataChiTietPhong?.tenPhong}</h4>
          <div className='grid grid-cols-12'>
            <p className='col-span-11'>4sao - (18 đánh giá) - chủ nhà siêu cấp - thành phố vtau - vùng tàu - việt nam</p>
            <p className='col-span-1 text-center'><i id='icon' className="fa-solid fa-heart"></i></p>
          </div>
        </div>

        <div className='mb-4'>
          <div id="demo" className="carousel slide" data-ride="carousel">
            {/* Indicators */}
            <ul className="carousel-indicators">
              <li data-target="#demo" data-slide-to={0} className="active" />
              <li data-target="#demo" data-slide-to={1} />
              <li data-target="#demo" data-slide-to={2} />
            </ul>
            {/* The slideshow */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={dataChiTietPhong?.hinhAnh} alt="Los Angeles" />
              </div>
              <div className="carousel-item">
                <img src={dataChiTietPhong?.hinhAnh} alt="Chicago" />
              </div>
              <div className="carousel-item">
                <img src={dataChiTietPhong?.hinhAnh} alt="New York" />
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

        <div className='grid grid-cols-12 gap-2'>

          <div className='bg-primary col-span-12 md:col-span-4'>
            <div className='grid grid-cols-2'>
              <h5>$44 / đêm</h5>
              <p className='text-right'>4sao (18 đánh giá)</p>
            </div>
            <div className='grid grid-cols-2'>
              <div className='col-span-1'>
                <label htmlFor="">Nhận phòng</label>
                <input className='w-100' type="date" />
              </div>
              <div className='col-span-1'>
                <label htmlFor="">Trả phòng</label>
                <input className='w-100' type="date" />
              </div>
              <div className='col-span-2'>
                <label htmlFor="">Khách</label>
                <select className='w-100' name="" id="">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                </select>
              </div>
            </div>
            <button className='border w-100 bg-danger'>Đặt phòng</button>
            <div>
              <div className=' grid grid-cols-2'>
                <p >$44 x 5 đêm</p>
                <p className='text-right'>$221</p>
              </div>
              <div className=' grid grid-cols-2'>
                <p>Phí dịch vụ</p>
                <p className='text-right'>$31</p>
              </div>
              <hr />
              <div className=' grid grid-cols-2'>
                <p>Tổng</p>
                <p className='text-right'>$252</p>
              </div>
            </div>
          </div>

          <div className='bg-success col-span-12 md:col-span-8'>
            <div className='grid grid-cols-12'>
              <div className='col-span-10'>
                <h5>Toàn bộ căn hộ condo - Chủ nhà Phong</h5>
                <p>6 khách - 2 phòng ngủ - 2 giường - 2 phòng tắm</p>
              </div>
              <div className='col-span-2'><img className='rounded-circle' src="https://cdn.dribbble.com/users/3495372/screenshots/7137410/media/44410f9a2a5a4225d1677a57b16dc924.png?resize=768x576&vertical=center" alt="hinh anh" /></div>
            </div>

            <hr />

            <div>
              <div>
                <span><i></i></span>
                <div><h5>Toàn bộ nhà</h5>
                  <p>Bạn sẽ có chung cư cao cấp cho riêng mình.</p>
                </div>
              </div>

              <div>
                <span><i></i></span>
                <div><h5>Vệ sinh tăng cường</h5>
                  <p>Chủ nhà này đã cam kết vệ sinh tăng cường 5 bước của Airbnb</p>
                </div>
              </div>

              <div>
                <span><i></i></span>
                <div><h5>Phong là chủ nhà siêu cấp</h5>
                  <p>Chủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh giá cao và là những cam kết mang lại quãng thời gian ở tuyệt vời cho khách.</p>
                </div>
              </div>

              <div>
                <span><i></i></span>
                <div><h5>Miễn phí hủy trong 48 giờ</h5>
                </div>
              </div>
            </div>

            <hr />

            <div><button className='border w-50'>Dịch sang tiếng việt</button></div>
            <div><p>{dataChiTietPhong?.moTa}</p></div>

            <hr />

            <div>
              <h5>Tiên nghi</h5>
              <div className='grid grid-cols-2'>
                <div>
                  <p>{dataChiTietPhong?.bep ? 'Bếp' : ''}</p>
                  <p>{dataChiTietPhong?.tivi ? 'TV với truyền hình cáp tiêu chuẩn' : ''}</p>
                  <p>{dataChiTietPhong?.dieuHoa ? 'Điều hòa nhiệt độ' : ''}</p>
                  <p>{dataChiTietPhong?.doXe ? 'Bãi đỗ xe thu phí nằm ngoài khuôn viên' : ''}</p>
                  <p>{dataChiTietPhong?.banUi ? 'Bàn ủi' : ''}</p>
                </div>
                <div>
                  <p>{dataChiTietPhong?.wifi ? 'Wifi' : ''}</p>
                  <p>{dataChiTietPhong?.mayGiat ? 'Máy giặt' : ''}</p>
                  <p>{dataChiTietPhong?.hoBoi ? 'Hồ bơi' : ''}</p>
                  <p>{dataChiTietPhong?.banLa ? 'Bàn là' : ''}</p>
                </div>
                <button className='border w-100'>Hiển thị tất cả tiện nghi</button>
              </div>
            </div>

            <hr />

            <div>
              <h5>Comment</h5>
              <div>
                <div className='grid grid-cols-12'>
                  <div className='col-span-1'>
                    <img className='rounded-circle' src="https://cdn.dribbble.com/users/3495372/screenshots/7137410/media/44410f9a2a5a4225d1677a57b16dc924.png?resize=768x576&vertical=center" alt="avatar" />
                  </div>
                  <div className='col-span-11'>
                    <h6>Name</h6>
                    <p>Ngay binh luan</p>
                    <p>Noi dung binh luan</p>
                  </div>
                </div>
              </div>
              <div >
                <div className='grid grid-cols-12'>
                  <div className='col-span-1'><img className='rounded-circle' src="https://cdn.dribbble.com/users/3495372/screenshots/7137410/media/44410f9a2a5a4225d1677a57b16dc924.png?resize=768x576&vertical=center" alt="avatar" /></div>
                  <div className="form-group col-span-11">
                    <textarea className="form-control" rows={1} id="comment" defaultValue={""} />
                  </div>
                </div>
                <button className='border w-100'>Thêm bình luận</button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}
