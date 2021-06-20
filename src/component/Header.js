import React from 'react'
import "./Header.css";
import heart from '../static/icons/heart.png';
function Header() {
  const inline ={display:'inline'};
    return (
        <div className="header__headerImage">
        <div className="header__alignImage">
          <img className="" src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png' alt="logo" />
          <span className="header__searchField__container">
            <input type="text" name="search"  className="header__searchField" placeholder="Search"/>
          </span>
          <div className="header__navIcons" style={inline}>
              <img src={heart} alt="notification" height="20px" className="" />
              {/* <img src='public/assets/icons/heart.png' alt="notification" height="20px" className="" /> */}
          </div>
        </div>
      </div>
    )
}

export default Header