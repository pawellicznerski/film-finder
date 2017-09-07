import React, { Component } from 'react';
import { MainContent } from './../main-content';

export class Definition extends Component {
  render() {
    return (
      <MainContent>
        <div className="definition">
          {this.props.children}
        </div>
      </MainContent>
    );
  }
}
