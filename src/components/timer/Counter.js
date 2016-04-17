import React, { Component } from 'react'

class Counter extends Component {
  static defaultProps = {
    value: 0
  }

  render () {
    return (
      <h1 className={'timer-counter' + (this.props.on ? ' on' : '')}>
        {this.props.value}
      </h1>
    )
  }
}

export default Counter
