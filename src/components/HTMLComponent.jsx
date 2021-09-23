import { propTypes } from 'react-bootstrap/esm/Image';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

const mapDispatchToProps = (dispatch) => ({
  selectComponent: (component) => dispatch(actions.selectComponent(component)),
});

function HTMLComponent({ selectComponent, name, key, pic }) {
  return (
    <div>
      <button  onClick={() => selectComponent(name)} class='componentButton'>{pic}</button>
      <p>{name}</p> 
    </div>
  );
} 


export default connect(null, mapDispatchToProps)(HTMLComponent);
