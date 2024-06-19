import React, { useEffect } from 'react';
import './DanhSachPhong.css'
import { useDispatch, useSelector } from 'react-redux';
import { PhongThue } from '../../../../store/phong-thue-reducer/types';
import { useLocation } from 'react-router-dom';
import { actGetListPhongThue } from '../../../../store/phong-thue-reducer/action';

export default function DanhSachPhong() {
  const { data } = useSelector((state: any) => state.phongThueReducer);
  const dispatch: any = useDispatch();
  const location = useLocation();
  const id = new URLSearchParams(location.search).get('maViTri');

  useEffect(() => {
    if (id) {
      dispatch(actGetListPhongThue(id));
    }
  }, [dispatch, id]); // Chỉ chạy lại useEffect khi `id` hoặc `dispatch` thay đổi

  console.log(id)
  console.log(data)

  return (
    <>
      <div id='danhSachPhongThue' className='my-5 p-0'>
        <div className='container grid grid-cols-1 gap-2'>
          <h4>Chỗ ở tại khu vực bạn đã chọn</h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9">
            {data?.map((item: PhongThue, index: number) => (
              <a key={index} data-aos="flip-left" href="/rooms/ho-chi-minh" className="aos-init aos-animate">
                <div className="ant-card ant-card-bordered ant-card-hoverable w-full css-mzwlov">
                  <div className="height-250 ant-card-cover w-100 h-100">
                    <img style={{ objectFit: 'cover' }} className='rounded w-100 h-100' alt='hinh-anh' src={item.hinhAnh} />
                  </div>
                  <div className="ant-card-body">
                    <div className="ant-card-meta">
                      <div className="ant-card-meta-detail">
                        <div className="ant-card-meta-title p-0 m-0 mt-2">{item.tenPhong}</div>
                        <p className='text-sm text-dark p-0 m-0'> {item.khach} khách - {item.phongNgu} phòng ngủ- {item.phongTam} phòng tắm</p>
                        <p className='text-sm text-dark'> {item.giaTien} $ / đêm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* google map */}
          <div className=''>
            <div className="w-full block top-28">
              <div
                className="h-50 w-full aos-init aos-animate"
                data-aos="flip-down"
                style={{ top: 112, height: "calc(-112px + 100vh)" }}
              >
                <div className="mapouter w-full" style={{ height: "calc(-112px + 100vh)" }}>
                  <div
                    className="gmap_canvas w-full"
                    style={{ height: "calc(-112px + 100vh)" }}
                  >
                    <iframe
                      title="gmap"
                      src="https://maps.google.com/maps?q=Hồ Chí Minh&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      frameBorder={0}
                      scrolling="no"
                      style={{ width: "100%", height: "100%" }}
                    />
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          ".mapouter{position:relative;background:#fff;} .maprouter a{color:#fff !important;position:absolute !important;top:0 !important;z-index:0 !important;}"
                      }}
                    />
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          ".gmap_canvas{overflow:hidden}.gmap_canvas iframe{position:relative;z-index:2}"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}
