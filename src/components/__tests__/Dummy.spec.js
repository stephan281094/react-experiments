import expect from 'expect'
import expectJSX from 'expect-jsx'
import TestUtils from 'react-addons-test-utils'
import React from 'react'
import Dummy from '../flickr/Dummy'

expect.extend(expectJSX)

describe('dummy component test', () => {
  it('should correctly render a dummy component', () => {
    const renderer = TestUtils.createRenderer()
    const style = {
      top: 200,
      width: 300,
      height: 400,
      left: 500,
      backgroundColor: '#c00'
    }
    renderer.render(
      <Dummy style={style} />
    )

    const output = renderer.getRenderOutput()
    const expectedStyle = {
      position: 'absolute',
      display: 'block',
      top: 200,
      width: 300,
      height: 400,
      left: 500,
      backgroundColor: '#c00'
    }
    expect(output).toEqualJSX(
      <img style={expectedStyle} />
    )
  })
})
