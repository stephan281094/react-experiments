import { combineReducers } from 'redux'
import timerReducer from './timer'

const rootReducer = combineReducers({
  timer: timerReducer
})

export default rootReducer
