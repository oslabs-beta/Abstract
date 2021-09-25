import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';

const mapDispatchToProps = (dispatch) => ({
  addComponent: (component) => dispatch(actions.addComponent(component))
});

function AddButton({ addComponent, component }) {
  return (
    <div>
      <button id='addButton' onClick={() => addComponent(component)}>Add</button>
    </div>
  )
};

export default connect(null, mapDispatchToProps)(AddButton);
