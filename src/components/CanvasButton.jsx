import { React } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';
import { Icon } from '@iconify/react';


const mapDispatchToProps = (dispatch) => ({
  toggleBodyView: (bodyView) => dispatch(actions.toggleBodyView(bodyView))
});

function CanvasButton(props) {
  return (
    <button id="canvas_button" onClick = {() => props.toggleBodyView('Canvas')}>
      <Icon icon="el:brush" />
    </button>
  )
};

export default connect(null, mapDispatchToProps)(CanvasButton);