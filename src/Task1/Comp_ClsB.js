import React, { Component } from 'react'
import CompClsC from './Comp_ClsC';
export default class CompClsB extends Component {
    constructor(props){
        super();
    }
  render() {
    return (
      <div>
        <h3>Componant-B</h3>
        <CompClsC {...this.props}/>
    </div>
    )
  }
}
