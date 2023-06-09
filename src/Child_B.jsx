import React from 'react'
import { useSelector } from 'react-redux'

const Child2 = () => {
  const data = useSelector(state => state.user.name)
  return (
    <div className='componentC'>
      <h2>Component C</h2>
      <h4>Name: {data}</h4>
    </div>
  )
}

export default Child2