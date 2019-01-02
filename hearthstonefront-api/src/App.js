import React, { Component } from 'react';
import SearchTab from './components/searchTab.js';
import ListItem from './components/listItem.js';
import './asset/materialize.min.css';


class App extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {items: "",start: 0,sizePage: 35}
    this.getFetch()
  }

  getFetch()
  {
    fetch('https://api.coopuniverse.fr/card/')
      .then(response => response.json())
      .then(data => this.setState({ items: data }));
  }

 nextPage()
 {
  let temp = this.state.start + this.state.sizePage;
  this.setState({start:temp});
  console.log(this.state.start);
 }

 previousPage()
 {
   if(this.state.start !== 0)
   {
     let temp = this.state.start - this.state.sizePage;
     this.setState({start:temp});
   }
   console.log(this.state.start);
 }




  render()
  {
    return (
      <div >
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>



        <button className="btn-floating waves-effect waves-light btn" onClick={this.previousPage.bind(this)}>
        <i className="material-icons">keyboard_arrow_left</i>
        </button>

        <button className="btn-floating waves-effect waves-light btn" onClick={this.nextPage.bind(this)}>
        <i className="material-icons">keyboard_arrow_right</i>
        </button>

        <SearchTab/>

        <ListItem  start={this.state.start} end={this.state.start + this.state.sizePage} items={this.state.items}/>
      </div>
    );
  }


}



export default App;
