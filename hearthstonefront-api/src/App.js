import React, { Component } from 'react';
import SearchTab from './components/searchTab.js';
import ListItem from './components/listItem.js';
import DetailItem from './components/detailItem.js';
import NavigationButton from './components/navigationButton.js';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
class App extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {items: "",start: 0,sizePage: 10,maxSize:0}
    this.search(null,null)
  }

 nextPage()
 {
   if(this.state.start + this.state.sizePage < this.state.maxSize)
   {
     this.setState({start:this.state.start + this.state.sizePage});
   }
 }

 previousPage()
 {
   if(this.state.start !== 0)
   {
     this.setState({start:this.state.start - this.state.sizePage});
   }
 }

 search(filter,value)
 {
   console.log(value)
   this.setState({searchHistory:{filter:filter,value:value}})
   let url = 'https://api.coopuniverse.fr/card/';
   if(filter && value)
   {
     url = url + '?filter='+ filter +'&value_filter='+ value +'';
   }

   fetch(url)
     .then(response => response.json())
     .then(data => {
         if(data.data.cards !== null)
         {
            this.setState({ items: data.data,maxSize: data.data.cards.length })
         }
         else
         {

            this.setState({items:"",maxSize:0,start: 0 })
         }
     });
 }

 detailItem(item)
 {
   this.setState({detailNavigator:!this.state.detailNavigator,detailItem:item});
 }

  render()
  {
    let nextButton = this.state.start + this.state.sizePage < this.state.maxSize
    let previousButton = this.state.start > 0
    return (
      <div className="container">

         {
           this.state.detailNavigator
          ?
          <DetailItem detailItem={this.detailItem.bind(this)} data={this.state.detailItem}/>
          :
          <div>
            <Card>
              <CardContent>
                <SearchTab search={this.search.bind(this)} numberOfCard={this.state.maxSize}/>
                <NavigationButton previous={this.previousPage.bind(this)} previousButtonState={previousButton} nextButtonState={nextButton} next={this.nextPage.bind(this)} />
              </CardContent>
            </Card>
                <ListItem detailItem={this.detailItem.bind(this)} start={this.state.start} end={this.state.start + this.state.sizePage} items={this.state.items}/>
          </div>
        }
      </div>
    );
  }


}



export default App;
