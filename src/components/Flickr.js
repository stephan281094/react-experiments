import React, { Component } from 'react'
import Helmet from 'react-helmet'
import justifiedLayout from 'justified-layout'
import Dummy from './flickr/Dummy'

class Flickr extends Component {
  render () {
    let layoutGeometry = justifiedLayout([0.5, 1.5, 1, 1.8, 0.4, 0.7, 0.9, 1.1, 1.7, 2, 2.1])

    const boxes = layoutGeometry.boxes.map((box) => {
      return <Dummy style={{top: box.top, width: box.width, height: box.height, left: box.left}} />
    })

    return (
      <div style={{position: 'relative', margin: '0 auto', width: 1060}}>
        <Helmet title='Flickr' />
        <h1>Flickr page</h1>
        <div style={{position: 'relative'}}>
          {boxes}
        </div>
      </div>
    )
  }
}

export default Flickr
