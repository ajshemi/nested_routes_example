import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,} from 'react-router-dom'


import Module from './Module'


export default class Modules extends Component {
    
    render() { 
        let modules=this.props.modules
        let match=this.props.match
        console.log(this.props)
        // console.log(this.props.match)
        return (
            <Router>
              <h1>Modules Component</h1>
              <ul>
                {modules.map(({ name, id }) => (
                  <li key={id}>
                    <Link to={`${match.url}/${id}`}>{`${name}`}</Link>
                  </li>
                ))}
              </ul>
              <hr />
              <Route exact path={match.url} render={() => <h3>{'Choose a module from the list above (by default)'}</h3>}/>
              <Route path={`${match.path}/:moduleId`} render={routerProps => <Module {...routerProps} modules={modules} /> }/>
            </Router>
          )
    }
}
 
