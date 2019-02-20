import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import KeyboardLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardRight from '@material-ui/icons/KeyboardArrowRight';
class NavigationButton extends Component
{

  render()
  {
    return (
      <div className="row text-align center">
        <Grid container justify="center">
          <Grid item >
            <Button variant="contained"  color="primary" disabled={!this.props.previousButtonState} onClick={this.props.previous}>
              <KeyboardLeft/>
            </Button>
          </Grid>
          <Grid item style={{marginLeft:'300px'}} >
            <Button variant="contained"  color="primary"  disabled={!this.props.nextButtonState} onClick={this.props.next}>
              <KeyboardRight/>
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default NavigationButton;
