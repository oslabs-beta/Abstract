import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

const mapDispatchToProps = (dispatch) => ({
  selectComponent: (component) => dispatch(actions.selectComponent(component))
});

function HTMLComponent(props) {
  return (
      <h1> HTML Component </h1>
  );
}

export default connect(null, mapDispatchToProps)(HTMLComponent);
