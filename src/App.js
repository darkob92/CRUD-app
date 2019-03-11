import React, { Component } from 'react';
import './Layout/Global/global.css';
import Header from './Layout/Header/Header';
import SideMenu from './Components/SideMenu/SideMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <SideMenu/>
      </div>
    );
  }
}

export default App;
