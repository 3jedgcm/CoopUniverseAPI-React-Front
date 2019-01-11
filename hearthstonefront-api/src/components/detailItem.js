import React, { Component } from 'react';
import * as Constant from '../asset/icon.js';
import '../asset/style.css';
import '../asset/materialize.min.css';

class DetailItem extends Component
{

  constructor(props)
  {
    super(props);
  }

  render()
  {
    let url = "https://art.hearthstonejson.com/v1/render/latest/frFR/512x/"+ this.props.data.id + ".png"
    return (
      <div className="container text-align center">
        <div className="card-panel teal lighten-2 ">

          <p className="flow-text">{this.props.data.name}</p>
          <p className="">Class : {this.props.data.playerClass} </p>


        <div className="row valign-wrapper">

          <div className="col s5  offset-s2">
            <img className="responsive-img" alt="Not Found / Loading" src={url}/>
          </div>
          <div>
            <p className="">Artiste : {this.props.data.artist?this.props.data.artist:"Inconnu"}</p>

          </div>

        </div>

        <p className="">{this.props.data.flavor}</p>
        <p className="">Rarity : {this.props.data.rarity?this.props.data.rarity:"Non définis"}</p>
        <p className="">Type : {this.props.data.type?this.props.data.type:"Non définis"}</p>
        <p className="">{this.props.data.race?"Race : "+this.props.data.race:"Non définis"}</p>
        <p className="">La carte est {this.props.data.collectible?"collectile":"non collectible"}</p>
        {this.props.data.howToEarn?
          <div>
            <p className="flow-text">Comment récuperer la carte :</p>
            <p className="">Simple : {this.props.data.howToEarn}</p>
            <p className="">Dorée : {this.props.data.howToEarnGolden}</p>
          </div>
        :null
        }

        <button className="waves-effect waves-light btn" onClick={this.props.detailItem.bind(this,null)}>
          Retour
        </button>
        </div>

      </div>
    );
  }
}

export default DetailItem;
