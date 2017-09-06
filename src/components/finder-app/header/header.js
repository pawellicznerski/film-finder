import React, { Component } from 'react';
import { BrowserRouter as Router,Route,NavLink, Switch } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="navCNT">
          <NavLink to="/" style={{ textDecoration: 'none'}} ><div className="menu-logo"><p>menu</p></div></NavLink>
        </div>
      </nav>
    );
  }
}

export default Header;
