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
    return (
      <div className="container">
        <div className="row valign-wrapper card-panel teal lighten-2">
            <div className="col s8">
              <img className="responsive-img" alt="Not Found / Loading" src={url}/>
            </div>
          <div className="col s10">
            <p className="flow-text">{this.props.name}</p>
          </div>
          <div className="col s11">
            <p className="">{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
