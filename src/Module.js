import React, { Component } from 'react';
import Instructor from './Instructor'
import {BrowserRouter as Router,Route,Link,} from 'react-router-dom'
export default class Module  extends Component {

    render() { 
        // console.log(this.props.modules)
        // console.log(this.props)
        const modules=this.props.modules
        let match=this.props.match
        let module = modules.find(element => element.id === parseInt(match.params.moduleId))  // element.id === match.params.topicId)

        return (
            <Router>
              <h1>Module Component</h1>
              <p>{`Module Name: ${module.name}`}</p>
              <p>{`Main Topic: ${module.description}`}</p>
        
              <ul>
                {module.instructors.map((instructor) => (
                  <li key={instructor.id}>
                    <Link to={`${match.url}/${instructor.id}`}>{instructor.name}</Link>
                  </li>
                ))}
              </ul>
        
              <hr />
              <Route exact path={`${match.url}`} render={() => <h3>{'Choose a instructor from the list above (by default)'}</h3>}/>
              <Route path={`${match.path}/:instructorId`} render={routerProps => <Instructor {...routerProps} modules={modules} /> }/>
            </Router>
          );
    }
}
