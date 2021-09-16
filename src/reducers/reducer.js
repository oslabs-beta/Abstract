import * as types from '../constants/actionTypes';

const initialState = {
  username: "oakj",
  renderedComponents: [], 
  bodyView: "canvas", // canvas, code preview, export, component tree
  canvasSize: "iPad Pro", //iphone, ipad 
  componentMenu: true, //boolean
  selectedComponent: "", 
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
      return state;
    }
    case types.TOGGLE_CANVAS_SIZE: {
      return state;
    }
    case types.TOGGLE_COMPONENT_MENU: {
      console.log('entered toggle component menu reducer');
      return { 
        ...state,
        componentMenu: !state.componentMenu,
      }
    }
    case types.SELECT_COMPONENT: {
      return state;
    }
    default: {
      return state;
    }
  }
}

export default reducer