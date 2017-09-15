import React, { Component } from 'react';
import {NavLink } from 'react-router-dom';


export class Header extends Component {
  render() {
    return (
      <div className="header">
        <NavLink to="/">
          <div  className="logo header__logo" style={{display:this.props.headerIsShown==="false"?'none':''}}>
            <div className="logo__words header__logo__words">
              <div className="logo__words_first header__logo__words_first"></div>
              <div className="logo__words_second header__logo__words_second"></div>
            </div>
            <div className="logo__magnifying-glass-container header__logo__magnifying-glass-container">
              <div className="logo__magnifying-glass header__logo__magnifying-glass">
                <div className="logo__magnifying-glass__stick header__logo__magnifying-glass__stick ">
                </div>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
    );
  }
}
// onClick={this.props.toggleHeaderLogo}
