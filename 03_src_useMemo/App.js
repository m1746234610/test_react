import { useState, useEffect, useMemo } from 'react'
import { num } from './components/Sum'
import Child from './components/Child'

export default function App(props) {
  console.log('App渲染');
  const [data, setData] = useState(0)
  const [num, setNum] = useState(0)


  /*
    useMemo: 和vue中计算属性类似。只有当依赖项改变，才会重新执行，并将值缓存起来。
  */
  const doubel = useMemo(() => {
    console.log('useMemo');
    return data * 2
  }, [data])

  const add = () => {
    setData(data + 1)
  }

  const addNum = () => {
    setNum(num + 1)
  }

  return (
    <div>
      <h2>{data}</h2>
      <h2>{doubel}</h2>
      <hr />
      <h2>{num}</h2>
      <button onClick={add}>add</button>
      <button onClick={addNum}>addNum</button>
      <Child />
    </div>
  );
}
