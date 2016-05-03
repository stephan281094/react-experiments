import { combineReducers } from 'redux'

import timerReducer from 'reducers/timer'
import globalReducer from 'reducers/global'

const rootReducer = combineReducers({
  timer: timerReducer,
  global: globalReducer
})

export default rootReducer
