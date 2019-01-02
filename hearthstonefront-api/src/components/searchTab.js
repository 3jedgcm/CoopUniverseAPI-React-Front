import React, { Component } from 'react';
import * as Constant from '../asset/icon.js';


class SearchTab extends Component
{

  render()
  {
    return (
      <div className="searchTab">
        <input type="input" placeholder=""/>
        <img alt="icon-search" src={Constant.search}/>
      </div>
    );
  }
}

export default SearchTab;
