import { connect } from 'react-redux';
import { motion } from 'framer-motion';
import * as actions from '../actions/actions.js';
import ExportModalBackdrop from "./ExportModalBackdrop";


const mapStateToProps = (state) => ({
  exportModal: state.main.exportModal,
  prototypeCode: state.main.prototypeCode,
  username: state.main.username,
  bodyView: state.main.bodyView
})

const mapDispatchToProps = (dispatch) => ({
  toggleExportModal: (toggle) => dispatch(actions.toggleExportModal(toggle)),
});

function ExportCodeModal ({ toggleExportModal, exportModal, ...props}) {
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { repository_name, commit_message } = e.target.elements
    // create github repo
    const createRepo = await fetch('/export', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        "repository_name": repository_name.value,
      }),
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())

    //update files
    // console.log('proto code: ', props.prototypeCode)
    const updateRepo = await fetch('/export', {
        method: 'PUT',
        mode: 'cors',
        body: JSON.stringify({
          "prototypeCode": props.prototypeCode,
          "repository_name": repository_name.value,
          "commit_message": commit_message.value,
          "username": props.username,
        }),
        headers: { 
          'Accept' : 'application/json',
          'Content-Type': 'application/json' }
      })
      .then(response => response.json())
      .then(data => data)
      .then(toggleExportModal(!exportModal))
      .then(alert('Code successfully exported! Please check your Github repos.'))
      .catch(e => console.log('err: ', e))  
    }
    // })

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

            <button id="submit_export_button" type="submit" >Export to Github</button>
          </form>
        </div>
      </motion.div>
    </ExportModalBackdrop>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ExportCodeModal);