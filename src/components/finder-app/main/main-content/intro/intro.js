import React, { Component } from 'react';

export class Intro extends Component {
  render() {
    return (
      <div  className="intro">
        <div className="intro__words">
          <div className="intro__words_first"></div>
          <div className="intro__words_second"></div>
        </div>
        <div className="intro__magnifyingGlass-container">
          <div className="intro__magnifyingGlass">
            <div className="intro__magnifyingGlass__stick"></div>
          </div>
        </div>
      </div>
    );
  }
}
