import React, { Component } from 'react'

class Dummy extends Component {
  render () {
    let style = Object.assign({}, {
      position: 'absolute',
      backgroundColor: '#f0f0f0',
      display: 'block',
      border: '1px solid #c00'
    }, this.props.style)

    return (
      <div style={style}></div>
    )
  }
}

export default Dummy
