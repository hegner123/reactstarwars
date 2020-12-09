import React, { Component } from 'react'
import Header from './components/header/header'
import CharacterSelect from './components/characterSelect/characterSelect'
import Arena from './components/arena/arena'
import characterObject from './data/characters'
import './style.css'
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state={
    step: 'characterSelect',
    userCharacter:'',
    npcCharacter:'',
    opponents: 4,
    wins:0,
    losses:0,
    }
    this.assignUser = this.assignUser.bind(this);
    this.assignNpc = this.assignNpc.bind(this);
    this.changeGameState = this.changeGameState.bind(this);
  }

  assignUser(name){
    this.setState(state => ({
      userCharacter:name
    }))};

  assignNpc(name){
    this.setState(state => ({
      npcCharacter:name
    }))
    this.changeGameState()
  };

    changeGameState(){
      if (this.state.userCharacter.length > 1 && this.state.npcCharacter.length < 1){
        this.setState(state => ({
          step:'arena'
        }))
      }
    }


  render(){

    const step = this.state.step;
    let game;
    // conditional rendering
    if (step === 'characterSelect') {
      game = <CharacterSelect
      characterObject={characterObject}
      assignUser={(e) => this.assignUser(e)}
      assignNpc={(e) => this.assignNpc(e)}
      userCharacter={this.state.userCharacter}
      npcCharacter={this.state.npcCharacter}
      />
    } else if (step === 'arena'){
      game = <Arena
      userCharacter={this.state.userCharacter}
      npcCharacter={this.state.npcCharacter}
      characterObject={characterObject}
      />
    }

    return(
    <div className="App">
        <div className="container">
        <Header/>
        <div className="row">
        {game}
        </div>
    </div>
  </div>
    )
  }
  };

  export default App

