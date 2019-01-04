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
      <div class="row text-align center">
          <button className="waves-effect waves-light btn" onClick={this.props.previous}>
          <i className="material-icons">keyboard_arrow_left</i>
          </button>
          <button className="waves-effect waves-light btn" onClick={this.props.next}>
          <i className="material-icons">keyboard_arrow_right</i>
          </button>
      </div>
    );
  }
}

export default NavigationButton;
