import { React } from 'react';
import { connect } from 'react-redux';
import { Icon } from '@iconify/react';
import * as actions from '../../actions/actions.js';

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