import React from 'react'
import test from "tape"
import {shallow} from 'enzyme'
import App from './basic'

test("App component", t => {

  const imageUrl = 'http://vignette2.wikia.nocookie.net/unmario/images/2/20/Windows98od1.jpg/revision/latest?cb=20091026162140'
  const comment = "I did not have an affair with that woman!!"
  const comp = shallow(<App name={'James'} img={imageUrl} />)

  const actualText = comp.find('p.greeting').text()

  t.equal(actualText, "Hello James, how are you?", "it should render a greeting with name given to it")

  const actualImageSrc = comp.find('img').prop("src")

  t.equal(actualImageSrc,imageUrl,"should render an image to the page")

  const actualCommentData = comp.find('p.comment').text()

  t.equal(actualCommentData,comment,"Bill clinton made his famous remark")
  t.end()
})
