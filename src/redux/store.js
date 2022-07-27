import {
  legacy_createStore as createStore,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import countReducer from './reducer/count'

// applyMiddleware：执行中间件，配合thunk用于让store可以自动执行action中返回的函数（异步任务）
export default createStore(countReducer, applyMiddleware(thunk))
