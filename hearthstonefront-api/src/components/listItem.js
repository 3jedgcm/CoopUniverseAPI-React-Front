import React, { Component } from 'react';
import Item from './item.js';
import List from '@material-ui/core/List';
import ListItemMaterial from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
class ListItem extends Component
{

  constructor(props)
  {
    super(props);
    this.props.items.length !== 0
    ?
    this.state = {items: this.props.items.cards.slice(this.props.start,this.props.end)}
    :
    this.state = {items: ""}
  }

  componentWillReceiveProps(nextProps)
  {

    if(this.props !== nextProps)
    {
      nextProps.items.cards !== undefined
      ?
      this.setState({items: nextProps.items.cards.slice(nextProps.start,nextProps.end)})
      :
      this.setState({items: ""})
    }
  }

  render()
  {
    return (
      <div className="listItem">
        <Grid container justify = "center">
          <List justify="center">
            {
              this.state.items.length !== 0
              &&
              this.state.items.map((item) =>
                  <div>
                    <ListItemMaterial>
                      <Item key={item.id} detailItem={this.props.detailItem} data={item}/>
                    </ListItemMaterial>
                  </div>
                  )
            }
          </List>
        </Grid>
      </div>
    );
  }
}

export default ListItem;
