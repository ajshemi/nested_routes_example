import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link,} from 'react-router-dom'
import Modules from './Modules'
import Home from './Home'
import { modules } from './data';



export default class App extends Component {
  state={
    modules:modules
  }
  handleRenderProps=(routerProps) => {
    return(<Modules {...routerProps} modules={this.state.modules}/>)
  }
  render() {
    // console.log(this.state.modules)
    return (
      <Router>
        
        <div style={{width: 1000, margin: '0 auto'}}>
        <h1>App Component</h1>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/modules'>Modules</Link></li>
          </ul>
          <hr />
          <Route exact path='/' component={Home} />
          <Route path='/modules' render={this.handleRenderProps/*routerProps => <Modules {...routerProps} modules={this.state.modules}/>*/}/>
        </div>
      </Router>
    )
  }
}



//need render and callback function to pass down to Modules