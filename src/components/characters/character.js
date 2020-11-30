import React, {Component} from 'react'
import CharacterCard from './characterCard/characterCard'



class Characters extends Component{
  constructor(props) {
    super(props);
    this.state = {
      userCharacter:'',
      npcCharacter:''
      }
    };

render(){
  return(
   <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
            <CharacterCard/>
            <CharacterCard/>
            <CharacterCard/>
            <CharacterCard/>
            </div>
            </div>
          </div>
   </div>
  )
}
}

export default Characters