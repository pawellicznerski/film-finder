import React, { Component } from 'react';
import _ from "lodash";
import {SearchedListHeader} from "./form__searched-list__header";
import SearchedListItem from "./__form__searched-list__item/form__searched-list__item";

 export class SearchedList extends Component {
    renderItems() {
        const props = _.omit(this.props, 'currentListArr');

        return _.map(this.props.currentListArr, (film, index) => film?<SearchedListItem id={film.id} key={index} {...film} {...props} />: null);
    }

    render() {
        return (
          <table className="form__searched-list">
            <SearchedListHeader/>
               {this.renderItems()}
          </table>
        );
    }
}
