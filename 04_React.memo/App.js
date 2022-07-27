import { useState, useEffect, useMemo } from 'react'
import Child from './components/Child'

export default function App(props) {
  console.log('App渲染');
  const [data, setData] = useState(0)

  const add = () => {
    setData(data + 1)
  }
  return (
    <div>
      <h2>{data}</h2>
      <button onClick={add}>add</button>
      <Child num={data} />
    </div>
  );
}
