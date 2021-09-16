import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

const mapDispatchToProps = (dispatch) => ({
  addComponent: () => dispatch(actions.addComponent)
});

function AddButton(props) {
  return (
    <button>Add</button>
  )
};


export default connect(null, mapDispatchToProps)(AddButton);
