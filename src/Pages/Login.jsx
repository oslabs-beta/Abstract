// import logo from './logo.svg';
import '../stylesheets/Login.css';

function Login() {
 function handleLogIn () {
   fetch('https://github.com/login/oauth/authorize?client_id=46fc52b044a6de2f4a82&scope=read:user&redirect_uri=http://localhost:5000/oauth')
   .then(res => res.json())
   .then(result => {
       console.log('result: ', result)
   })
 }
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div>
        <h1> Welcome to Abstract! </h1>
        <h1> Please log in via Github. </h1>
        </div>
        {/* <form id="logInForm" action='/oauth' method='GET'>
            <button id='logInButton' type='submit' value='login'>
                <img src="https://pngimg.com/uploads/github/github_PNG80.png" alt="githubLogo" id="githubLogo"/>Log in with Github 
            </button>
            </form> */}
        <button onClick={handleLogIn}>GitHub Login Anchor Tag</button>
        <a href='https://github.com/login/oauth/authorize?client_id=46fc52b044a6de2f4a82&scope=read:user&redirect_uri=http://localhost:5000/oauth'>Log In</a>
    

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

export default Login;
