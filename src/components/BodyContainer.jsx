import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';
import Canvas from './Canvas.jsx';
import Preview from './Preview.jsx';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

const mapStateToProps = (state) => ({
  bodyView: state.main.bodyView,
  renderedComponents: state.main.renderedComponents,
});

const mapDispatchToProps = (dispatch) => ({
  selectComponent: (component) => dispatch(actions.selectComponent(component))
});

function BodyContainer(props) {

  const componentCode = `
  const Form = () => (
    return (
      <h2>Export Code</h2>
      <h3>Create a Repository</h3>
      <form id="export_form"> 
        <label htmlFor="repository_name">Repository Name:</label>
        <input type="text" id="repository_name" name="repository_name" placeholder="Enter a repository name."></input>
        <label htmlFor="commit_message">Commit Message:</label>
        <input type="text" id="commit_message" name="commit_message" placeholder="Enter a commit message."></input>
  
        <button id="submit_export_button">Export to Github</button>
      </form>
    );
  )
  `;

  const renderCode = `
  render(
    <Form />
  );
  `;

  return (
    <>
      {props.bodyView}
      <LiveProvider code={ componentCode + renderCode }>
        { props.bodyView === 'Code Preview' ? <Preview><LiveEditor /></Preview> : null }
        <LiveError />
        { props.bodyView === 'Canvas' ? <Canvas><LivePreview /></Canvas> : null }
      </LiveProvider>
    </>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(BodyContainer);