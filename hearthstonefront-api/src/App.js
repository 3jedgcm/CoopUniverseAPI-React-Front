import React, { Component } from 'react';
import SearchTab from './components/searchTab.js';
import ListItem from './components/listItem.js';
import NavigationButton from './components/navigationButton.js';
import './asset/materialize.min.css';


class App extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {items: "",start: 0,sizePage: 10}
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

 search(filter,value,withFilter)
 {
   
   let url;
   if(withFilter)
   {
     url = 'https://api.coopuniverse.fr/card/filter?filter='+ filter +'&value_filter='+ value +'';
   }
   else
   {
     url = 'https://api.coopuniverse.fr/card/';
   }

   fetch(url)
     .then(response => response.json())
     .then(data => this.setState({ items: data }));
 }




  render()
  {
    return (
      <div className="container">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
         <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
         <SearchTab search={this.search.bind(this)}/>
         <NavigationButton previous={this.previousPage.bind(this)} next={this.nextPage.bind(this)} />
        <ListItem  start={this.state.start} end={this.state.start + this.state.sizePage} items={this.state.items}/>
      </div>
    );
  }


}



export default App;
