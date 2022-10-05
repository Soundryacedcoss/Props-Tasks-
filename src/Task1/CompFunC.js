import React from 'react'
import CompFunD from './CompFunD'
export default function CompFunC(props) {
  return (
    <div>
        <h3>Componant C</h3>
        <CompFunD {...props}/>
    </div>
  )
}
