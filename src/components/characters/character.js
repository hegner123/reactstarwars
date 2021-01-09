import React, {Component} from 'react'
import CharacterCard from './characterCard/characterCard'



class Characters extends Component{
  constructor(props) {
    super(props);
    const npcCharacters = this.props.characterObject
    const defeatedCharacters = this.props.defeatedCharacters;
    let characterArrary =[]
    let x;
    let y;
    for (x in npcCharacters) {
      let character = npcCharacters[x].data;
      // console.log( "source " + character)
      if (defeatedCharacters.length > 0){
        for (y in defeatedCharacters){
          // console.log("check " + defeatedCharacters[y])
            if (character !== defeatedCharacters[y]){
              // let value = character !== defeatedCharacters[y];
              // console.log("console.log(character !== defeatedCharacters[y]) = " + value)
              characterArrary.push(npcCharacters[x])
          } else {
            // let value2 = character !== defeatedCharacters[y];
            // console.log("console.log(character !== defeatedCharacters[y]) = " + value2)
          }
        }
      } else {
        characterArrary.push(npcCharacters[x])
      }

      console.log(characterArrary)
    }
    this.state = {
      userCharacter:'',
      npcCharacter:'',
      data:[npcCharacters],
      defeatedCharacters:defeatedCharacters,
      characterArrary:characterArrary
      }
    };
render(){
  return(
   <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
              {this.state.characterArrary.map(characters => (

          <CharacterCard
          key={characters.data}
          character={characters}
          name={characters.display}
          img={characters.imgSrc}
          data={characters.data}
          assignUser={(e) => this.props.assignUser(e)}
          assignNpc={(e) => this.props.assignNpc(e)}
          userCharacter={this.props.userCharacter}
          npcCharacter={this.props.npcCharacter}
          passImg={(e) => this.props.passImg(e)}
          clearImg={(e)=> this.props.clearImg(e)}
          />
                        ))
                        }

            </div>
            </div>
          </div>
   </div>
  )
}
}

export default Characters