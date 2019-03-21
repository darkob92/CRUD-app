import React, { Component } from 'react';
import './sideMenu.css';
import Products from '../Products/Products';
import { Link } from 'react-router-dom';

class SideMenu extends Component {
  state = {
    showWoman: false,
    showMan: false
  }

  toggleWoman = (e) => {
    e.preventDefault();
    const doesShow = this.state.showWoman;
    this.setState({ showWoman: !doesShow })
  }

  toggleMan = (e) => {
    e.preventDefault();
    const doesShow = this.state.showMan;
    this.setState({ showMan: !doesShow })
  }


  render() {
    return (
        <div className="menu-container">
          <ul className="categories">
            <li className="category"><Link to="new-in">New in</Link></li>
            <li ref="woman" onClick={this.toggleWoman} className="category"><a href="#">Woman</a>
              {
                this.state.showWoman === true ?
                  <ul className="submenu">
                    <li>New in</li>
                    <li>Coats</li>
                    <li>Jackets</li>
                    <li>Dresses</li>
                    <li>Knitwear</li>
                    <li>Shirts | Blouses</li>
                    <li>T-shirts</li>
                    <li>Tops</li>
                    <li>Trousers</li>
                    <li>Jeans</li>
                    <li>Skirts</li>
                    <li>Shorts</li>
                    <li>Suits</li>
                    <li>Shoes</li>
                    <li>Bags</li>
                    <li>Accessories</li>
                  </ul> : null
              }
            </li>
            <li id="man" onClick={this.toggleMan} className="category"><a href="#">Man</a>
              {
                this.state.showMan   === true ?
                  <ul className="submenu">
                    <li>New in</li>
                    <li>Jackets</li>
                    <li>Blazers</li>
                    <li>Suits</li>
                    <li>Knitwear</li>
                    <li>Trousers</li>
                    <li>Tracksuits</li>
                    <li>Shorts</li>
                    <li>Jeans</li>
                    <li>Shirts</li>
                    <li>T-Shirts</li>
                    <li>Polos</li>
                    <li>Sweatshirts</li>
                    <li>Shoes</li>
                    <li>Accessories</li>
                  </ul> : null
              }
            </li>
            <li className="category"><a href="#">Kids</a></li>
            <li className="category"><a href="#">Shoes</a></li>
            <li className="category"><a href="#">Stories</a></li>
            <li className="category"><a href="#">Info +</a></li>
          </ul>
        </div>
    );
  }
}

export default SideMenu;