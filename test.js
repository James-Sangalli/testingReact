
import React from 'react'
import test from "tape"
import {shallow} from 'enzyme'
import App from './basic'

test("App component", t => {

  const imageUrl = 'http://vignette2.wikia.nocookie.net/unmario/images/2/20/Windows98od1.jpg/revision/latest?cb=20091026162140'

  const comp = shallow(<App name={'James'} img={imageUrl}/>)

  const actualText = comp.find('div').text()

  t.equal(actualText, "Hello James, how are you?", "it should render a greeting with name given to it")

  const actualImageSrc = comp.find('img').prop("src")

  t.equal(actualImageSrc,imageUrl,"should render an image to the page")

  const comments = shallow(<App comment={"I like this article and windows 98 seems really good"} userName={"Bill"} date={"12/10/1999"})

  t.end()
})
