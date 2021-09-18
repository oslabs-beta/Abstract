import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

const mapDispatchToProps = (dispatch) => ({
  toggleBodyView: (bodyView) => dispatch(actions.toggleBodyView(bodyView))
});

// code preview button
function TreeButton(props) {
  return (
    <button onClick= {() => props.toggleBodyView('Component Tree')}>Tree</button>
  );
};

export default connect(null, mapDispatchToProps)(TreeButton);