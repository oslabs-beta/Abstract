import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

const mapDispatchToProps = (dispatch) => ({
  selectComponent: (component) => dispatch(actions.selectComponent(component))
});

function BootstrapComponent (props) {
  return (
    <h1> Bootstrap Components </h1>
  );
};

export default connect(null, mapDispatchToProps)(BootstrapComponent);