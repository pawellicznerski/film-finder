import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
// import { Intro}  from './../main/main-content/intro/intro.js';


export class Header extends Component {
  render() {
    return (
      <header className="header">
        <NavLink to={"/film-finder"} >
          <div  className="logo header__logo">
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
      </header>
    );
  }
}
// onClick={this.props.toggleHeaderLogo}
