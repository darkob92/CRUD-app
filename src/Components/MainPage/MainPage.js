import React from 'react';
import './mainPage.css';
import Model1 from '../../Images/FrontImages/model-1.jpg';

const MainPage = () => {
  return (
    <div className="main-container">
      <img className="front-image" src={Model1}/>
    </div>
  )
}

export default  MainPage;