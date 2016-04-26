import React, { Component } from 'react'

class Dummy extends Component {
  render () {
    let style = Object.assign({}, {
      position: 'absolute',
      backgroundColor: '#f0f0f0',
      display: 'block'
    }, this.props.style)

    return (
      <div style={style}></div>
    )
  }
}

export default Dummy
