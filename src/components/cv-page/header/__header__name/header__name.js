import React, { Component } from 'react';
// import Header from 'header/header.js';


class HeaderName extends Component {
  render() {
    return (
      <div className="header__name header__name_size">
        <p className="header__name__full-name">Rick Astley</p>
        <p className="header__name__profession">front-end developer</p>
      </div>
    );
  }
}

export default HeaderName;
