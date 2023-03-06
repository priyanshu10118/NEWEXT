import React from 'react'
import { useState, useMemo } from 'react'
import './header.css'
import 'font-awesome/css/font-awesome.min.css'


const SearchBar = () => {
  const [query, setQuery] = useState("")

  // test JSON data
  const Data = [
    {title: 'Manish Malhotra', link: 'https://'},
    {title: 'Harshit yadav', link: 'https;//'},
    {title: 'aradhya kumar', link: 'https;//'},
    {title: 'Abhinav Prasad', link: 'https;//'},
    {title: 'Pratay Roy', link: 'https;//'},
    {title: 'Anshul Kumar', link: 'https;//'},
    {title: 'Anmol Agarwal', link: 'https;//'},
    {title: 'Priyanshu Jha', link: 'https;//'},
    {title: 'Shivangi Shrivastava', link: 'https;//'},
    {title: 'Priyansh Pandey', link: 'https;//'}
  ]

  // going throudh JSON data and filtering out titles w.r.t keyword typed in search bar 'query'
  // useMemo so other element than Data and query does not refresh when search value changes
  const filteredData = useMemo(() => {
    return Data.filter((val)=> {
      if (query == "") {
        return 
      } else if (val.title.toLowerCase().includes(query.toLowerCase())) {
        return val
      }
    })
  }, [Data, query])

  return (
    <>
      <form className="search-bar" action="">
        <div className="search-button">
          <i className="fa fa-search" onClick={() => {}}></i>
        </div>
        <div className="search-input-container">
          <input type="search" placeholder="Search..." id='search'
            value={ query } 
            onChange={e => setQuery(e.target.value)} 
          />
          <div className="search-filter" id='search-filter'>
            {filteredData.map(item => (
              <div className="items-search"><a href={item.link}>{item.title}</a></div>
            ))}
          </div>
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
          <img src="https://i.postimg.cc/MGKxv5LF/logo-1.png' border='0' alt='logo-1'" className="newext-logo" alt="newext-logo" />
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