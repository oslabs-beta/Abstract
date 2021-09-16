import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

const mapDispatchToProps = (dispatch) => ({
  selectComponent: (component) => dispatch(actions.selectComponent(component)),
});

function HTMLComponent({ selectComponent, name, key }) {
  return (
    <div>
      <button onClick={() => selectComponent('div')}><img src='/logo192.png' alt='test'></img></button>
      <p>{name}</p> 
    </div>
  );
}


export default connect(null, mapDispatchToProps)(HTMLComponent);
