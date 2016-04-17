import React, { Component } from 'react'

class Button extends Component {
  static defaultProps = {
    on: false
  }

  render () {
    const { on, onClick } = this.props

    return (
      <button className={'timer-button' + (on ? ' on' : '')} onClick={onClick}>
        {on ? 'Stop' : 'Start'}
      </button>
    )
  }
}

export default Button
