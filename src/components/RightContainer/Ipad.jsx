import { connect } from 'react-redux';
import { Icon } from '@iconify/react';
import * as actions from '../../actions/actions.js';

const mapDispatchToProps = (dispatch) => ({
  toggleCanvasSize: (canvasSize) => dispatch(actions.toggleCanvasSize(canvasSize))
});

function Ipad(props) {
  return (
    <button onClick={() => { props.setDropdown(false); props.toggleCanvasSize('iPad Pro') }}>
      <Icon icon="ic:baseline-tablet-mac" />
    </button>
  );
};

export default connect(null, mapDispatchToProps)(Ipad);