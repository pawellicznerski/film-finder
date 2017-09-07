import React, { Component } from 'react';
import { Main } from './../main';

export class MainContent extends Component {
  render() {
    return (
      <Main>
        <div className="main-content">
          {this.props.children}
        </div>
      </Main>
    );
  }
}
