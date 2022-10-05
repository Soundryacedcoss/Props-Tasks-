import React, { Component } from 'react'

export default class CompClsTsk3 extends Component {
  constructor(props){
    super();

  }
  render() {
  
    return (
      <div>
        <h2>sum is {eval((this.props.num1) + (this.props.opr) + (this.props.num2))} </h2>
      </div>
    )
  }
}
