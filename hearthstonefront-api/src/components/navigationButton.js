import React, { Component } from 'react';
import * as Constant from '../asset/icon.js';


class NavigationButton extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (
      <div className="row text-align center">
        <button disabled={!this.props.previousButtonState} className="waves-effect waves-light btn" onClick={this.props.previous}>
          <i className="material-icons">keyboard_arrow_left</i>
        </button>
        <button disabled={!this.props.nextButtonState} className="waves-effect waves-light btn" onClick={this.props.next}>
          <i className="material-icons">keyboard_arrow_right</i>
        </button>
      </div>
    );
  }
}

export default NavigationButton;
