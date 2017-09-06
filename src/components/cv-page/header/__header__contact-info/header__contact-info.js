import React, { Component } from 'react';
// import Header from 'header/header.js';


class HeaderContactInfo extends Component {
  render() {
    return (
      <div className="header__contact-info">
        <div className="header__contact-info__item">
          <p className="header__contact-info__item__text">20 ans 17/11/1992</p>
          <div className="header__contact-info__item__icon header__contact-info__item__icon_birth-date"></div>
        </div>
        <div className="header__contact-info__item">
          <p className="header__contact-info__item__text">06 79 80 68 34</p>
          <div className="header__contact-info__item__icon header__contact-info__item__icon_phone"></div>
        </div>
        <div className="header__contact-info__item">
          <p className="header__contact-info__item__text">someone@gmail.com</p>
          <div className="header__contact-info__item__icon header__contact-info__item__icon_e-mail"></div>
        </div>
        <div className="header__contact-info__item">
          <p className="header__contact-info__item__text header__contact-info__item__text_last">35 Rue Rivay 92300 Lavoilios-Perret</p>
          <div className="header__contact-info__item__icon header__contact-info__item__icon_address"></div>
        </div>
      </div>
    );
  }
}

export default HeaderContactInfo;
