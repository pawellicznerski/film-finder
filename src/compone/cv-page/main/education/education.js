import React, { Component } from 'react';
import EducationProgressBar from './__education__education-progress-bar/education__education-progress-bar.js';


class Education extends Component {
  render() {
    return (
      <div className="education">
        <div className="main__section-name education__section-name">
          <div className="main__section-name__icon education__section-name__icon_education"></div>
          <p className="main__section-name__text education__section-name__text_education">formations</p>
        </div>
        <EducationProgressBar></EducationProgressBar>
      </div>
    );
  }
}

export default Education;
