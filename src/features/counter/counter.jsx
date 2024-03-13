import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
          <span>{count}</span>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button onClick={()=> dispatch(reset())}>
            Reset
        </button>
      </div>
    </div>
  )
}
export  default Counter