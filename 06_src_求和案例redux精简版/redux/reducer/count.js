/*
  reducer可以初始化状态，也可以更改状态(reducer是一个纯函数)

  1.该文件是用于创建一个为count组件服务的reducer，reducer的本质是一个函数
  2.countReducer可以获得两个参数，之前的状态（或undefined）、动作对象（action）
*/

export default function countReducer(preState = 0, action) {
  console.log(preState, action);
  const { type, data } = action
  switch (type) {
    case 'increment': // 加
      return preState + data
    case 'decrement': // 减
      return preState - data
    default: // 初始化
      // return preState
      return preState
  }
}