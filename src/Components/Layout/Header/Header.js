import React from 'react' ;
import './header.css';
import Cart from '../../../Images/Icons/cart.svg';
import UserIcon from '../../../Images/Icons/user.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
      <div className="header-container">
        <Link to="/">
          <div className="logo-box">
            <h1 className="title">
              <span>Online</span>
              <span>Shopping</span>
            </h1>
          </div>
        </Link>
        <div className="search-box">
          <span>search</span>
          <input type="text" />
        </div>
        <div className="user-box">
          <span>Sign In</span>
          <img className="icon" src={UserIcon} />
          <img className="icon" src={Cart}/>
        </div>
      </div>
  )
}

export default Header;