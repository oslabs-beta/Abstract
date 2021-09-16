import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

const mapDispatchToProps = (dispatch) => ({
  selectComponent: (component) => dispatch(actions.selectComponent(component))
});
 
function ReactRouterComponent (props) {
  return (
    <h1> React-Router Component </h1>
  );
};
export default connect (null, mapDispatchToProps)(ReactRouterComponent);