import React, { Component } from 'react';
import Header from './header/header.js';
import Main from './main/main.js';


class CVPage extends Component {
  render() {
    return (
      <div className="page">
          <Header></Header>
          <Main></Main>
      </div>
    );
  }
}

export default CVPage;
