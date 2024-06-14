import React from 'react';

export default function Search() {
  return (
    <>
      <form id='search' className="example" action="action_page.php">
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit"><i className="fa fa-search" /></button>
      </form>
    </>
  )
}
