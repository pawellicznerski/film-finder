import React, { Component } from 'react';
import { BrowserRouter as Router,Route,NavLink, Switch } from 'react-router-dom';
import { Intro}  from './../main/main-content/intro/intro.js';


export class Header extends Component {
  constructor(props){
    super(props);
    this.state={
      display:this.props.displayHeaderLogo,
    }
  }
  handleHideLogo(){
    this.setState({display:false})
  }

  render() {
    return (
      <header className="header">
        <NavLink to="/" style={{ textDecoration: 'none'}} onClick={this.handleHideLogo} >
          <div  className={this.state.display?"logo header__logo":"logo header__logo header__logo_hidden"}>
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
