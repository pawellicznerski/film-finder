import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export class NavBottom extends Component {

  render() {
    return (
        <nav className="main__nav-bottom">
          <ul className="main__nav-bottom__container"  style={{ listStyleType: "none"}}>
            <NavLink  to="/film-finder/form" activeClassName="main__nav-bottom__el_active" style={{ textDecoration: 'none'}}>
              <li className="main__nav-bottom__el">Find your film</li>
            </NavLink>
            <NavLink  to="/film-finder/filmInfo" activeClassName="main__nav-bottom__el_active" style={{ textDecoration: 'none'}}>
              <li className="main__nav-bottom__el"><p>What is a film?</p></li>
            </NavLink>
            <NavLink  to="/film-finder/filmSeriesInfo" activeClassName="main__nav-bottom__el_active" style={{ textDecoration: 'none'}}>
              <li className="main__nav-bottom__el"><p>What is a film-series?</p></li>
            </NavLink>
            <NavLink  to="/film-finder/serialInfo" activeClassName="main__nav-bottom__el_active" style={{ textDecoration: 'none'}}>
              <li className="main__nav-bottom__el"><p>What is a TV serial?</p></li>
            </NavLink>
          </ul>
        </nav>
    );
  }
}
