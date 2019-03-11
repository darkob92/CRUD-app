import React from 'react';
import './sideMenu.css';

const SideMenu = () => {
  return (
    <div className="menu-container">
        <ul className="categories">
          <li className="category"><a href="#">New in</a></li>
          <li className="category"><a href="#">Woman</a></li>
          <li className="category"><a href="#">Man</a></li>
          <li className="category"><a href="#">Kids</a></li>
          <li className="category"><a href="#">Shoes</a></li>
          <li className="category"><a href="#">Stories</a></li>
          <li className="category"><a href="#">Info +</a></li>
        </ul>
    </div>
  )
}

export default SideMenu;