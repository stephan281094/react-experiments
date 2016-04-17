import { TIMER_START, TIMER_STOP, TIMER_TICK } from '../actions/timer'

const initialState = {
  on: false,
  counter: 0
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TIMER_TICK:
      return Object.assign({}, state, {
        counter: state.counter + 1
      })
    case TIMER_START:
      return Object.assign({}, state, {
        on: true,
        timerId: action.timerId
      })
    case TIMER_STOP:
      return Object.assign({}, state, {
        on: false,
        counter: 0,
        timerId: action.timerId
      })
    default:
      return state
  }
}

export default rootReducer
