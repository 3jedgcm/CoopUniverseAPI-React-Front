import React, { Component } from 'react';
import * as Constant from '../asset/icon.js';
import Item from './item.js';

class ListItem extends Component
{

  constructor(props)
  {
    super(props);
    this.state = {items: this.props.items}

  }
  componentWillReceiveProps(nextProps)
  {
    if(this.props !== nextProps)
    {

      if(nextProps.items.data.cards !== null && nextProps.items.data.cards !== "" && nextProps.items.data.cards !== undefined)
      {
        this.setState({items: nextProps.items})
        let temp = this.generateItem(nextProps.items)
        this.setState({displayItems:temp.slice(nextProps.start,nextProps.end)});
      }
      else
      {
        this.setState({displayItems:null});
      }
    }
  }
  generateItem(items)
  {

    return items.data.cards.map((item) =>
        <Item key={item.id} detailItem={this.props.detailItem} data={item} />
    );
  }

  render()
  {
    return (
      <div className="listItem">
      {this.state.displayItems}
      </div>
    );
  }
}

export default ListItem;
