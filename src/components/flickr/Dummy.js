import React, { Component } from 'react'

class Dummy extends Component {
  render () {
    let style = Object.assign({}, {
      position: 'absolute',
      backgroundColor: '#f0f0f0',
      display: 'block'
    }, this.props.style)

    return (
      <img style={style} />
    )
  }
}

export default Dummy
