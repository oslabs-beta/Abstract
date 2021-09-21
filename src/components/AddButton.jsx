import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

const mapDispatchToProps = (dispatch) => ({
  addComponent: (component) => dispatch(actions.addComponent(component))
});

function AddButton({ addComponent, component }) {
  return (
    <button onClick={() => addComponent(component)}>Add</button>
  )
};


export default connect(null, mapDispatchToProps)(AddButton);
