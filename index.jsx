import { render } from 'react-dom'
import React from 'react'
import Component, { autoBind } from './lib'

class App extends React.Component {
  constructor(props) {
    super(props)
    autoBind(this)
  }
  onClick(event){
    console.log(this);
  }

  render(){
    var props = this.props

    return <div {...props} onClick={this.onClick}>
      Hello, please click me
    </div>
  }
}

render(<App className="xxx" style={{color: 'blue'}} />, document.getElementById('content'))