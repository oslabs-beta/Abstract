import { connect } from 'react-redux';
import { motion } from 'framer-motion';
import * as actions from '../actions/actions.js';
import ExportModalBackdrop from "./ExportModalBackdrop";

const mapStateToProps = (state) => ({
  exportModal: state.main.exportModal
})

const mapDispatchToProps = (dispatch) => ({
  toggleExportModal: (toggle) => dispatch(actions.toggleExportModal(toggle))
});

function ExportCodeModal ({ toggleExportModal, exportModal }) {
  return (
    <ExportModalBackdrop onClick={() => toggleExportModal(!exportModal)}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal orange-gradient"
        initial='hidden'
        animate='visible'
        exit='exit'
      > 
        <div id="export-modal-menu">
          <h1>Export Code Modal</h1>
          <button onClick={() => toggleExportModal(!exportModal)}>Close</button>
        </div>
      </motion.div>
    </ExportModalBackdrop>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ExportCodeModal);