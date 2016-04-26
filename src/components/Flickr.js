import React, { Component } from 'react'
import Helmet from 'react-helmet'
import justifiedLayout from 'justified-layout'
import Dummy from './flickr/Dummy'
import images from '../fixtures/images'

class Flickr extends Component {
  render () {
    let aspectRatios = images.map((image) => {
      return image.ratio
    })
    let layoutGeometry = justifiedLayout(aspectRatios)

    const boxes = layoutGeometry.boxes.map((box, i) => {
      let style = {
        top: box.top,
        width: box.width,
        height: box.height,
        left: box.left,
        background: `url(img/${i + 1}.jpg) center center`,
        backgroundSize: 'cover'
      }
      return <Dummy style={style} />
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
