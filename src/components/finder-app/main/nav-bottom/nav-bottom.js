import React, { Component } from 'react';
import { BrowserRouter as Router,Route,NavLink, Switch } from 'react-router-dom';

export class NavBottom extends Component {

  render() {
    return (
      <nav className="nav-bottom">
        <ul className="nav-bottom__container"  style={{ listStyleType: "none"}}>
          <NavLink to="/form" style={{ textDecoration: 'none'}}>
            <li className="nav-bottom__el nav-bottom__el_first"><p>Znajdź firmę</p></li>
          </NavLink>
          <NavLink to="/krsInfo" style={{ textDecoration: 'none'}}>
            <li className="nav-bottom__el nav-bottom__el_second"><p>Co to jest KRS?</p></li>
          </NavLink>
          <NavLink to="/nipInfo" style={{ textDecoration: 'none'}}>
            <li className="nav-bottom__el nav-bottom__el_third"><p>Co to jest NIP?</p></li>
          </NavLink>
          <NavLink to="/regonInfo" style={{ textDecoration: 'none'}}>
            <li className="nav-bottom__el nav-bottom__el_last"><p>Co to jest REGON?</p></li>
          </NavLink>
        </ul>
      </nav>
    );
  }
}
