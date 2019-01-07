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
    let url = "https://art.hearthstonejson.com/v1/orig/"+ this.props.id + ".png"
    return (
      <div className="container">
        <div className="card-panel teal lighten-2">
          <div className="row valign-wrapper">
            <div className="col s8">
                <img className="responsive-img imgArt" alt="Not Found / Loading" src={url}/>
              </div>
            <div className="col s10">
              <p className="flow-text">{this.props.name}</p>
              <p className="">{this.props.description}</p>
            </div>
            <div className="col s11">
              <p className="">{this.props.text}</p>
            </div>
          </div>
          <div className="text-align center">
          <button className="waves-effect waves-light btn" >
            Detail de la carte
          </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
