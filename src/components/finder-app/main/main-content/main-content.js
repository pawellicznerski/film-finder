import React, { Component } from 'react';


export class MainContent extends Component {
  render() {
    return (
        <div className="main-content">
          {this.props.children}
        </div>
    );
  }
}
