import Canvas from './Canvas.jsx';
import CanvasComponents from './CanvasComponents.jsx';
import Preview from './Preview.jsx';
// import Tree from './Tree.jsx';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

const mapStateToProps = (state) => ({
  bodyView: state.bodyView,
  renderedComponents: state.renderedComponents,
  canvasSize: state.canvasSize
});

const mapDispatchToProps = (dispatch) => ({
  selectComponent: () => dispatch(actions.selectComponent)
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