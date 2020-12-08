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
        <div  className="character-card" onClick={() => this.props.assignUser(this.props.data)}>
        <img alt={this.props.name} src={this.props.img} className="card-img pointer"
        onPointerEnter={() => this.props.passImg(this.props.img)}
        onPointerLeave={() => this.props.clearImg()}
        />
        <h4 className="text-white text-center">{this.props.name}</h4>
        </div>
      }else{
        button =
        <div className="character-card" onClick={() => this.props.assignNpc(this.props.data)}>
        <img alt={this.props.name} src={this.props.img} className="card-img pointer"
        onPointerEnter={() => this.props.passImg(this.props.img)}
        onPointerLeave={() => this.props.clearImg()}
        />
        <h4 className="text-white text-center">{this.props.name}</h4>
        </div>
      }

       

  return(
    <div className="col-md-6 col-3">
      {button}
    </div>
  )
}
}

export default CharacterCard;