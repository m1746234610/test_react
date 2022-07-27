import { useState, useEffect } from 'react'
import Count from './components/Count'

export default function App() {
  const [num, setNum] = useState(0)
  const add = () => {
    setTimeout(() => {
      setNum(num + 10)
    }, 1000)
  }

  useEffect(() => {
    console.log(111111);
  })

  return (
    <div>
      <button onClick={add}>修改props</button>
      <Count num={num} />
    </div>
  );
}
