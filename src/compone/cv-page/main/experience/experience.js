import React, { Component } from 'react';
// import ExperienceBar from './__experience__experience-progress-bar/experience__experience-progress-bar.js';


class Experience extends Component {
  render() {
    return (

      <div className="experience">
        <div className="experience__section experience__section_left">

          <div className="experience__section__el">
            <p className="experience__section__el__text_title">Stage Chez Artips</p>
            <p className="experience__section__el__text_main">Travaux de design et d'interogation dans la Start-up. Francaise "Artips". Montreal, CANADA</p>
            <span className="experience__section__el__text_arrow experience__section__el__text_arrow_left"></span>
            <div className="experience__section__el__text_date">
              <p className="experience__section__el__text_date_month">Julliet-Aout</p>
              <p className="experience__section__el__text_date_year">2013</p>
            </div>
          </div>

          <div className="experience__section__el experience__section__el_left">
            <p className="experience__section__el__text_title">Creation de Mini Rider's</p>
            <p className="experience__section__el__text_main">Lancement du forum Mini-rider.com site comptabilisant aujourd'hui plus de 1400 visites quotidiennes</p>
            <span className="experience__section__el__text_arrow experience__section__el__text_arrow_left"></span>
            <div className="experience__section__el__text_date">
              <p className="experience__section__el__text_date_month">Novembre</p>
              <p className="experience__section__el__text_date_year">2009</p>
            </div>
          </div>

        </div>
        <div className="experience__section experience__section_right">

          <div className="main__section-name experience__section-name">
            <div className="main__section-name__icon experience__section-name__icon_experience"></div>
            <p className="main__section-name__text experience__section-name__text_experience">experience</p>
          </div>

          <div className="experience__section__el experience__section__el_right">
            <p className="experience__section__el__text_title">Travaux saisonier</p>
            <p className="experience__section__el__text_main">Saisonier dans la ceuillette de mandarine. Riverton Farm - 4625 Gayndah AUSTRALIE</p>
            <span className="experience__section__el__text_arrow experience__section__el__text_arrow_right"></span>
            <div className="experience__section__el__text_date">
              <p className="experience__section__el__text_date_month">Mars-Mai</p>
              <p className="experience__section__el__text_date_year">2011</p>
            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default Experience;
