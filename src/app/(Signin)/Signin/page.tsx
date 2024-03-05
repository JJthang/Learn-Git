'use client+'
import React, { useState } from 'react'

type Props = {}

const Signin = (props: Props) => {
  const [currentState, setCurrentState] = useState(false);
  const TotalFuction = () => {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
  return (
    <div>
      {
        currentState ? TotalFuction() : 'hello world'
      }
      <label htmlFor="\">Name</label>
      <input type="text" placeholder='Enter Name' />
      <label htmlFor="\">Psssword</label>
      <input type="text" placeholder='Enter Psssword' />
    </div>
  )
}

export default Signin