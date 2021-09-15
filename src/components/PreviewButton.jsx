import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

const mapDispatchToProps = (dispatch) => ({
  toggleBodyView: () => dispatch(actions.toggleBodyView)
});

// code preview button
function PreviewButton(props) {
  return (
    <button>preview</button>
  );
};

export default connect(null, mapDispatchToProps)(PreviewButton);
