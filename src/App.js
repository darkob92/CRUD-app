import React, { Component } from 'react';
import './Components/Layout/Global/global.css';
import Header from './Components/Layout/Header/Header';
import SideMenu from './Components/SideMenu/SideMenu';
import  MainPage from './Components/MainPage/MainPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <SideMenu/>
        <MainPage/>
      </div>
    );
  }
}

export default App;