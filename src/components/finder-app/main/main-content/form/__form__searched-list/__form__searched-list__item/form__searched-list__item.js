import React , {Component} from 'react';

export default class SearchedListItem extends Component {
    render() {
      const {title, release_date, original_language, vote_average, original_title,index} = this.props;
        return (
              <tr className={(index%2===0)?"form__searched-list__body__row form__searched-list__body__row_1":'form__searched-list__body__row form__searched-list__body__row_2'}>
                <th className="form__searched-list__body__row__el form__searched-list__body__row__el_no">{index+1}</th>
                <th className="form__searched-list__body__row__el form__searched-list__body__row__el_title">{title}</th>
                <th className="form__searched-list__body__row__el form__searched-list__body__row__el_release">{release_date}</th>
                <th className="form__searched-list__body__row__el form__searched-list__body__row__el_lang">{original_language}</th>
                <th className="form__searched-list__body__row__el form__searched-list__body__row__el_vote">{vote_average}</th>
                <th className="form__searched-list__body__row__el form__searched-list__body__row__el_ori-title">{original_title}</th>
              </tr>
        );
    }
}
