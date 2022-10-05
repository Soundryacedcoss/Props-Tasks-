import React, { Component } from 'react'
import CompclsD from './Comp_clsD';

export default class CompClsC extends Component {
    constructor(props){
        super();

    }
  render() {
    return (
      <div>
         <h3>Componant-C</h3>
         <CompclsD {...this.props}/>
      </div>
    )
  }
}
