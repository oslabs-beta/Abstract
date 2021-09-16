import Canvas from './Canvas.jsx';
import CanvasComponents from './CanvasComponents.jsx';
import Preview from './Preview.jsx';
// import Tree from './Tree.jsx';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

const mapStateToProps = (state) => ({
  bodyView: state.main.bodyView,
  renderedComponents: state.main.renderedComponents,
  canvasSize: state.main.canvasSize
});

const mapDispatchToProps = (dispatch) => ({
  selectComponent: (component) => dispatch(actions.selectComponent(component))
});

function BodyContainer() {
  return (
    <>
      <Canvas/>
      <CanvasComponents/>
      <Preview/>
      {/* <Tree/> */}
    </>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(BodyContainer);