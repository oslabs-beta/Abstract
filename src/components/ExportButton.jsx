import { connect } from 'react-redux';
import { React } from 'react';
import * as actions from '../actions/actions.js';

const mapStateToProps = (state) => ({
  exportModal: state.main.exportModal
})

// map dispatch toggle export modal
const mapDispatchToProps = (dispatch) => ({
  toggleExportModal: (toggle) => dispatch(actions.toggleExportModal(toggle))
});

function ExportButton(props) {
  return (
    <button id="export_modal_button" onClick={() => { props.handleDropdown(); props.toggleExportModal(!props.exportModal) }}>Export</button>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(ExportButton);