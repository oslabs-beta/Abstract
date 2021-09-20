import * as types from '../constants/actionTypes';

const initialState = {
  username: "oakj",
  renderedComponents: [], 
  bodyView: "Canvas", // Canvas, Code Preview
  canvasSize: "iPad Pro", //iphone, ipad 
  componentMenu: true, //boolean
  selectedComponent: "",
  exportModal: false // boolean
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
      return state;
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