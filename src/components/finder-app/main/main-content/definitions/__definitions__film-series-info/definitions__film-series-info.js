import React, { Component } from 'react';
import { Definition } from './../definitions';

export class FilmSeriesInfo extends Component {
  render() {
    return (
      <Definition>
          <h1>{location.pathname}</h1><br/>
        <strong>A film series or movie series (also referred to as a film franchise or movie franchise)</strong> is a collection of related films in succession that share the same fictional universe, or are marketed as a series.
        Sometimes the work is conceived from the beginning as a multiple-film work, for example the Three Colours series, but in most cases the success of the original film inspires further films to be made. Individual sequels are relatively common, but are not always successful enough to spawn further installments.
        The Marvel Cinematic Universe is the highest grossing film series in unadjusted US Dollar figures surpassing the Harry Potter, Star Wars, James Bond, and Peter Jackson's The Lord of the Rings series. However, "Star Wars" has the highest when adjusted for inflation.<br/><br/>
      Source: en.wikipedia.org/wiki/Film_series <br/><br/>
      </Definition>
    );
  }
}
