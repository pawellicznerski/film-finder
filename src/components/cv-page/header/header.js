import React, { Component } from 'react';
import HeaderName from './__header__name/header__name.js';
import HeaderPicture from './__header__picture/header__picture.js';
import HeaderContactInfo from './__header__contact-info/header__contact-info.js';


class Header extends Component {
  render() {
    return (
      <header className="header">
        <HeaderName></HeaderName>
        <HeaderPicture></HeaderPicture>
        <HeaderContactInfo></HeaderContactInfo>
      </header>
    );
  }
}

export default Header;
