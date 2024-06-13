import React from 'react'
import './css/Search.css'

export default function Search() {
  return (
    <>
      {/* The form */}
      <form id='search' className="example" action="action_page.php">
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit"><i className="fa fa-search" /></button>
      </form>

    </>
  )
}
