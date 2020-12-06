import React, { Component } from 'react'
import Header from './components/header/header'
import Scroll from './components/scroll/scroll'
import CharacterSelect from './components/characterSelect/characterSelect'
import Arena from './components/arena/arena'
import characterObject from './data/characters'
import './style.css'
import './App.css';


class App extends Component{
  constructor(props) {
    super(props);
    this.state={
      userCharacter:'',
      npcCharacter:'',
      availableCharacters:[]
    }
  }
  render(){

    return(
    <div className="App">
        <div className="container">
        <Header/>
        <Scroll/>
        <div className="row">
        <CharacterSelect
        characterObject={characterObject}
        />
        </div>
        <Arena/>
    </div>
  </div>
    )
  }
  };

  export default App

