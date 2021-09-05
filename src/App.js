import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import MainBody from './components/MainBody';
import Prac from './components/Prac';
// import Done from './components/Done'

function App() {
  return (
    <div className="App">
     <NavBar/>
     <MainBody/>
     {/* <Done/> */}
     {/* <Prac/> */}
    </div>
  );
}

export default App;
