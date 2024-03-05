'use client'
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
    </div>
  )
}

export default Signin