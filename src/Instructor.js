import React, { Component } from 'react';


export default class Instructor extends Component {
    
    render() { 
 
        let match=this.props.match
        const modules=this.props.modules
        // console.log(modules)
        // console.log(match.params)
       
        const module = modules.find(element => element.id === parseInt(match.params.moduleId)).instructors.find((element => element.id === parseInt(match.params.instructorId)))
        // console.log(module)
         return (
            <div>
              <h1>Instructor Component</h1>
              <p>{`Name: ${module.name}`}</p>
              <p>{`Favorite game: ${module.favorite_game}`}</p>
              <a href={module.url}>Link to favorite game.</a>
            </div>
          );
    }
}
 
