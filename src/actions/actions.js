import * as types from '../constants/actionTypes';

// action for SET_ACTIVE_USER action type
export const setUser = (username) => {
  return  {
    type: types.SET_ACTIVE_USER,
    payload: username
  }
};

// action for ADD_COMPONENT action type
export const addComponent = (selectedComponent) => ({
  type: types.ADD_COMPONENT,
  payload: selectedComponent
});

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
  console.log('entered toggle component menu action creator');
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


// export const addCardActionCreator = marketId => ({
//   type: types.ADD_CARD,
//   payload: marketId,
// });

// export const ANSWERED_CORRECTLY = () => (dispatch, getState) => {
//   const userID = getState().flashCodes.userID;
//   const flashCardID = getState().flashCodes.flashCardList[0]._id
//   console.log('line 18', userID, flashCardID)
//   axios.post('/cards/answeredCorrect', {userID: userID, flashCardID: flashCardID})
//     .then(({status}) =>{
//       if(status === 200){
//         dispatch({
//           type: types.ANSWERED_CORRECTLY,
//           payload: flashCardID
//         })
//       }
//     })
//     .catch(console.error)
// };