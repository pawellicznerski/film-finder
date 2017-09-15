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

export class FinderApp extends Component {
  render() {

    return (
      <Router history={history}>
          <div className="finder-app">
              <section>
                <div className="main">
                  <NavBottom/>
                  <Switch>
                    <Route exact path="/" component={Intro} />
                    <Route exact path="/film-finder" component={Intro} />
                    <Route exact path="/film-finder/form" component={Form}/>
                    <Route exact path="/film-finder/filmInfo" component={FilmInfo}/>
                    <Route exact path="/film-finder/filmSeriesInfo" component={FilmSeriesInfo}/>
                    <Route exact path="/film-finder/serialInfo" component={SerialInfo}/>
                    <Route component={NoMatch}/>
                  </Switch>
                </div>
              </section>
              <Footer/>
          </div>
      </Router>

    );
  }
}
