// Constants
export const TIMER_RESET = 'TIMER_RESET'
export const TIMER_START = 'TIMER_START'
export const TIMER_STOP = 'TIMER_STOP'
export const TIMER_TICK = 'TIMER_TICK'

// Actions
export function resetTimer () {
  return {
    type: TIMER_RESET
  }
}

// Action thunks
export function startTimer () {
  return (dispatch, getState) => {
    const { timerId } = getState().timer
    if (!timerId) {
      const timerId = setInterval(() => {
        dispatch({
          type: TIMER_TICK
        })
      }, 1000)
      dispatch({
        type: TIMER_START,
        timerId
      })
    }
  }
}

export function stopTimer () {
  return (dispatch, getState) => {
    const { timerId } = getState().timer
    if (timerId) {
      clearInterval(timerId)
      dispatch({
        type: TIMER_STOP,
        timerId: null
      })
    }
  }
}
