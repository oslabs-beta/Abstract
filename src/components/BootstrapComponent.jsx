import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

const mapDispatchToProps = (dispatch) => ({
  selectComponent: (component) => dispatch(actions.selectComponent(component))
});

function BootstrapComponent() {
  return (
      <button>Bootstrap Component</button>
  );
}

export default connect(null, mapDispatchToProps)(BootstrapComponent);