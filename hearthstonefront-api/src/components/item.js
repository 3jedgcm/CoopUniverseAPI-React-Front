import React, { Component } from 'react';
import * as Constant from '../asset/icon.js';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Image from "react-graceful-image";
import '../asset/style.css';


class Item extends Component
{
  render()
  {
    const url = "https://art.hearthstonejson.com/v1/orig/"+ this.props.data.id + ".png"

    let newText = this.props.data.text &&  this.props.data.text.replace("<b>","").replace("</b>","")

    return (
      <div>
        <Paper elevation={1} style={{width:'400px',height:'700px'}}>
          <Grid >
              <Image className="responsive-img imgArt" alt="Not Found / Loading" src={url}/>
                <List>
                  <ListItem alignItems = "flex-start">
                    <Typography variant="h6" gutterBottom>{this.props.data.name} </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant="body1" gutterBottom>{this.props.data.description}</Typography>
                  </ListItem>
                  <ListItem >
                    <Typography variant="body1" gutterBottom>{newText}</Typography>
                  </ListItem>
                  <ListItem>
                    <Button variant="contained"  color="primary" onClick={() => this.props.detailItem(this.props.data)}>
                        Detail de la carte
                    </Button>
                  </ListItem>
               </List>
          </Grid >
            </Paper>
      </div>
    );
  }
}

export default Item;
