import '../stylesheets/Login.css';
import { Icon } from '@iconify/react';
import { useEffect } from 'react';

function Login() {
  return (
    useEffect(() => {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "auto";
      };
    }, []),

    <div className="logInContainer">
      <h1 id='Abstract'> <Icon icon="mdi:hexagon-outline" id="hexagon" rotate={1} /> Abstract </h1>
        <header className="logInHeader">
          <div id = "welcomeBorderBox">
            <h1 id="welcomeMessage"> Welcome to Abstract! <br/> Please log in via Github. </h1>
            <br/>
              <div>
               <a href='https://github.com/login/oauth/authorize?client_id=46fc52b044a6de2f4a82&scope=read:user%20repo&redirect_uri=https://abstractreact.herokuapp.com/oauth'>
                  <button id="frontPageLogInButton">
                    <Icon icon="cib:github" id="gitHubLogo"/> Login with Github 
                  </button> <br/>
               </a>
              </div> <br/>
                <h3 id ="noAccount"> Don't have a Github account? </h3>
                  <a href="https://github.com/join" className="button" >
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
