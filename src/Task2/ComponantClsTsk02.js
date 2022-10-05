import React, { Component } from 'react'

export default class ComponantClsTsk02 extends Component {
    constructor(props){
        super()
    }
  render() {
    return (
      <div> <h3>Hello {this.props.name}</h3> </div>
    )
  }
}
