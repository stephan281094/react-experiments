import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import Header from './components/Header'
import Main from './components/Main'
import reducers from './reducers'

let middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
  const createLogger = require('redux-logger')
  const logger = createLogger()
  middleware = [...middleware, logger]
}

const store = createStore(reducers, applyMiddleware(...middleware));

class App extends Component {
  render () {
    return (
      <div className='main'>
        <Header store={store} />
        <Main store={store} />
      </div>
    )
  }
}

export default App
