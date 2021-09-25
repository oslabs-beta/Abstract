import * as types from '../constants/actionTypes';

const initialState = {
  username: "oakj",
  renderedComponents: [], 
  bodyView: "Canvas", // Canvas, Code Preview
  canvasSize: "iPad Pro", // iPhone X, iPad Pro
  componentMenu: true,
  selectedComponent: "",
  exportModal: false,
  // prototype code is used as an input to React-Live inside BodyContainer and as export code to Github
  prototypeCode: ``,
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
      return {
        ...state,
        canvasSize: action.payload
      };
    }
    case types.TOGGLE_COMPONENT_MENU: {
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