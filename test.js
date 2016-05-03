
import React from 'react'
import test from "tape"
import {shallow} from 'enzyme'
import App from './basic'

test("it says hello, how are you",function(t){

  const comp = shallow(<App />)
  // t.equal( comp.find(''))
  console.log(comp)
  t.end()
})
