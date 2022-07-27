/*
  该组件专门为Count组件生成action对象

  action有同步和异步两种：
    1.如果action是对象，就是同步
    2.如果action是函数，就是异步

  备注：异步action不是必须要写的，完全可以在自己组件中等待异步任务结束后在去分发同步的action
*/
import { INCREMENT, DECREMENT } from '../constant'


// 如果action是对象，就是同步
export const createIncrementAction = data => ({ type: INCREMENT, data })

export const createDecrementAction = data => ({ type: DECREMENT, data })


// 如果action是函数，就是异步
let timer = null
export const createIncrementActionAsync = (data, time) => {
  return (dispatch) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      dispatch(createIncrementAction(data))
    }, time);
  }
}

