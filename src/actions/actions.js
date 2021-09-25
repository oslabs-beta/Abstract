import * as types from '../constants/actionTypes';
import * as componentTypes from '../constants/componentTypes';

// action for SET_ACTIVE_USER action type
export const setUser = (username) => {
  return  {
    type: types.SET_ACTIVE_USER,
    payload: username
  }
};

// action for ADD_COMPONENT action type
export const addComponent = (selectedComponent) => {
  // if selectedComponent === "Form", assign payload to componentTypes.Form
  if (selectedComponent === "form"){
    return {
      type: types.ADD_COMPONENT,
      payload: componentTypes.form
    }
  }

  if (selectedComponent === "button") {
    return {
      type: types.ADD_COMPONENT,
      payload: componentTypes.button
    }
  }
};

//action for DELETE_COMPONENT action type
export const deleteComponent = (selectedComponent) => ({
  type: types.DELETE_COMPONENT,
  payload: selectedComponent
})

// action for TOGGLE_BODY_VIEW action type
export const toggleBodyView = (bodyView) => ({
  type: types.TOGGLE_BODY_VIEW,
  payload: bodyView
})

//action for TOGGLE_CANVAS_SIZE action type
export const toggleCanvasSize = (canvasSize) => ({
  type: types.TOGGLE_CANVAS_SIZE,
  payload: canvasSize
})

//action for TOGGLE_COMPONENT_MENU action type
export const toggleComponentMenu = (componentMenu) => {
  return {
    type: types.TOGGLE_COMPONENT_MENU,
    payload: componentMenu
  }
}

//action for SELECT_COMPONENT action type
export const selectComponent = (component) => ({
  type: types.SELECT_COMPONENT,
  payload: component
})

//action for TOGGLE EXPORT MODAL
export const toggleExportModal = (toggle) => ({
  type: types.TOGGLE_EXPORT_MODAL,
  payload: toggle
})
