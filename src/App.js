import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import Timer from './components/Timer'
import reducers from './reducers'

const store = createStore(reducers, applyMiddleware(thunk));

class App extends Component {
  render () {
    return (
      <Timer store={store} />
    )
  }
}

export default App
