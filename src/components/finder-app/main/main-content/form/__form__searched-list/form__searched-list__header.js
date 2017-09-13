import React, {Component} from 'react';

export class SearchedListHeader extends Component {
    render() {
        return (
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Release</th>
                    <th>Language</th>
                    <th>vote</th>
                    <th>original title</th>
                </tr>
            </thead>
        );
    }
}
