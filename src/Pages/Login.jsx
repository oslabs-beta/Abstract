// import logo from './logo.svg';
import '../stylesheets/Login.css';
import React from 'react';
import ReactDOM from 'react-dom';
// import react-live to add code preview and render components
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'
import { Form, Button } from 'react-bootstrap';
import { render } from '@testing-library/react';

function TestButton({ hello }) {
  return (
    <div>
      <button>Test Button: { hello }</button>
    </div>
  );
}

// create function that creates a new react element
function handleNewComponent(parent) {
  console.log('handle new component happens');
  // ReactDOM.render(TestButton, document.querySelector('.App'));
  // return ReactDOM.createPortal(parent.props.children, parent)
  // return React.createElement('button', null, `Test Button`);
  console.log('parent', parent);
  return console.log(parent.props);
}

function Login(props) {
  console.log('login component', Login);
  console.log('test button', TestButton);

  // for all wrapper styling changes, iterate over this snippet
  const styleCode = `
  const StyleWrapper = ({ children }) => (
    <div style={{
      background: 'papayawhip',
      width: '800px',
      height: '500px',
      padding: '2rem'
    }}>
      {children}
    </div>
  )
  `;

  const Form = `
  const Form = () => {
    return (
      <>
        <h2>Export Code</h2>
        <h3>Create a Repository</h3>
        <form id="export_form"> 
          <label htmlFor="repository_name">Repository Name:</label>
          <input type="text" id="repository_name" name="repository_name" placeholder="Enter a repository name."></input>
          <label htmlFor="commit_message">Commit Message:</label>
          <input type="text" id="commit_message" name="commit_message" placeholder="Enter a commit message."></input>

          <button id="submit_export_button">Export to Github</button>
        </form>
      </>
    );
  }
  `;

  // Redux state "renderedComponents" can be an array of objects.
  // each object is a component added to the canvas and code preview
  // the component object will have 3 properties:
  // 1. a unique id to be referenced
  // 2. the React component code in the form of a string (populated with styling and settings per user input)
  // 3. the component instantiation? such as <Form/> so that it can be appended to the render string

  // can loop through renderedComponents and output a concatenated string of all components code?
  // if there are multiple components of the same type in the renderedComponents array, can fitler it so it is only added once
  const componentCode = Form;

  // can loop through renderedComponents and output a concatenated string of all component instantiations?
  const renderCode = `
  render(
    <StyleWrapper>
      <Form />
    </StyleWrapper>
  )
  `;

  return (
    <div className="App">
    <div>
      <h1> Welcome to Abstract! </h1>
      <h1> Please log in via Github. </h1>
    </div>
  
    <a href='https://github.com/login/oauth/authorize?client_id=46fc52b044a6de2f4a82&scope=read:user&redirect_uri=http://localhost:5000/oauth'> <button> Log In with Github </button> </a>

    <h3> Don't have a Github account? </h3>

    < a href="https://github.com/join" class="button" > <button> Sign Up </button> </a>
    <button onClick={() => handleNewComponent(Login)}> Add Component </button>

    <LiveProvider code={styleCode + componentCode + renderCode} noInline={true}>
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  </div>
  );
}

export default Login;





// figuring out how to store react components in a tree data structure

// function Tree(value) {
//   this.value = value;
//   this.right = null;
//   this.left = null;
// }

// const virtualPrototypeDOM = new Tree(<Login/>)
