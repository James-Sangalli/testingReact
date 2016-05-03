
import React from 'react'
import test from "tape"
import {shallow} from 'enzyme'
import App from './basic'

test("it says hello, how are you", t => {

  const comp = shallow(<App name={'James'}/>)
  const actualText = comp.find('div').text()
  t.equal(actualText, "Hello James, how are you?", "it should render a greeting with name given to it")
  t.end()
})
