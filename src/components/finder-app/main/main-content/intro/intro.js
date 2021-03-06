import React, { Component } from 'react';
import { MainContent } from './../main-content';
import { Header } from './../__header/header';


export class Intro extends Component {

  render() {
    return (
      <MainContent>
        <Header headerIsShown="false"/>
        <div  className="logo intro-logo">
          <div className="logo__words intro-logo__words">
            <div className="logo__words_first intro-logo__words_first"></div>
            <div className="logo__words_second intro-logo__words_second"></div>
          </div>
          <div className="logo__magnifying-glass-container intro-logo__magnifying-glass-container">
            <div className="logo__magnifying-glass intro-logo__magnifying-glass">
              <div className="logo__magnifying-glass__stick intro-logo__magnifying-glass__stick"></div>
            </div>
          </div>
        </div>
      </MainContent>
    );
  }
}
