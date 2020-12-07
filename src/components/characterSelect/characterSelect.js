import React, {Component} from 'react'
import Characters from '../characters/character'
import Scroll from '../../components/scroll/scroll'
import './style.css'



class CharacterSelect extends Component{
  constructor(props) {
    super(props) 
this.state={
  name:"michael"
}
    }
  render(){

  return(
   <div className="container">
     <Scroll/>
     <div className="row">
     <div className='col-12 col-md-8'>
    <Characters
    characterObject={this.props.characterObject}
    assignUser ={(e) => this.props.assignUser(e)}
    assignNpc={(e) => this.props.assignNpc(e)}
    userCharacter={this.props.userCharacter}
    npcCharacter={this.props.npcCharacter}
    />
    </div>
    <div className="col-2 placeholder">

        </div>
        <div className="col-2 placeholder">

        </div>
        </div>
   </div>
  )
  }
}


export default CharacterSelect;