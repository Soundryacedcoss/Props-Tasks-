import React from 'react'

export default function CompFunD(props) {
    console.log(props);
  return (
    <div>
        <h3>Componant D</h3>
        <h2> Hello {props.username}</h2>
    </div>
  )
}
