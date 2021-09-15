import React from 'react';
import Ipad from './ipad.jsx';
import Phone from './Phone.jsx';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

const mapDispatchToProps = (dispatch) => ({
  toggleCanvasSize: () => dispatch(actions.toggleCanvasSize)
});

function SizeButton(props) {
  return (
    <>
      <Ipad/>
      <Phone/>
    </>
  )
};

export default connect(null, mapDispatchToProps)(SizeButton);
