import React from 'react'
import CompFunB from './CompFunB'
export default function CompFunA(props) {
  return (
    <div>
        <h3>Componant A</h3>
        <CompFunB {...props}/>
        </div>
  )
}
