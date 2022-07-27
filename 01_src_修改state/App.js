import { useState, useEffect } from 'react'
import { num } from './components/Sum'

export default function App({ name }) {
  const [data, setData] = useState([])
  useEffect(() => {
    document.title = name
  }, [])

  useEffect(() => {
    console.log(num);
  })

  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
}
