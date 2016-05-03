import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Sound from 'lib/Sound'
import Button from 'components/timer/Button'
import Counter from 'components/timer/Counter'
import { startTimer, stopTimer } from 'actions/timer'

class Timer extends Component {
  constructor () {
    super()
    this.sound = new Sound()
  }

  componentDidUpdate () {
    const { counter } = this.props

    if (counter % 60 === 0) {
      this.sound.play()
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
    stopTimer
  }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    on: state.timer.on,
    counter: state.timer.counter
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
