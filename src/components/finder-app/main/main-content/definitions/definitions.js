import React, { Component } from 'react';
import { MainContent } from './../main-content';
import {Header} from './../__header/header';

export class Definition extends Component {
  render() {
    return (
      <MainContent>
        <Header/>
        <div className="definition">
          {this.props.children}
        </div>
      </MainContent>
    );
  }
}
