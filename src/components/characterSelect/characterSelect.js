import React, {Component} from 'react'
import Characters from '../characters/character'
import Scroll from '../../components/scroll/scroll'
import Preview from './preview/preview'
import './style.css'



class CharacterSelect extends Component{
  constructor(props) {
    super(props) 
this.state={
  userCharacterImg:'',
  npcCharacterImg:'',
  defeatedCharacters:[]
}
this.passImg = this.passImg.bind(this);
this.clearImg = this.clearImg.bind(this);
    }

    passImg(img){
      if (!this.state.userCharacterImg){
        this.setState(state => ({
          userCharacterImg:img
        }))
      } else if (!this.props.npcCharacter){ 
        this.setState(state => ({
          npcCharacterImg:img
        }))
      }
      };

    clearImg(){
      if (!this.props.userCharacter){
        this.setState(state => ({
          userCharacterImg:''
        }))
      } else if (!this.props.npcCharacter){
        this.setState(state => ({
          npcCharacterImg:''
        }))
      }
    }
  render(){


  return(
   <div className="container">
     <Scroll/>
     <div className="row">
     <div className='col-12 col-md-6'>
    <Characters
    characterObject={this.props.characterObject}
    assignUser ={(e) => this.props.assignUser(e)}
    assignNpc={(e) => this.props.assignNpc(e)}
    userCharacter={this.props.userCharacter}
    npcCharacter={this.props.npcCharacter}
    passImg={(e) => this.passImg(e)}
    clearImg={(e)=> this.clearImg(e)}
    defeatedCharacters={this.props.defeatedCharacters}
    />
    </div>
    <Preview
    userImg={this.state.userCharacterImg}
    npcImg={this.state.npcCharacterImg}
    />
   </div>
   </div>
  )
  }
}


export default CharacterSelect;