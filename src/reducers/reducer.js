import * as types from '../constants/actionTypes';

const initialState = {
  username: "oakj",
  renderedComponents: [], 
  bodyView: "Canvas", // Canvas, Code Preview
  canvasSize: "iPad Pro", //iphone, ipad 
  componentMenu: true, //boolean
  selectedComponent: "",
  exportModal: false, // boolean
  // prototype code is used as an input to React-Live inside BodyContainer and as export code to Github
  prototypeCode: `import React, { Component } from 'react';
  import logo from './logo.svg';
  import './App.css';
  
  class App extends Component {
    render() {
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
        </div>
      );
    }
  }
  
  export default App;`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ACTIVE_USER: {
      return {
        ...state,
        username: action.payload
      };
    }
    case types.ADD_COMPONENT: {
      console.log('ADD COMPONENT reducer is hit');
      return {
        ...state,
        prototypeCode: state.prototypeCode + action.payload
      };
    }
    case types.DELETE_COMPONENT: {
      return state;
    }
    case types.TOGGLE_BODY_VIEW: {
      return {
        ...state,
        bodyView: action.payload
      };
    }
    case types.TOGGLE_CANVAS_SIZE: {
      console.log('toggle canvas size happened inside the reducer');
      return {
        ...state,
        canvasSize: action.payload
      };
    }
    case types.TOGGLE_COMPONENT_MENU: {
      console.log('entered toggle component menu reducer');
      return {
        ...state,
        componentMenu: !state.componentMenu,
      }
    }
    case types.SELECT_COMPONENT: {
      return {
        ...state,
        selectedComponent: action.payload
      };
    }
    case types.TOGGLE_EXPORT_MODAL: {
      return {
        ...state,
        exportModal: action.payload
      }
    }
    default: {
      return state;
    }
  }
}

export default reducer