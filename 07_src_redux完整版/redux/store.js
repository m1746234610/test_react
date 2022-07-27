import { legacy_createStore as createStore } from 'redux'
import countReducer from './reducer/count'

export default createStore(countReducer)
