import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger';
import thunk from 'redux-thunk'
import Header from './components/Header'
import Main from './components/Main'
import reducers from './reducers'

const logger = createLogger()
const store = createStore(reducers, applyMiddleware(thunk, logger));

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
