import React, { Component } from 'react';
import * as Constant from '../asset/icon.js';
import '../asset/style.css';
import '../asset/materialize.min.css';


class Item extends Component
{

  constructor(props)
  {
    super(props);

  }

  render()
  {
    let url = "https://art.hearthstonejson.com/v1/render/latest/frFR/512x/"+ this.props.id + ".png"
    console.log(url);

    return (
      <div class="container">
        <div class="row valign-wrapper card-panel teal lighten-2">
          <div class="col s2">
           <img class="responsive-img" alt="Image Not Found <3" src={url}/>
           </div>
          <div class="col s10">
            <p class="flow-text">{this.props.name}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
