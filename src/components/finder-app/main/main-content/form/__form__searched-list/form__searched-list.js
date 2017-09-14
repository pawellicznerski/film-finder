import React, { Component } from 'react';
import _ from "lodash";
import {SearchedListHeader} from "./form__searched-list__head";
import SearchedListItem from "./__form__searched-list__item/form__searched-list__item";

 export class SearchedList extends Component {
    renderItems() {
        const props = _.omit(this.props, 'currentListArr','currentListArrIsFull');

        return _.map(this.props.currentListArr, (film, index) => film?<SearchedListItem id={film.id} key={index} index={index}{...film} {...props} />: null);
    }

    render() {
        return (
          <table className="form__searched-list" style={{display:this.props.currentListArrIsFull?'':'none'}}>
            <SearchedListHeader />
              <tbody  className="form__searched-list__body">
               {this.renderItems()}
             </tbody>
          </table>
        );
    }
}
