import React, { useState, useEffect } from 'react';
import '../css/Search.css';
import { useDispatch, useSelector } from 'react-redux';
import { actGetViTri } from '../../_duck/action';
import { ViTri } from '../../_duck/types';
import SearchForm from './SearchForm';

export default function Search() {
  const [hidden, setHidden] = useState(false);
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const yNew = window.scrollY;
      const isScrollingDown = yNew > y;
      const isScrollingUp = yNew < y;

      const isAtTop = yNew === 0;
      const isScrollOverThreshold = yNew > 100;
      const isAtBottom = yNew >= document.documentElement.scrollHeight - window.innerHeight;

      if (isAtBottom || isScrollingDown && isScrollOverThreshold) {
        setHidden(true);
      } else if (isAtTop || isScrollingUp) {
        setHidden(false);
      }
      setY(yNew);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [y]);

  return (
    <>
      <form id='search' className={hidden ? 'tat' : 'bat'}>
        {/* <input type="text" placeholder="Tìm kiếm..." name="search" data-toggle="modal" data-target="#myModal" /> */}
        {/* <button type="submit"><i className="fa fa-search" /></button> */}

        {/* <div className="form-group mb-0">
          <select className="form-control" id="sel1">
            <option>Chọn địa điểm</option>
            {data?.map((item: ViTri, index: any) => {
              return <option key={index}>{item.tinhThanh}</option>
            })}
          </select>
        </div> */}

        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Tìm kiếm...
        </button>

      </form>

      <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <SearchForm />
            </div>
            {/* <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div> */}
          </div>
        </div>
      </div>

    </>
  );
}
