import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

const mapDispatchToProps = (dispatch) => ({
  selectComponent: () => dispatch(actions.selectComponent)
});

function BootStrapComponents () {
  return (
    <h1> Bootstrap Components </h1>
  );
};

export default connect(null, mapDispatchToProps)(BootStrapComponents);