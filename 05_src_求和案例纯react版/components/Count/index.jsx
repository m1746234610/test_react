import React, { useState, useRef } from 'react'

export default function Count() {
  const sele = useRef(null)
  const [count, setCount] = useState(0)
  let timer = null

  const increment = () => {
    setCount(count + parseInt(sele.current.value))
  }
  const decrement = () => {
    setCount(count - parseInt(sele.current.value))
  }
  const incrementOdd = () => {
    if (count % 2) setCount(count + parseInt(sele.current.value))
  }
  const incrementAsync = () => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      setCount(count + parseInt(sele.current.value))
    }, 500);
  }

  return (
    <div>
      <h1>当前求和为: {count}</h1>
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
