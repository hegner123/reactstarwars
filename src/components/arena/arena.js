import React, {Component} from 'react'
import './style.css'

class Arena extends Component{
  constructor(props) {
    super(props);
    this.state = {
      userCharacter:'chewbaca'
      }
    };
render(){
  const userImgSrc = this.props.characterObject[this.props.userCharacter].imgSrc
  const npcImgSrc = this.props.characterObject[this.props.npcCharacter].imgSrc
  return(
    <div>
    <div className="arena col col-12">
      <div className="row">

        <div className="col col-4 user-character-attack-screen arena-character" id="user-character-attack-screen">
          <div className="progress user-hp">
            <div className="progress-bar bg-success user-hp user-hp-meter" role="progressbar"
            aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <img className="user-character-attack-img" src={userImgSrc} alt="Picture1"/>
        </div>

        <div className="col col-4">
          <div className="row">
            <div className="col col-12 vs-img-div">
              <img className="vs-img" src="../vs.svg" width="100%" alt="VS"/>
            </div>
            <div className="col col-12 button-div">
              <button id="character-select-button" className="btn character-select-button">Character Select</button>
            </div>
          </div>
        </div>

        <div className="col col-4 comp-character-attack-screen arena-character">
          <div className="progress comp-hp">
            <div className="progress-bar bg-success comp-hp comp-hp-meter" role="progressbar" aria-valuenow="100"
              aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <img className="comp-character-attack-img" src={npcImgSrc} alt="Picture2"/>
        </div>

      </div>
    </div>
    </div>
  )
}
}

export default Arena


