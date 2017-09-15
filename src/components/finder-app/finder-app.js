import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Switch, NavLink } from 'react-router-dom';

import { Intro}  from './main/main-content/intro/intro.js';
import { Form }  from './main/main-content/form/form.js';
import { FilmSeriesInfo }  from './main/main-content/definitions/__definitions__film-series-info/definitions__film-series-info.js';
import { FilmInfo }  from './main/main-content/definitions/__definitions__film-info/definitions__film-info.js';
import { SerialInfo }  from './main/main-content/definitions/__definitions__serial-info/definitions__serial-info.js';
import { NoMatch }  from './main/main-content/no-match/no-match.js';
import { NavBottom }  from './main/main__nav-bottom/main__nav-bottom.js';

import { Footer }  from './footer/footer.js';

import { Header }  from './header/header.js';

export class FinderApp extends Component {
  constructor(props){
    super(props);
    this.state={
      toggleShowLogo:false,
    }
  }
  toggleHeaderLogo(value){
    this.setState({toggleShowLogo:value,})
  }

  render() {
    return (
      <Router history={history}>
          <div className="finder-app">
              {location.pathname==="/film-finder"?<header className="header"></header>:<Header toggleHeaderLogo={this.toggleHeaderLogo}></Header> }
              <section>
                <div className="main">
                  <Switch>
                    <Route exact path="/film-finder" component={Intro} toggleHeaderLogo={this.toggleHeaderLogo.bind(this)}/>
                    <Route exact path="/film-finder/form" component={Form}/>
                    <Route exact path="/film-finder/filmInfo" component={FilmInfo}/>
                    <Route exact path="/film-finder/filmSeriesInfo" component={FilmSeriesInfo}/>
                    <Route exact path="/film-finder/serialInfo" component={SerialInfo}/>
                    <Route component={NoMatch}/>
                  </Switch>
                <NavBottom/>
                </div>
              </section>
              <Footer/>
          </div>
      </Router>

    );
  }
}
