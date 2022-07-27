import React, { useState, useRef, useMemo } from 'react'
import { useEffect } from 'react';
// 引入store，用于获取redux中的状态 (store在初始化的时候会自动调用一次reducer函数)
import store from '../../redux/store'
console.log(store);

export default function Count(props) {
  console.log('Count');
  const sele = useRef(null)
  const [refresh, setRefresh] = useState(false)

  let timer = null

  useEffect(() => {
    store.subscribe(() => {
      setRefresh(!refresh)
    })
  }, [refresh])

  const count = useMemo(() => {
    return store.getState()
  }, [store.getState()])

  const increment = () => {
    store.dispatch({
      type: 'increment',
      data: sele.current.value * 1
    })
  }
  const decrement = () => {
    store.dispatch({
      type: 'decrement',
      data: sele.current.value * 1
    })
  }
  const incrementOdd = () => {
    if (store.getState() % 2) {
      store.dispatch({
        type: 'increment',
        data: sele.current.value * 1
      })
    }
  }
  const incrementAsync = () => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      store.dispatch({
        type: 'increment',
        data: sele.current.value * 1
      })
    }, 500);
  }

  return (
    <div>
      <h1>{props.num}</h1>
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
