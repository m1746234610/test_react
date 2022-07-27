/*
  该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/

// 引入createStore，专门创建redux中的核心对象store
import { legacy_createStore as createStore } from 'redux'
// 引入为Count组件服务的reducer
import Count from './reducer/count'

export default createStore(Count)
