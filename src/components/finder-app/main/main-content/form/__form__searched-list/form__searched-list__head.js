import React, {Component} from 'react';

export class SearchedListHeader extends Component {
    render() {
        return (
          <thead  className="form__searched-list__head">
              <tr className="form__searched-list__head__row">
                  <th className="form__searched-list__head__row__el form__searched-list__head__row__el_no">No.</th>
                  <th className="form__searched-list__head__row__el form__searched-list__head__row__el_title">Title</th>
                  <th className="form__searched-list__head__row__el form__searched-list__head__row__el_release">Year</th>
                  <th className="form__searched-list__head__row__el form__searched-list__head__row__el_lang">Lang</th>
                  <th className="form__searched-list__head__row__el form__searched-list__head__row__el_vote">vote</th>
                  <th className="form__searched-list__head__row__el form__searched-list__head__row__el_ori-title">original title</th>
              </tr>
          </thead>
        );
    }
}
