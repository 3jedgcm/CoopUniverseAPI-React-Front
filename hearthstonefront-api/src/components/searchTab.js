import React, { Component } from 'react';
import * as Constant from '../asset/icon.js';

class SearchTab extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {selected:null,text:""}

  }
  onChange(event)
  {
    this.setState({selected:event.nativeEvent.target.value});
    console.log(this.state.text)
  }

  onChangeText(event)
  {

    this.setState({text:event.target.value})
  }

  render()
  {
    return (
      <div className="row card-panel">
        <div className="col s3">
          <input
          type="text"
          id="autocomplete-input"
          placeholder="Filtre"
          className="autocomplete"
          onChange={this.onChangeText.bind(this)}/>
        </div>
        <div className="col s2">
          <select className="browser-default" onChange={this.onChange.bind(this)}>
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
            <option value="rarity">Rarity</option>
          </select>
        </div>
        <div className="col s2">

        </div>
        <div>
          <p className="">{this.props.numberOfCard} cartes trouvés !</p>
        </div>

        <div className="col s2 offset-s5">
        <button className="waves-effect waves-light btn" onClick={this.props.search.bind(this,this.state.selected,this.state.text,true)}>
        Rechercher
        </button>
        </div>
      </div>
    );
  }
}

export default SearchTab;
