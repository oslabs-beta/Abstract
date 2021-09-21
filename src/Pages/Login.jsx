// import logo from './logo.svg';
import '../stylesheets/Login.css';

function Login() {
 
  return (
    <div className="App">
      <img id = "abstractLogo"src="https://spng.pngfind.com/pngs/s/379-3791528_clipart-black-and-white-png-for-free-download.png" alt="abstractLogo"/>
      <h1 id='Abstract'> Abstract </h1>
        <header className="App-header">
          <div id = "welcomeBorderBox">
            <h1> Welcome to Abstract! <br/> Please log in via Github. </h1>
            <br/>
              <div>
               <a href='https://github.com/login/oauth/authorize?client_id=46fc52b044a6de2f4a82&scope=read:user%20repo&redirect_uri=http://localhost:5000/oauth'>
                  <button id="frontPageLogInButton"> <img id="githubLogo"src="https://www.pikpng.com/pngl/m/384-3846649_free-download-at-icons8-github-logo-transparent-background.png" alt="logo"/> Login with Github </button> <br/>
               </a>
              </div> <br/>
                <h3> Don't have a Github account? </h3>
                  <a href="https://github.com/join" class="button" >
                      {/* <button className="frontPageButtons"> Sign Up </button>  */}
                    <div>
                      <button id="frontPageSignUpButton"> Sign Up </button>
                    </div>
                  </a>
          </div>
        </header>
    </div>
  );
}

export default Login;
