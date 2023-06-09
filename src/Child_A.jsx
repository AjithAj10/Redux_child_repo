import React from 'react'
import { useDispatch } from 'react-redux';
import {save} from './Redux/store';

const Child1 = () => {
  const dispatch = useDispatch();
  return (
    <div className='componentB'>
      <h2>Component B</h2>
      <input type='text' placeholder='name' onChange={e => dispatch(save(e.target.value))} />
    </div>
  )
}

export default Child1;