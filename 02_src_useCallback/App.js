import { useState, useEffect, useCallback } from 'react'
import { num } from './components/Sum'
import Child from './components/Child'

export default function App(props) {
  console.log('App渲染');
  const [data, setData] = useState(0)

  /*
    useCallback: 在初始渲染的时候执行一次，会返回一个缓存好的函数，内部利用了闭包的原理获取了外部变量。只有依赖的参数发生改变时才会重新执行（内部变量也会重新获取）。传入空数组只会执行一次
  */
  const addCallBack = useCallback(() => {
    console.log('addCallBack中缓存的data', data);
    setData(data + 1)
    // }, [])
  }, [data])

  const add = () => {
    setData(data + 1)
  }

  return (
    <div>
      <h2>{data}</h2>
      <button onClick={add}>add</button>
      <button onClick={addCallBack}>addCallBack</button>
      <Child />
    </div>
  );
}
