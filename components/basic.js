import React from 'react'
// import Comment from './index'

class App extends React.Component{
  constructor(props){
    super(props)

    this.state ={comments:[
        {text: 'hi', user: 'dave'},
        {text: 'I did not have relations', user: 'bill'}
      ]}
  }

  render(){
    // const comments = this.state.comments.map( ({:text, :user}) => {
    //   <Comment text={text} user={user} />
    // })

    return (
      <div>
        <p className='greeting'>Hello {this.props.name}, how are you?</p>
        <img src={this.props.img}/>
        {this.state.comments.map(function(comment,i){
          return <h1 key={i}>{comment.text}</h1>
        })}
      </div>
    )
  }
}
export default App
