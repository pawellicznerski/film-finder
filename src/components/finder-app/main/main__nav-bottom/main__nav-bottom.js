import React, { Component } from 'react';
import { BrowserRouter as Router,Route,NavLink, Switch } from 'react-router-dom';

export class NavBottom extends Component {

  render() {
    return (
        <nav className="main__nav-bottom">
          <ul className="main__nav-bottom__container"  style={{ listStyleType: "none"}}>
            <NavLink exact activeClassName="main__nav-bottom__el_active" to="/form" style={{ textDecoration: 'none'}}>
              <li className="main__nav-bottom__el">Find your film</li>
            </NavLink>
            <NavLink exact activeClassName="main__nav-bottom__el_active" to="/krsInfo" style={{ textDecoration: 'none'}}>
              <li className="main__nav-bottom__el"><p>What is a movie?</p></li>
            </NavLink>
            <NavLink exact activeClassName="main__nav-bottom__el_active" to="/nipInfo" style={{ textDecoration: 'none'}}>
              <li className="main__nav-bottom__el"><p>What is series?</p></li>
            </NavLink>
            <NavLink exact activeClassName="main__nav-bottom__el_active" to="/regonInfo" style={{ textDecoration: 'none'}}>
              <li className="main__nav-bottom__el"><p>What is series?</p></li>
            </NavLink>
          </ul>
        </nav>
    );
  }
}
