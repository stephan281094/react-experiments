import React, { Component } from 'react'
import { connect } from 'react-redux'

import Timer from 'components/Timer'
import Vsti from 'components/Vsti'
import Flickr from 'components/Flickr'

class Main extends Component {
  render () {
    const { activeView, store } = this.props

    switch (activeView) {
      case 'timer':
        return <Timer store={store} />
      case 'flickr':
        return <Flickr store={store} />
      default:
        return <Vsti store={store} />
    }
  }
}

const mapStateToProps = (state) => {
  return {
    activeView: state.global.activeView
  }
}

export default connect(mapStateToProps)(Main)
