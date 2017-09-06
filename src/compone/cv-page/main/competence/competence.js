import React, { Component } from 'react';
// import Header from 'header/header.js';


class Competence extends Component {
  render() {
    return (
      <div className="competence">
        <div className="competence__content">
          <div className="main__section-name competence__section-name">
            <div className="main__section-name__icon competence__section-name__icon_competence"></div>
            <p className="main__section-name__text competence__section-name__text_competence">competence</p>
          </div>

          <div className="competence__competence-bars">

            <div className="competence__competence-bars__el">
              <p className="competence__competence-bars__el__text">anglais</p>
              <div className="competence__competence-bars__el__bar">
                <div className="competence__competence-bars__el__bar_filling competence__competence-bars__el__bar_filling_first"></div>
              </div>
            </div>

            <div className="competence__competence-bars__el">
              <p className="competence__competence-bars__el__text">suite office</p>
              <div className="competence__competence-bars__el__bar">
                <div className="competence__competence-bars__el__bar_filling competence__competence-bars__el__bar_filling_second"></div>
              </div>
            </div>

            <div className="competence__competence-bars__el">
              <p className="competence__competence-bars__el__text">photoshop</p>
              <div className="competence__competence-bars__el__bar">
                <div className="competence__competence-bars__el__bar_filling competence__competence-bars__el__bar_filling_third"></div>
              </div>
            </div>

            <div className="competence__competence-bars__el">
              <p className="competence__competence-bars__el__text">flash</p>
              <div className="competence__competence-bars__el__bar">
                <div className="competence__competence-bars__el__bar_filling competence__competence-bars__el__bar_filling_fourth"></div>
              </div>
            </div>

            <div className="competence__competence-bars__el">
              <p className="competence__competence-bars__el__text">indesign</p>
              <div className="competence__competence-bars__el__bar">
                <div className="competence__competence-bars__el__bar_filling competence__competence-bars__el__bar_filling_fifth"></div>
              </div>
            </div>

            <div className="competence__competence-bars__el">
              <p className="competence__competence-bars__el__text">HTML/CSS</p>
              <div className="competence__competence-bars__el__bar">
                <div className="competence__competence-bars__el__bar_filling competence__competence-bars__el__bar_filling_last"></div>
              </div>
            </div>
          </div>


          </div>
      </div>
    );
  }
}

export default Competence;
