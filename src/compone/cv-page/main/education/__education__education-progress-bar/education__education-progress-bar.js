import React, { Component } from 'react';
// import BarAndDates from './__education__education-progress-bar__bar-and-dates/education__education-progress-bar__bar-and-dates.js';


class EducationProgressBar extends Component {
  render() {
    return (
    <div className="education__education-progress-bar">

      <ul className="education__education-progress-bar__el">
        <li className="education__education-progress-bar__el__item">
          <p className="education__education-progress-bar__el__item__text">Lycee de Leon 29400 Landivisiau</p>
        </li>
        <li className="education__education-progress-bar__el__item education__education-progress-bar__el__item_color-background">
          <strong className="education__education-progress-bar__el__item__text education__education-progress-bar__el__item__text_color-background ">Permis B</strong>
        </li>
        <li className="education__education-progress-bar__el__item">
          <p className="education__education-progress-bar__el__item__text">Sydney, NSW Australie</p>
        </li>
        <li className="education__education-progress-bar__el__item education__education-progress-bar__el__item_color-background">
          <strong className="education__education-progress-bar__el__item__text education__education-progress-bar__el__item__text_color-background">Ecolie des metiers de l'internet</strong>
        </li>
      </ul>

      <ul className="education__education-progress-bar__el">
        <li className="education__education-progress-bar__el__item education__education-progress-bar__el__item_line education__education-progress-bar__el__item_line_0">
          <p className="education__education-progress-bar__el__item__text education__education-progress-bar__el__item__text_green  education__education-progress-bar__el__item__text__circle-0">Juin 2010</p>
        </li>
        <li className="education__education-progress-bar__el__item education__education-progress-bar__el__item_line education__education-progress-bar__el__item_line_1">
          <p className="education__education-progress-bar__el__item__text education__education-progress-bar__el__item__text_orange  education__education-progress-bar__el__item__text__circle-1">Novembre 2010</p>
        </li>
        <li className="education__education-progress-bar__el__item education__education-progress-bar__el__item_line education__education-progress-bar__el__item_line_2">
          <p className="education__education-progress-bar__el__item__text education__education-progress-bar__el__item__text_purple  education__education-progress-bar__el__item__text__circle-2">Janvier - Mars 2011</p>
        </li>
        <li className="education__education-progress-bar__el__item education__education-progress-bar__el__item_line education__education-progress-bar__el__item_line_last">
          <p className="education__education-progress-bar__el__item__text education__education-progress-bar__el__item__text_red  education__education-progress-bar__el__item__text__circle-3">Septembre 2012</p>
        </li>
      </ul>

      <ul className="education__education-progress-bar__el education__education-progress-bar__el_last">
        <li className="education__education-progress-bar__el__item education__education-progress-bar__el__item_color-background">
          <p className="education__education-progress-bar__el__item__text education__education-progress-bar__el__item__text_color-background"><span className="education__education-progress-bar__el__item__text_color-background_strong">Bac STG</span> Option Marketing</p>
        </li>
        <li className="education__education-progress-bar__el__item">
          <p className="education__education-progress-bar__el__item__text"></p>
        </li>
        <li className="education__education-progress-bar__el__item education__education-progress-bar__el__item_color-background">
          <p className="education__education-progress-bar__el__item__text_color-background"><span className="education__education-progress-bar__el__item__text_color-background_strong">Navitas</span> English School</p>
        </li>
        <li className="education__education-progress-bar__el__item">
          <p className="education__education-progress-bar__el__item__text">2 place de la bourse 75002 Paris</p>
        </li>
      </ul>

    </div>
    );
  }
}

export default EducationProgressBar;
