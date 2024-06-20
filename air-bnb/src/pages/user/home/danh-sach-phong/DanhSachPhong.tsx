import React, { useEffect, useRef, useState } from 'react';
import './DanhSachPhong.css'
import { useDispatch, useSelector } from 'react-redux';
import { PhongThue } from '../../../../store/phong-thue-reducer/types';
import { useLocation, useParams } from 'react-router-dom';
import { actGetListPhongThue } from '../../../../store/phong-thue-reducer/action';

export default function DanhSachPhong() {
  const { dataPhongThue } = useSelector((state: any) => state.phongThueReducer);
  const dispatch: any = useDispatch();
  const location = useLocation();
  const { id, tinhThanh, tenViTri } = useParams<{
    id: string,
    tinhThanh: string,
    tenViTri: string,
  }>();
  const h3Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (id) {
      dispatch(actGetListPhongThue(id));
    }
  }, [dispatch, id]);

  // Lấy ngayDi và ngayVe từ URL params
  const queryParams = new URLSearchParams(location.search);
  const ngayDi = queryParams.get('ngayDi');
  const ngayVe = queryParams.get('ngayVe');
  const soLuong = queryParams.get('soLuong');
  const issoLuong = !!soLuong;

  useEffect(() => {
    if (tinhThanh && h3Ref.current) {
      const h3Rect = h3Ref.current.getBoundingClientRect();
      const topPosition = h3Rect.top + window.pageYOffset - 60;
      window.scrollTo({ top: topPosition, behavior: 'smooth' });
    }
  }, [location.search, tinhThanh]);


  return (
    <>
      <div id='danhSachPhongThue' className='my-5 px-2 container'>
        <h3 className='p-0 m-0 text-xl' ref={h3Ref}>Chỗ ở tại khu vực {tinhThanh} </h3>
        <p className='text-sm p-0 m-0'>Có {dataPhongThue?.length} chỗ ở tại {tenViTri} - {tinhThanh}</p>
        {ngayDi && ngayVe ? (
          <p className='small'>Time: {ngayDi} {ngayVe}</p>
        ) : ('')}

        <div className='container grid grid-cols-1 gap-2 p-0'>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
            {dataPhongThue?.map((item: PhongThue, index: number) => (
              (!issoLuong || item.khach === Number(soLuong)) && (
                <div id='item' key={index} data-aos="flip-left" className="aos-init aos-animate">
                  <div className="ant-card ant-card-bordered ant-card-hoverable w-full css-mzwlov">
                    <div className="height-250 ant-card-cover w-100 h-100">
                      <div id={`demo${index}`} className="carousel slide h-100" data-ride="carousel">
                        {/* Indicators */}
                        <ul className="carousel-indicators">
                          <li data-target={`#demo${index}`} data-slide-to={0} className="active" />
                          <li data-target={`#demo${index}`} data-slide-to={1} />
                          <li data-target={`#demo${index}`} data-slide-to={2} />
                        </ul>
                        {/* The slideshow */}
                        <div className="carousel-inner h-100">
                          <div className="h-100 carousel-item active">
                            <img style={{ objectFit: 'cover' }} className='rounded w-100 h-100' src={item.hinhAnh} alt="Los Angeles" />
                          </div>
                          <div className="h-100 carousel-item">
                            <img style={{ objectFit: 'cover' }} className='rounded w-100 h-100' src={item.hinhAnh} alt="Chicago" />
                          </div>
                          <div className="h-100 carousel-item">
                            <img style={{ objectFit: 'cover' }} className='rounded w-100 h-100' src={item.hinhAnh} alt="New York" />
                          </div>
                        </div>
                        {/* Left and right controls */}
                        <a className="carousel-control-prev" href={`#demo${index}`} data-slide="prev">
                          <span className="carousel-control-prev-icon" />
                        </a>
                        <a className="carousel-control-next" href={`#demo${index}`} data-slide="next">
                          <span className="carousel-control-next-icon" />
                        </a>
                      </div>
                    </div>

                    <div className="ant-card-body">
                      <div className="ant-card-meta">
                        <div className="ant-card-meta-detail">
                          <div className="ant-card-meta-title p-0 m-0 mt-2">{item.tenPhong}</div>
                          <p className='text-sm text-dark p-0 m-0'> {item.khach} khách - {item.phongNgu} phòng ngủ- {item.phongTam} phòng tắm</p>
                          <div className='grid grid-cols-12'>
                            <p className='col-span-11 text-sm text-dark font-weight-bold'> {item.giaTien} $ / đêm</p>
                            <p id='icon-yeu-thich' className='text-center'><i id='icon' className="fa-solid fa-heart"></i></p>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
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
