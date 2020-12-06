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



// doStuff(this.props.characterObject)

// function doStuff(character){
//   let x;
//   console.log(character)
// for (x in character) {
//   console.log(character[x].display)
// }

// }

console.log(this.state.test)


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
          data={characters.data}/>
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