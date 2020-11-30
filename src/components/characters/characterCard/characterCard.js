import React, {Component} from 'react'
import './style.css'

class CharacterCard extends Component{

    render(){

  return(
    <div className="col-md-6 col-3">
      <div className="character-card p-5">
      <h3 className="text-black">Character Name</h3>
      </div>
    </div>
  )
}
}

export default CharacterCard;