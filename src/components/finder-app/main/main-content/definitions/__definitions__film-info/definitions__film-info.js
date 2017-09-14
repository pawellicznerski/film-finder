import React, { Component } from 'react';
import { Definition } from './../definitions';

export class FilmInfo extends Component {
  render() {
    return (
      <Definition>
        <h1>{location.pathname}</h1><br/>
          <strong>Film </strong>tells a fictional or fictionalized story, event or narrative. In this style of film, believable narratives and characters help convince the audience that the unfolding fiction is real. Lighting and camera movement, among other cinematic elements, have become increasingly important in these films. <br/><br/>
        Source: en.wikipedia.org/wiki/Film<br/><br/>
      </Definition>
    );
  }
}
