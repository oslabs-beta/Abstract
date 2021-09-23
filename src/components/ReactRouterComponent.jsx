import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';
import { Icon } from '@iconify/react';


const mapDispatchToProps = (dispatch) => ({
  selectComponent: (component) => dispatch(actions.selectComponent(component))
});
 

function ReactRouterComponent() {
  return (
    <div>
      <button class='componentButton'>
      <Icon icon='icon-park-outline:caution' id='componentIcon'/>
      </button>
      <p>IN-PROGRESS</p>
    </div>
  );
}
export default connect (null, mapDispatchToProps)(ReactRouterComponent);