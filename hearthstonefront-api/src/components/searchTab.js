import React, { Component } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
class SearchTab extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {menu:null,selected:"FILTER",text:""}
    console.log(props)
  }
  onChange(event)
  {
    this.setState({selected:event.nativeEvent.target.value});
  }

  onChangeText(event)
  {

    this.setState({text:event.nativeEvent.target.value})
  }

  handleClick = event => {
  this.setState({ menu: event.currentTarget })
  }

handleClose = event => {
  event.currentTarget.textContent ?
  this.setState({selected:event.currentTarget.textContent.toLowerCase(),menu: null })
  :
  this.setState({menu: null })
  }

  render()
  {
    return (
      <div className="row card-panel">
          <Grid container spacing={24} style={{marginBottom:"1%"}} justify="center" alignContent="center" alignContent="center" alignItems="center">
            <Grid item xs={1}>
              <TextField
                id="standard-name"
                label="Filtre"
                onChange={(event) => this.onChangeText(event)}
                />
            </Grid>
            <Grid item  xs={1}>
              <Button
                variant="outlined" color="primary"
                aria-owns={this.state.menu ? 'simple-menu' : undefined}
                aria-haspopup="true"
                onClick={this.handleClick}>
              {this.state.selected}

              </Button>
              <Menu id="simple-menu"
                anchorEl={this.state.menu}
                open={Boolean(this.state.menu)}
                onClose={this.handleClose}>
                  <MenuItem  onClick={(event) => this.handleClose(event)} value="artist">Artist</MenuItem>
                  <MenuItem  onClick={(event) => this.handleClose(event)} value="cardClass">CardClass</MenuItem>
                  <MenuItem  onClick={(event) => this.handleClose(event)} value="collectible">Collectible</MenuItem>
                  <MenuItem  onClick={(event) => this.handleClose(event)} value="cost">Cost</MenuItem>
                  <MenuItem  onClick={(event) => this.handleClose(event)} value="flavor">Flavor</MenuItem>
                  <MenuItem  onClick={(event) => this.handleClose(event)} value="id">Id</MenuItem>
                  <MenuItem  onClick={(event) => this.handleClose(event)} value="name">Name</MenuItem>
                  <MenuItem  onClick={(event) => this.handleClose(event)} value="set">Set</MenuItem>
                  <MenuItem  onClick={(event) => this.handleClose(event)} value="text">Text</MenuItem>
                  <MenuItem  onClick={(event) => this.handleClose(event)} value="type">Type</MenuItem>
                  <MenuItem  onClick={(event) => this.handleClose(event)} value="rarity">Rarity</MenuItem>
              </Menu>
              </Grid>
              <Grid item xs={1}>
            <Typography variant="body1" gutterBottom> {this.props.numberOfCard} cartes trouvés  !</Typography>
            </Grid>
            <Grid item xs={1}>
            <Button variant="contained"  color="primary" className="waves-effect waves-light btn" onClick={() => this.props.search(this.state.selected,this.state.text)}>
            Rechercher
            </Button>
            </Grid>
          </Grid>
      </div>
    );
  }
}
//          <select className="browser-default" onChange={(event) => this.onChange(event)}>
export default SearchTab;
