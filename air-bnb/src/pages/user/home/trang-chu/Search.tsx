import React, { useState, useEffect } from 'react';
import './css/Search.css';

export default function Search() {
  const [hidden, setHidden] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // setHidden(currentScrollY > prevScrollY);
      setHidden(currentScrollY > 100 && currentScrollY > prevScrollY);
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  return (
    <>
      <form id='search' >
        <input type="text" className={`${hidden ? 'tat' : 'bat'}`} placeholder="Tìm kiếm..." name="search" />
        {/* <button type="submit"><i className="fa fa-search" /></button> */}
      </form>
    </>
  );
}
