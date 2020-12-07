import React, {Component} from 'react'
import './style.css'


class CharacterCard extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data:this.props.data,
      userCharacter:this.props.userCharacter,
      npcCharacter:this.props.npcCharacter
      }
    };

    render(){
      let button;
      if (!this.props.userCharacter){
        button =
        <button onClick={() => this.props.assignUser(this.props.name)}>
        <h3 className="text-white text-center">{this.props.name}</h3>
        </button>
      }else{
        button =
        <button onClick={() => this.props.assignNpc(this.props.name)}>
        <h3 className="text-white text-center">{this.props.name}</h3>
        </button>
      }
  return(
    <div className="col-md-6 col-3">
      <div className="character-card p-5">
        <img alt={this.props.name} src={this.props.img} className="img-fluid"/>
      </div>
      {button}
    </div>
  )
}
}

export default CharacterCard;