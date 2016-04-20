import React, { Component } from 'react'
import { connect } from 'react-redux'
import Timer from './Timer'
import Vsti from './Vsti'

class Main extends Component {
  render () {
    const { activeView, store } = this.props
    let view

    view = activeView === 'vsti' ?
      <Vsti store={store} /> : <Timer store={store } />

    return view
  }
}

const mapStateToProps = (state) => {
  return {
    activeView: state.global.activeView
  }
}

export default connect(mapStateToProps)(Main)
