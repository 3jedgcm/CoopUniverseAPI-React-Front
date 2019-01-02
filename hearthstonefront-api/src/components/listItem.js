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
    if(this.props != nextProps)
    {
      if(nextProps.items != "" && nextProps.items != undefined)
      {
        this.setState({items: nextProps.items})
        let temp = this.generateItem(nextProps.items)
        this.setState({displayItems:temp.slice(nextProps.start,nextProps.end)});
      }
    }
  }
  generateItem(items)
  {
    return items.data.cards.map((item) =>

        <Item key={item.id} id={item.id} name={item.name} cost={item.cost} health={item.health} attack={item.attack} type={item.type} description={item.description} />

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
