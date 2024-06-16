import React, { useState, useEffect } from 'react';
import './css/Search.css';
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

        <button id='btn-timkiem' type="button" className="" data-toggle="modal" data-target="#exampleModal">
          <i className="fa fa-search mr-1" />Tìm kiếm...
        </button>
      </form>

      <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel" style={{ color: '#fe6b6e' }}>Tìm kiếm</h5>
              <button id='btn-closenhat' type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <SearchForm />
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
