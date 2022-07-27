import { memo } from 'react'

/*
  memo: 缓存子组件，当子组件发生改变时，才会重新渲染
*/
const Child = (props) => {
  console.log('children....');

  return (
    <>
      <div>children...</div>
      <div>{props.num}</div>
    </>
  )
}

export default memo(Child)