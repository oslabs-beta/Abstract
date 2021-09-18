import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

const mapDispatchToProps = (dispatch) => ({
  toggleCanvasSize: (canvasSize) => dispatch(actions.toggleCanvasSize(canvasSize))
});

function Phone(props) {
  return (
    // when clicked, change cavas size to 812 x 375 scaled to 50% to fit screen
    <button onClick={() => props.toggleCanvasSize('iPhone X')}>PHONE</button>
  );
};

export default connect(null, mapDispatchToProps)(Phone);
