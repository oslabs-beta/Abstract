// import logo from './logo.svg';
import '../stylesheets/Login.css';
import React from 'react';
import ReactDOM from 'react-dom';
// prism-react-renderer used to render a Code Preview
import Highlight, { defaultProps } from 'prism-react-renderer';
import { Form, Button } from 'react-bootstrap';
// XXX used to render components on the canvas


function TestPrismRenderer() {
  const exampleCode = `
  <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  `;

  return (
    <Highlight {...defaultProps} code={exampleCode} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}

function TestButton({ hello }) {
  return (
    <button>Test Button: { hello }</button>
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
        <TestPrismRenderer/>
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
