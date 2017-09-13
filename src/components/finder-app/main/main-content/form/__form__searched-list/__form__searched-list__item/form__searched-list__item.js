import React , {Component} from 'react';

export default class SearchedListItem extends Component {
    render() {
      const {title, release_date, original_language, vote_average, original_title} = this.props;

        return (
          <tr>
            <td>{title}</td>
            <td>{release_date}</td>
            <td>{original_language}</td>
            <td>{vote_average}</td>
            <td>{original_title}</td>
          </tr>
        );
    }
}
