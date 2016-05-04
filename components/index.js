import React from 'react'
import App from './basic'
import ReactDOM from 'react-dom'

const app = document.createElement('div')

document.body.appendChild(app)

ReactDOM.render(<App/>, app)


// class Index extends React.Component{
//   constructor(props){
//     super(props)
//   }

//   render(){
//     return(
//       <div></div>
//     )
//   }


// }
