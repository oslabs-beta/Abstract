import { connect } from 'react-redux';
import { Icon } from '@iconify/react';
import * as actions from '../../actions/actions.js';

const mapDispatchToProps = (dispatch) => ({
  toggleCanvasSize: (canvasSize) => dispatch(actions.toggleCanvasSize(canvasSize))
});

function Phone(props) {
  return (
    <button onClick={() => { props.setDropdown(false); props.toggleCanvasSize('iPhone X') }}>
      <Icon icon="mdi:cellphone" />
    </button>
  );
};

export default connect(null, mapDispatchToProps)(Phone);
