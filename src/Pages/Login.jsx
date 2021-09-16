// import logo from './logo.svg';
import '../stylesheets/Login.css';

function Login() {
  function handleLogin () {
    fetch('http://localhost:5000/oauth')
      .then(res => res.json())
      .then(result => {
        console.log('handleLogin fetch happens')
        console.log('result: ', result);
      })
    console.log('login on click happens');
  }
 
  return (
    <div className="App">
      <header className="App-header">
        <div>

        <h1> Welcome to Abstract! </h1>

        <h1> Please log in via Github. </h1>

        </div>
       

        <a href='https://github.com/login/oauth/authorize?client_id=46fc52b044a6de2f4a82&scope=read:user&redirect_uri=http://localhost:5000/oauth'> <button> Log In with Anchor </button> </a>
        <button onClick={handleLogin}> Log In with fetch </button>

        <h3> Don't have a Github account? </h3>

        
        < a href="https://github.com/join" class="button" > <button> Sign Up </button> </a>

      </header>

    </div>
  );
}

export default Login;
