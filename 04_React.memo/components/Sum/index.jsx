import React from 'react'

export let num = 0
const add = () => {
  num++
}

const cheng = () => {
  num = num * 5
}

// console.log(num);

export default function Sum() {
  add()
  cheng()
  console.log(num);
  return <div>sum</div>
}
