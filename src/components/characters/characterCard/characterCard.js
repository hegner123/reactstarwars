import React, {Component} from 'react'
import './style.css'


class CharacterCard extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data:this.props.data
      }
    };
    render(){
  return(
    <div className="col-md-6 col-3">
      <div className="character-card p-5">
        <img alt={this.props.name} src={this.props.img} className="img-fluid"/>
      </div>
      <h3 className="text-white text-center">{this.props.name}</h3>
    </div>
  )
}
}

export default CharacterCard;