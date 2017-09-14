import React , {Component} from 'react';

export default class SearchedListItem extends Component {
    render() {
      const {title, release_date, original_language, vote_average, original_title} = this.props;

        return (
          <tbody  className="form__searched-list__body">
              <tr className="form__searched-list__body__row">
                  <th className="form__searched-list__body__row__el">{title}</th>
                  <th className="form__searched-list__body__row__el">{release_date}</th>
                  <th className="form__searched-list__body__row__el">{original_language}</th>
                  <th className="form__searched-list__body__row__el">{vote_average}</th>
                  <th className="form__searched-list__body__row__el">{original_title}</th>
              </tr>
          </tbody>
        );
    }
}
