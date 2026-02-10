import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increaseby1, increaseby10, decreaseby1, decreaseby10 } from '../app/counterSlice'

const Counter = () => {

  const count = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Counter Value {count}</h1>
      <button onClick={() => dispatch(increaseby1())}>increaseby1</button>
      <button onClick={() => dispatch(increaseby10())}>increateby10</button>
      <button onClick={() => dispatch(decreaseby1())}>decreateby1</button>
      <button onClick={() => dispatch(decreaseby10())}>decreateby10</button>
    </div>
  )
}

export default Counter
