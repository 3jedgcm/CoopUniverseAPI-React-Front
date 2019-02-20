import React, { Component } from 'react';
import * as Constant from '../asset/icon.js';
import '../asset/style.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Image from "react-graceful-image";
import Paper from '@material-ui/core/Paper';
class DetailItem extends Component
{

  render()
  {
    const url = "https://art.hearthstonejson.com/v1/render/latest/frFR/512x/"+ this.props.data.id + ".png"
    return (
      <div className="container"  className="container" style={{marginLeft:"30%"}}>
        <Paper elevation={1} style={{width:'50%',height:'100%'}}>
        <List>
          <ListItem>
            <Image style={{width:'300px',height:'450px'}} alt="Not Found / Loading" src={url}/>
            <Typography variant="body1" gutterBottom><b>Artiste : </b> {this.props.data.artist?this.props.data.artist:"inconnu"}</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1" gutterBottom><b>Description </b>  : {this.props.data.flavor?this.props.data.flavor:"aucune description"}</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1" gutterBottom><b>Rareté </b>: {this.props.data.rarity?this.props.data.rarity.toLowerCase():"non définis"}</Typography>
            </ListItem>
            <ListItem>
          <Typography variant="body1" gutterBottom><b>Type </b>: {this.props.data.type?this.props.data.type.toLowerCase():"non définis"}</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1" gutterBottom><b>Classe </b>: {this.props.data.playerClass.toLowerCase()}</Typography>
        </ListItem>
          <ListItem>
            <Typography variant="body1" gutterBottom><b>Collectible </b> : {this.props.data.collectible?"oui":"non"}</Typography>
          </ListItem>
            {this.props.data.howToEarn
              &&
              <div>
                <ListItem>
                  <Typography variant="body1" gutterBottom> <b> Comment récuperer la carte :</b> </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1" gutterBottom><b>Simple </b>: {this.props.data.howToEarn}</Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1" gutterBottom><b>Dorée </b>: {this.props.data.howToEarnGolden}</Typography>
                </ListItem>
              </div>

            }
          <ListItem>
              <Button style={{marginLeft:"90%"}} variant="contained"  color="primary" onClick={() => this.props.detailItem(null)}>
                  Retour
              </Button>
          </ListItem>
        </List>
      </Paper>
      </div>
    );
  }
}

export default DetailItem;
