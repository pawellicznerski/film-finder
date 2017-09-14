import React, {Component} from 'react';

export class SearchedListHeader extends Component {
    render() {
        return (
          <thead  className="form__searched-list__head">
              <tr className="form__searched-list__head__row">
                  <th className="form__searched-list__head__row__el">Title</th>
                  <th className="form__searched-list__head__row__el">Release</th>
                  <th className="form__searched-list__head__row__el">Language</th>
                  <th className="form__searched-list__head__row__el">vote</th>
                  <th className="form__searched-list__head__row__el">original title</th>
              </tr>
          </thead>
        );
    }
}
