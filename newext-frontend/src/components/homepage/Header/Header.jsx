import React from 'react'
import './header.css'
import 'font-awesome/css/font-awesome.min.css'

const SearchBar = () => {
  return (
    <>
      <form className="search-bar" action="">
        <div className="search-button">
          <i className="fa fa-search" onClick={() => {}}></i>
        </div>
        <div className="search-input-container">
          <input type="text" placeholder="Search..." name="search-bar" onClick={() => {}}/>
        </div>
      </form>
    </>
  )
}

const ProfileLogo = () => {
  return (
    <div className="my-account" onClick={() => {}}>
      <i 
        className="fa fa-user-o" >
      </i>
    </div>
  )
}

const Header = () => {
  return (
      <>
      <div className="header-container">
        <div className="header-logo-container">
          <img src="https://i.postimg.cc/htmNRqtz/newext-logo.png" className="newext-logo" alt="newext-logo" />
        </div>
        <div className="search-and-account-container">
          <div className="search-bar-container">
            <SearchBar />
          </div>
          <ProfileLogo />
        </div> 
      </div>
    </>
  )
}

export default Header