import React, {Component} from 'react'
import './style.css'

class Arena extends Component{
  constructor(props) {
    super(props);
    const user = this.props.characterObject[this.props.userCharacter]
    const npc = this.props.characterObject[this.props.npcCharacter]
    this.state = {
      userHp: user.hp,
      npcHp:npc.hp,
      }
      this.userHpSet = this.userHpSet.bind(this);
      this.npcHpSet = this.npcHpSet.bind(this);
    };
    userHpSet(value){this.setState(state => ({
      userHp:value
    }))};
    npcHpSet(value){
      this.setState(state => ({
        npcHp:value
      }))}
render(){
  
  const user = this.props.characterObject[this.props.userCharacter]
  const npc = this.props.characterObject[this.props.npcCharacter]
  const userImgSrc = user.imgSrc
  const npcImgSrc = npc.imgSrc
  let charSelect;
  let attackButton;
  let userHpDisplay = this.state.userHp / user.ratio;
  let npcHpDisplay = this.state.npcHp / npc.ratio;

  if(this.state.npcHp < 1 || this.state.userHp < 1 ){
   charSelect =             <div className="col col-12 button-div">
    <button id="character-select-button" className="btn character-select-button" onClick={()=> this.props.changeGameStateSelect()}>Character Select</button>
  </div>
  } else {
<div></div>
  }

if (this.state.npcHp > 0 && this.state.userHp > 0 ){
  attackButton =
  <div className="col col-12 button-div">
    <button id="attack-button" className="btn attack-button" onClick={() =>attack(this.state.userHp, this.state.npcHp, this.userHpSet, this.npcHpSet, npc)}>Attack</button>
  </div>
}





function attack(userHpStat, npcHpStat, userhpset , npchpset ,npc){
  let usrHp = userHpStat;
  let npcHp = npcHpStat
  let usrAttack = user.attack;
  let npcAttack = npc.counterAttack
  let newUsrHp = usrHp - npcAttack;
  let newNpcHp = npcHp - usrAttack;
  userhpset(newUsrHp);
  npchpset(newNpcHp);
  if (npcHp < 1){
    this.props.defeatCharacters(npc)
    console.log("launch")
  }
}

console.log(this.props.characterObject);
// console.log(this.props.userCharacter);
// console.log(this.props.npcCharacter);
console.log(this.state);
  return(
    <div>
    <div className="arena col col-12">
      <div className="row">

        <div className="col col-4 user-character-attack-screen arena-character" id="user-character-attack-screen">
          <div className="progress user-hp">
            <div className="progress-bar bg-success user-hp-meter" role="progressbar"
            aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width:userHpDisplay + '%'}}></div>
          </div>
          <img className="user-character-attack-img" src={userImgSrc} alt="Picture1"/>
        </div>

        <div className="col col-4">
          <div className="row">
            <div className="col col-12 vs-img-div">
              <img className="vs-img" src="../vs.svg" width="100%" alt="VS"/>
            </div>
            {charSelect}
            {attackButton}
          </div>
        </div>

        <div className="col col-4 comp-character-attack-screen arena-character">
          <div className="progress comp-hp">
            <div className="progress-bar bg-success comp-hp-meter" role="progressbar" aria-valuenow="100"
              aria-valuemin="0" aria-valuemax="100" style={{width:npcHpDisplay + '%'}}></div>
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


