import React, { Component } from 'react';
import { BrowserRouter as Router,Route,NavLink, Switch } from 'react-router-dom';



export class Header extends Component {

  returnToMenu=(e)=>{
    e.preventDefault();
    this.props.history.push('/');
  }//end of returnToMenu

  render() {
    return (
      <header className="header">
        <div  className="logo header__logo" onClick={this.returnToMenu}>
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
      </header>
    );
  }
}
// <nav>
//   <div className="navCNT">
//     <NavLink to="/" style={{ textDecoration: 'none'}} ><div className="menu-logo"><p>menu</p></div></NavLink>
//   </div>
// </nav>
