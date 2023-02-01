import React from 'react'
import 'font-awesome/css/font-awesome.min.css'

export default function Header() 
{
  return (
      <div className="header-container">
        <div className="header-logo-container">
          <img src="https://i.postimg.cc/htmNRqtz/newext-logo.png" className="newext-logo" alt="newext-logo" />
        </div>
        <div className="search-and-account-container">
          <div className="search-bar-container">
            <form className="search-bar" action="">
              <input 
                type="text" 
                placeholder="Search..." 
                name="search-bar" 
                onClick={() => {}}
              />
              <i 
                className="fa fa-search" 
                onClick={() => {}}>
              </i>
            </form>
          </div>
          <div className="my-account">My account</div>
        </div> 
      </div>
  )
}