import { TIMER_TICK, TIMER_RESET, TIMER_START, TIMER_STOP } from 'actions/timer'

const initialState = {
  on: false,
  counter: 0
}

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case TIMER_TICK:
      let counter = state.counter + 1

      return Object.assign({}, state, {
        counter: counter < 60 ? counter : 0
      })
    case TIMER_RESET:
      return Object.assign({}, state, {
        counter: 0
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

export default timerReducer
