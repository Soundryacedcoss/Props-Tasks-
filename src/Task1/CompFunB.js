import React from 'react'
import CompFunC from './CompFunC'
export default function CompFunB(props) {
  return (
    <div>
    <h3>Componant B</h3>
     <CompFunC {...props}/>
    </div>
  )
}
