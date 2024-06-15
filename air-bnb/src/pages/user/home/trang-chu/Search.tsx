import React, { useState, useEffect } from 'react';
import './css/Search.css';

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
      <form id='search'>
        <input type="text" className={hidden ? 'tat' : 'bat'} placeholder="Tìm kiếm..." name="search" />
        {/* Tùy chọn, bạn có thể thêm nút tìm kiếm */}
        {/* <button type="submit"><i className="fa fa-search" /></button> */}
      </form>
    </>
  );
}
