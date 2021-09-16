import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

const mapDispatchToProps = (dispatch) => ({
  selectComponent: (component) => dispatch(actions.selectComponent(component))
});
 

function ReactRouterComponent() {
  return (
    <div>
      <button><img src="/home/ray/Abstract/public/logo512.png"></img></button>
      <p>ReactRouter Component</p>
    </div>
  );
}
export default connect (null, mapDispatchToProps)(ReactRouterComponent);