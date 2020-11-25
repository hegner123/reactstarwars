import Header from './components/header/header'
import Scroll from './components/scroll/scroll'
import CharacterSelect from './components/characterSelect/characterSelect'
import Arena from './components/arena/arena'


import './App.css';

function App() {
  return (
    <div className="App">
        <div className="container">
        <Header/>
        <Scroll/>
        <CharacterSelect/>
        <Arena/>
    </div>
  </div>
  );
}

export default App;
