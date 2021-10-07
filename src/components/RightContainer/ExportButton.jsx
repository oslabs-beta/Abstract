import { connect } from 'react-redux';
import { React } from 'react';
import { Icon } from '@iconify/react';
import * as actions from '../../actions/actions.js';

const mapStateToProps = (state) => ({
  exportModal: state.main.exportModal,
  bodyView: state.main.bodyView
})

const mapDispatchToProps = (dispatch) => ({
  toggleExportModal: (toggle) => dispatch(actions.toggleExportModal(toggle)),
  toggleBodyView: (toggle) => dispatch(actions.toggleBodyView(toggle))
});

function ExportButton(props) {
  return (
    <button id="export_modal_button" onClick={() => { props.handleDropdown(); props.toggleExportModal(!props.exportModal); props.toggleBodyView('Canvas') }}>
      <Icon icon="cib:github" id="gitHubLogo"/>Export
    </button>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(ExportButton);