import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

const mapDispatchToProps = (dispatch) => ({
  toggleBodyView: () => dispatch(actions.toggleBodyView)
});

// code preview button
function TreeButton(props) {
  return (
    <button>Tree</button>
  );
};

export default connect(null, mapDispatchToProps)(TreeButton);