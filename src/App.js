import logo from './logo.svg';
import './App.css';

function App() {
  let t = new Date()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Today is {t.toLocaleDateString()}
        </p>
     </header>
    </div>
  );
}

export default App;
