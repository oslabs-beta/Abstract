import { React, useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

const mapDispatchToProps = (dispatch) => ({
  toggleBodyView: () => dispatch(actions.toggleBodyView)
});

function CanvasButton(props) {
  // declaring state to toggle state of dropdown
  const [dropdown, setDropdown] = useState(false);

  return (
    <button>Canvas</button>
  )
};

export default connect(null, mapDispatchToProps)(CanvasButton);