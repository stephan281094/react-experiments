import { combineReducers } from 'redux'
import timerReducer from './timer'
import globalReducer from './global'

const rootReducer = combineReducers({
  timer: timerReducer,
  global: globalReducer
})

export default rootReducer
