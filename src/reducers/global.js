// Constants
export const CHANGE_VIEW = 'CHANGE_VIEW'

// Actions
export function changeView (view) {
  return {
    type: CHANGE_VIEW,
    view
  }
}

// Initial state
const initialState = {
  activeView: 'timer'
}

// Global reducer
const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_VIEW:
      return Object.assign({}, state, {
        activeView: action.view
      })
    default:
      return state
  }
}

export default globalReducer
