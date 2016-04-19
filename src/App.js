import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger';
import thunk from 'redux-thunk'
import Timer from './components/Timer'
import reducers from './reducers'

const logger = createLogger()
const store = createStore(reducers, applyMiddleware(thunk, logger));

class App extends Component {
  render () {
    return (
      <Timer store={store} />
    )
  }
}

export default App
