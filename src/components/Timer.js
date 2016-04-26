import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Sound from '../lib/Sound'
import Button from './timer/Button'
import Counter from './timer/Counter'
import { startTimer, stopTimer, resetTimer } from '../actions/timer'

class Timer extends Component {
  constructor () {
    super()
    this.sound = new Sound()
  }

  componentDidUpdate () {
    const { counter, resetTimer } = this.props

    if (counter === 60) {
      this.sound.play()
      resetTimer()
    }
  }

  toggleTimer () {
    const { on, startTimer, stopTimer } = this.props

    if (on) {
      stopTimer()
    } else {
      startTimer()
    }
  }

  render () {
    return (
      <div className={'timer' + (this.props.on ? ' on' : '')}>
        <Helmet title='Timer' />
        <div className='wrap'>
          <Counter on={this.props.on} value={this.props.counter} />
          <Button on={this.props.on} onClick={this.toggleTimer.bind(this)} />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    startTimer,
    stopTimer,
    resetTimer
  }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    on: state.timer.on,
    counter: state.timer.counter
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
