import { useState, useRef, useMemo, useEffect } from 'react'


export default function Count(props) {
  const sele = useRef(null)

  const increment = () => {

  }
  const decrement = () => {

  }
  const incrementOdd = () => {

  }
  const incrementAsync = () => {

  }

  return (
    <div>
      <h1>当前求和为: 0</h1>
      <select ref={value => sele.current = value}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={incrementOdd}>当前求和为奇数在加</button>
      <button onClick={incrementAsync}>异步加</button>
    </div>
  )
}
