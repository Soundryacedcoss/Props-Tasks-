import React, { Component } from 'react'

export default class CompclsD extends Component {
    constructor(props){
        super();
        
    }
  render() {
    return (
      <div>
        <h3>Componant-D</h3>
        <h2>Hello {this.props.username}</h2>
        </div>
    )
  }
}
