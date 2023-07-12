import logo from './logo.svg';
import './App.css';
import ComponentA from './components/containers/ComponentA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Activity 01
        </p>
        <ComponentA></ComponentA>
      </header>
    </div>
  );
}

export default App;
