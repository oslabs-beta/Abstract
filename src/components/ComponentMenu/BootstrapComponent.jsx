import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';

const mapDispatchToProps = (dispatch) => ({
  selectComponent: (component) => dispatch(actions.selectComponent(component))
});

function BootstrapComponent( {selectComponent, name, key, pic, disabled}) {
  if (disabled) {
    return (
      <div> 
        <button onClick={() => selectComponent(name)} disabled={true} className='componentButton'>{pic}</button>
        <p>{name}</p>
      </div>
    )
  }
  return (
    <div>
      <button onClick={() => selectComponent(name)} className='componentButton'>{pic}</button>
      <p>{name}</p>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(BootstrapComponent);