import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

const mapDispatchToProps = (dispatch) => ({
  selectComponent: () => dispatch(actions.selectComponent)
});

function HTMLComponent(props) {
  return (
      <h1> HTML Component </h1>
  );
}

export default connect(null, mapDispatchToProps)(HTMLComponent);
