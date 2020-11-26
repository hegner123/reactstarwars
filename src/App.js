import React from 'react'
import Header from './components/header/header'
import Scroll from './components/scroll/scroll'
import CharacterSelect from './components/characterSelect/characterSelect'
import Arena from './components/arena/arena'
import './style.css'



import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: 'init',
      userCharacter: '',
      npcCharacter:''
    };
  }
  render() {
    
    return(
    <div className="App">
        <div className="container">
        <Header/>
        {/* <Scroll/> */}
        <div className="row">
        <CharacterSelect/>
        </div>
        <Arena/>
    </div>
  </div>
    )
  };
}

export default App;
