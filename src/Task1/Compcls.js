import React, { Component } from 'react'
import CompClsB from './Comp_ClsB'
export default class CompCls extends Component {
  constructor(props){
        super();
    }
    render() {
    return (
      <div>
        <h3>Componant-A</h3> 
        <CompClsB {...this.props}/>
      </div>
    )
  }
}
