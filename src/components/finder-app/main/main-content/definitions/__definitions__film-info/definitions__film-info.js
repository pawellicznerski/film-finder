import React, { Component } from 'react';
import { Definition } from './../definitions';

export class FilmInfo extends Component {
  render() {
    return (
      <Definition>
        <h1>{location.pathname}</h1><br/>
          <strong>Film, also called a movie, motion picture, theatrical film, or photoplay,</strong> is a series of still images that when shown on a screen create an illusion of motion images (due to the phi phenomenon).This optical illusion causes the audience to perceive continuous motion between separate objects viewed rapidly in succession. The process of filmmaking is both an art and an industry. A film is created by photographing actual scenes with a motion picture camera; by photographing drawings or miniature models using traditional animation techniques; by means of CGI and computer animation; or by a combination of some or all of these techniques and other visual effects.<br/><br/>
        Source: en.wikipedia.org/wiki/Film<br/><br/>
      </Definition>
    );
  }
}
