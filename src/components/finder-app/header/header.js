import React, { Component } from 'react';
import { BrowserRouter as Router,Route,NavLink, Switch } from 'react-router-dom';



export class Header extends Component {
  render() {
    return (
      <div  className="logo logo-header">
          <div className="logo__first-word logo-header__first-word">
          </div>
          <div className="logo__second-word-container logo-header__second-word-container">
            <div className="logo__second-word logo-header__second-word">
            </div>
          </div>
          <div className="logo__magnifyingGlass-container logo-header__magnifyingGlass-container">
            <div className="logo__magnifyingGlass logo-header__magnifyingGlass  ">
              <div className="logo__magnifyingGlass__stick logo-header__magnifyingGlass__stick ">
              </div>
            </div>
          </div>
      </div>
    );
  }
}
