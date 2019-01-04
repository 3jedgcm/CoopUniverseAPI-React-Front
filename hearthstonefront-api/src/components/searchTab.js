import React, { Component } from 'react';
import * as Constant from '../asset/icon.js';


class SearchTab extends Component
{

  render()
  {
    return (
      <div className="row card-panel">
        <div className="col s3">
          <input type="text" id="autocomplete-input" placeholder="Filtre" class="autocomplete"/>
        </div>
        <div className="col s2">
          <select class="browser-default">
            <option value="artist">Artist</option>
            <option value="cardClass">CardClass</option>
            <option value="collectible">Collectible</option>
            <option value="cost">Cost</option>
            <option value="flavor">Flavor</option>
            <option value="id">Id</option>
            <option value="name">Name</option>
            <option value="set">Set</option>
            <option value="text">Text</option>
            <option value="type">Type</option>
          </select>
        </div>
        <div className="col s2 offset-s5">
        <a class="waves-effect waves-light btn-large">Rechercher</a>
        </div>
      </div>
    );
  }
}

export default SearchTab;
