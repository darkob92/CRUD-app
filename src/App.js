import React, { Component } from 'react';
import './Components/Layout/Global/global.css';
import Header from './Components/Layout/Header/Header';
import SideMenu from './Components/SideMenu/SideMenu';
import  MainPage from './Components/MainPage/MainPage';
import Products from './Components/Products/Products';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <SideMenu/>
        <Products/>
      </div>
    );
  }
}

export default App;