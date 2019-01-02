import React, { Component } from 'react';
import SearchTab from './components/searchTab.js';
import ListItem from './components/listItem.js';

class App extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {items: ""}

  }

  getFetch()
  {
    fetch('https://api.coopuniverse.fr/card/')
      .then(response => response.json())
      .then(data => this.setState({ items: data }));
  }


  render()
  {
    return (
      <div>
        <button onClick={this.getFetch.bind(this)}>
        Activate Lasers
        </button>
        <SearchTab/>

        <ListItem  start="10" end="50" items={this.state.items}/>
      </div>
    );
  }


}



export default App;
