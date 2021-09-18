import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

const mapDispatchToProps = (dispatch) => ({
  toggleBodyView: (bodyView) => dispatch(actions.toggleBodyView(bodyView))
});

// code preview button
function PreviewButton(props) {
  return (
    <button onClick= { () => props.toggleBodyView('Code Preview') }>preview</button>
  );
};

export default connect(null, mapDispatchToProps)(PreviewButton);
