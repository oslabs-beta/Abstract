import { React } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

const mapDispatchToProps = (dispatch) => ({
  toggleBodyView: (bodyView) => dispatch(actions.toggleBodyView(bodyView))
});

function CanvasButton(props) {
  return (
    <button onClick = {() => props.toggleBodyView('Canvas')} >Canvas</button>
  )
};

export default connect(null, mapDispatchToProps)(CanvasButton);