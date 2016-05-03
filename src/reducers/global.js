import { CHANGE_VIEW } from 'actions/global'

const initialState = {
  activeView: 'timer'
}

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
