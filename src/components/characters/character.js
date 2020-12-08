import React, {Component} from 'react'
import CharacterCard from './characterCard/characterCard'



class Characters extends Component{
  constructor(props) {
    super(props);
    let x;
    const npcCharacters = this.props.characterObject
    let testArray =[]
    for (x in npcCharacters) {
      testArray.push(npcCharacters[x])
    }
    this.state = {
      userCharacter:'',
      npcCharacter:'',
      characters:[ npcCharacters.bobbaFett.display, npcCharacters.chewbaca.display, npcCharacters.darthVader.display, npcCharacters.lukeSkywalker.display],
      data:[npcCharacters],
      test:testArray
      }
    };
render(){
  return(
   <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
              {this.state.test.map(characters => (

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