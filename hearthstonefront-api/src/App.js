import React, { Component } from 'react';
import SearchTab from './components/searchTab.js';
import ListItem from './components/listItem.js';
import DetailItem from './components/detailItem.js';
import NavigationButton from './components/navigationButton.js';
import './asset/materialize.min.css';

class App extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {items: "",start: 0,sizePage: 10,maxSize:0}
    this.getFetch()
  }

  getFetch()
  {
    fetch('https://api.coopuniverse.fr/card/')
      .then(response => response.json())
      .then(data => this.setState({ items: data,maxSize: data.data.cards.length, detailNavigator:false}));
  }

 nextPage()
 {
   if(this.state.start + this.state.sizePage < this.state.maxSize)
   {
     let temp = this.state.start + this.state.sizePage;
     this.setState({start:temp});
     console.log(this.state.start);
   }
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
   this.setState({searchHistory:{filter:filter,value:value,withFilter:withFilter}})
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
     .then(data => {

       if(data.data.cards != null)
       {
                this.setState({ items: data,start: 0,sizePage: 10,maxSize: data.data.cards.length })
       }
       else {
          console.log("kikoo")
           this.setState({items:null,start: 0,sizePage: 10,maxSize:0 })
           console.log(this.state)
       }

     });

 }

 detailItem(item)
 {
   let temp = this.state.detailNavigator
   let secondTemp = this.state.start;
   this.setState({detailNavigator:!temp,detailItem:item});
    this.sleep(1).then(() => {
    this.nextPage()
    this.previousPage()
    })
 }
 sleep(time) {
   return new Promise((resolve) => setTimeout(resolve, time));
 }



  render()
  {
    let nextButton = this.state.start + this.state.sizePage < this.state.maxSize
    let previousButton = this.state.start > 0
    return (
      <div className="container">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
         {
           this.state.detailNavigator
          ?
          <DetailItem detailItem={this.detailItem.bind(this)} data={this.state.detailItem}/>
          :
          <div>
            <SearchTab search={this.search.bind(this)} numberOfCard={this.state.maxSize}/>
            <NavigationButton previous={this.previousPage.bind(this)} previousButtonState={previousButton} nextButtonState={nextButton} next={this.nextPage.bind(this)} />
            <ListItem detailItem={this.detailItem.bind(this)} start={this.state.start} end={this.state.start + this.state.sizePage} items={this.state.items}/>
          </div>
        }

      </div>
    );
  }


}



export default App;
