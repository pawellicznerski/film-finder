import React, { Component } from 'react';
// import Header from 'header/header.js';


class Interests extends Component {
  render() {
    return (
      <div className="interests">
        <div className="interests__content">

          <div className="main__section-name interests__section-name">
            <div className="main__section-name__icon interests__section-name__icon_interests"></div>
            <p className="main__section-name__text interests__section-name__text_interests">interests</p>
          </div>

          <div className="interests__cirles">
            <div className="interests__cirles_item interests__cirles_item_dark-main">webdisign
              <div className="interests__cirles_item interests__cirles_item_dark-main_lightest">musique</div>
              <div className="interests__cirles_item interests__cirles_item_dark-main_light">sport</div>
              <div className="interests__cirles_item interests__cirles_item_dark-main_darkest">cinema</div>
            </div>
          </div>

        </div>
      </div>

    );
  }
}

export default Interests;
