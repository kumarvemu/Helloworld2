import logo from './logo.svg';
import './App.css';
import SongList from "./Components/SongList"; 
import Greeting from "./Components/Greeting";


function App() {
  return (
    <div>
        <Greeting name="Matt" age="21"/>
        <Greeting name="Sally" age="32"/>
        <SongList />
    </div>
  );
}

export default App;
