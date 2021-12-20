import logo from './logo.svg';
import './App.css';
import{ BrowserRouter as Router, Switch,Route } from 'react-router-dom'
import NavBar from './components/Navegacion/NavBar';
import inicio from './components/paginas/inicio';
import productos from './components/paginas/productos';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Router>
         <NavBar/>
        </Router> 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
