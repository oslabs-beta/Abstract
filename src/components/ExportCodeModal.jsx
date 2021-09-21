import { connect } from 'react-redux';
import { motion } from 'framer-motion';
import * as actions from '../actions/actions.js';
import ExportModalBackdrop from "./ExportModalBackdrop";
// import fetch from 'node-fetch';

const mapStateToProps = (state) => ({
  exportModal: state.main.exportModal,
  prototypeCode: state.main.prototypeCode,
  username: state.main.username
})

const mapDispatchToProps = (dispatch) => ({
  toggleExportModal: (toggle) => dispatch(actions.toggleExportModal(toggle))
});

function ExportCodeModal ({ toggleExportModal, exportModal, ...props}) {

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { repository_name, commit_message } = e.target.elements
   
    // create github repo
    await fetch('/export', {
      method: 'POST',
      mode: 'cors',
      body: 
      JSON.stringify({
        "prototypeCode": props.prototypeCode,
        "repository_name": repository_name.value,
        "commit_message": commit_message.value,
        "username": props.username,
      }),
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
  
    })
      .then(response => {
        console.log('reached here')
        return response.json()
      })
        .then(data => {
        console.log('second.then: ', data)
        return data
      }
      )
      .catch(err => console.log('err: ', err))
  }

  return (
    <ExportModalBackdrop onClick={() => toggleExportModal(!exportModal)}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="abstract_modal orange-gradient"
        initial='hidden'
        animate='visible'
        exit='exit'
      > 
        <button id="close_modal" onClick={() => toggleExportModal(!exportModal)}>x</button>
        <div className="export_form_container">
          <h2>Export Code</h2>
          <h3>Create a Repository</h3>
          <form id="export_form" onSubmit={handleFormSubmit}> 
            <label htmlFor="repository_name">Repository Name:</label>
            <input type="text" id="repository_name" name="repository_name" placeholder="Enter a repository name."></input>
            <label htmlFor="commit_message">Commit Message:</label>
            <input type="text" id="commit_message" name="commit_message" placeholder="Enter a commit message."></input>

            <button id="submit_export_button" type="submit">Export to Github</button>
          </form>
        </div>
      </motion.div>
    </ExportModalBackdrop>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ExportCodeModal);