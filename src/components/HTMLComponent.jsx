import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

const mapDispatchToProps = (dispatch) => ({
  selectComponent: (component) => dispatch(actions.selectComponent(component))
});

function HTMLComponent({ names }) {
  return (
    <div>
      <button><img src='/home/ray/Abstract/public/names'></img></button>
      <p>Html Component</p>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(HTMLComponent);
