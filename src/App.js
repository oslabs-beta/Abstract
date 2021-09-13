// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div>
        <h1> Welcome to Abstract! </h1>
        <h1> Please log in via Github. </h1>
        </div>
        <button id="logIn"> <img src="https://pngimg.com/uploads/github/github_PNG80.png" alt="githubLogo" id="githubLogo"/> Log in with Github </button>
        <h3> Don't have a Github account? </h3>

        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <button
          id="SignUpBtn"
          
          // target="_blank"
          // rel="noopener noreferrer"
        >
          Sign up
        </button>
      </header>
    </div>
  );
}

export default App;
