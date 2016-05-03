import React from 'react'

class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        Hello {this.props.name}, how are you?
        <img src={this.props.img}/>
      </div>
    )
  }

}

export default App
