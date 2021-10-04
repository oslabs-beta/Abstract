import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';
import Canvas from './Canvas.jsx';
import Preview from './Preview.jsx';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { Form, Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const mapStateToProps = (state) => ({
  bodyView: state.main.bodyView,
  renderedComponents: state.main.renderedComponents,
  prototypeCode: state.main.prototypeCode
});

const mapDispatchToProps = (dispatch) => ({
  selectComponent: (component) => dispatch(actions.selectComponent(component))
});

function BodyContainer(props) {
  const scope = { Form, Button, Navbar, Container, Nav, NavDropdown };

  // code string is intentially tabbed this way for formatting on render
  const code = `
render (
  <>
  ${props.prototypeCode}
  </>
);
  `;

  return (
    <div id="body_container">
      {/* <div style={{ color: "black", marginBottom: "24px" }}>{props.bodyView}</div> */}
      <img id='dashlogo' src='../../abstractlogo.png' alt='test'/>
      <LiveProvider code={code} scope={scope} noInline={true}>
        { props.bodyView === 'Code Preview' ? <Preview><LiveEditor /></Preview> : null }
        <div style={{ backgroundColor: "white" }}><LiveError /></div>
        { props.bodyView === 'Canvas' ? <Canvas><LivePreview /></Canvas> : null }
      </LiveProvider>
    </div>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(BodyContainer);