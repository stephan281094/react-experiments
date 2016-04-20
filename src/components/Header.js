import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeView } from '../actions/global'

class Header extends Component {
  setActive (item) {
    this.props.changeView(item)
  }

  render () {
    return (
      <header className='header'>
        <button key='vsti' onClick={() => {this.setActive('vsti')}}>VSTi</button>
        <button key='timer' onClick={() => {this.setActive('timer')}}>Timer</button>
      </header>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changeView
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Header)
