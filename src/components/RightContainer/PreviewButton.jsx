import React from 'react';
import { connect } from 'react-redux';
import { Icon } from '@iconify/react';
import * as actions from '../../actions/actions.js';

const mapDispatchToProps = (dispatch) => ({
  toggleBodyView: (bodyView) => dispatch(actions.toggleBodyView(bodyView))
});

function PreviewButton(props) {
  return (
    <button id="preview_button" onClick= { () => props.toggleBodyView('Code Preview') }>
      <Icon icon="ci:window-code-block" />
    </button>
  );
};

export default connect(null, mapDispatchToProps)(PreviewButton);
