import React, { Component } from 'react';
import './Components/Layout/Global/global.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Components/Layout/Header/Header';
import SideMenu from './Components/SideMenu/SideMenu';
import MainPage from './Components/MainPage/MainPage';
import Products from './Components/Products/Products';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <SideMenu/>
        </div>
        <Route exact path="/" component={MainPage} />
        <Route path="/new-in" component={Products} />
      </BrowserRouter>
    );
  }
}

export default App;