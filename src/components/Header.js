import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Ink from 'react-ink'
import { changeView } from '../actions/global'

class Header extends Component {
  setActive (item) {
    this.props.changeView(item)
  }

  render () {
    const { activeView } = this.props

    return (
      <header className='header'>
        <button className={'nav-item' + (activeView === 'timer' ? ' active' : '')}
          key='timer' onClick={() => { this.setActive('timer') }}>
          <Ink opacity={0.2} /> Timer
        </button>
        <button className={'nav-item' + (activeView === 'vsti' ? ' active' : '')}
          key='vsti' onClick={() => { this.setActive('vsti') }}>
          <Ink opacity={0.2} /> VSTi
        </button>
        <button className={'nav-item' + (activeView === 'flickr' ? ' active' : '')}
          key='flickr' onClick={() => { this.setActive('flickr') }}>
          <Ink opacity={0.2} /> Flickr
        </button>
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeView: state.global.activeView
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changeView
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
