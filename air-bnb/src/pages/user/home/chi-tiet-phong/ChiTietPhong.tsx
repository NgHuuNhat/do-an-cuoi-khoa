import React, { useEffect } from 'react'
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

  if (dataChiTietPhong) {
    const {
      tenPhong, khach, phongNgu, giuong, phongTam, moTa, giaTien, mayGiat,
      banLa, tivi, dieuHoa, wifi, bep, doXe, hoBoi, banUi, maViTri, hinhAnh
    } = dataChiTietPhong as PhongThue;
  }

  return (
    <>
      <div id='chi-tiet-phong' className='container'>

        <div>
          <h3>{dataChiTietPhong?.tenPhong}</h3>
          <div className='grid grid-cols-12'>
            <p className='col-span-11'>4sao - (18 đánh giá) - chủ nhà siêu cấp - thành phố vtau - vùng tàu - việt nam</p>
            <p>lưu</p>
          </div>
        </div>

        <div><img src={dataChiTietPhong?.hinhAnh} alt="" /></div>

        <div className='grid grid-cols-12'>

          <div className='bg-success col-span-8'>
            <div className='grid grid-cols-12'>
              <div className='col-span-11'>
                <h5>Toàn bộ căn hộ condo - Chủ nhà Phong</h5>
                <p>6 khách - 2 phòng ngủ - 2 giường - 2 phòng tắm</p>
              </div>
              <div><img src="" alt="hinh anh" /></div>
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

            <div><h5>Dịch sang tiếng việt</h5></div>
            <div><p>{dataChiTietPhong?.moTa}</p></div>

            <hr />

            <div>
              <h5>Tiên nghi</h5>
              <div>
                {/* <p>{bep ? 'Bep' : ''}</p> */}

              </div>
            </div>

          </div>

          <div className='bg-primary col-span-4'>Đặt phòng</div>

        </div>

      </div>
    </>
  )
}
