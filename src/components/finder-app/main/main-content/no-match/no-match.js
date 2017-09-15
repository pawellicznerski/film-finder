import React from 'react';
import { MainContent } from './../main-content';
import { Header } from './../__header/header';

export const NoMatch = ({ location }) => (
  <MainContent>
    <Header/>
    <div>
      <h3>No match for <code>dowjoe;dijw;ejd;iowej</code></h3>
    </div>
  </MainContent>
)
