import logo from "./logo.svg";
import "./App.css";
import "./Components/MyButton";
import MyButton from "./Components/MyButton";
import ImageComponent from "./Components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      <MyButton text="Click Me" />
      <ImageComponent
        src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Hello%21_Logo.jpg"
        alt="hello"
      />
    </div>
  );
}

export default App;
