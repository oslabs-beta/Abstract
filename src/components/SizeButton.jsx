import { React, useState } from 'react';
import Ipad from './ipad.jsx';
import Phone from './Phone.jsx';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

const mapDispatchToProps = (dispatch) => ({
  toggleCanvasSize: (canvasSize) => dispatch(actions.toggleCanvasSize(canvasSize))
});

function SizeButton(props) {
// declaring state to toggle state of dropdown
const [dropdown, setDropdown] = useState(false);

  return(
    <>
      <Ipad/>
      <Phone/>
    </>
  )
};

export default connect(null, mapDispatchToProps)(SizeButton);
