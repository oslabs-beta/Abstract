import { React, useState } from 'react';
import HTMLLibrary from './HTMLLibrary.jsx';
import ReactRouterLibrary from './ReactRouterLibrary.jsx';
import BootstrapLibrary from './BootstrapLibrary.jsx';
import ComSettings from './ComSettings.jsx';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';

const mapStateToProps = (state) => ({
  componentMenu: state.main.componentMenu
});

const mapDispatchToProps = (dispatch) => ({
  toggleComponentMenu: (componentMenu) => dispatch(actions.toggleComponentMenu(componentMenu))
});

function ComponentMenu (props) {
  // declaring library state to decide which dropdown (HTML, Bootstrap) to render
  const [library, setLibrary] = useState('')

  return (
    <div id="component_menu">
      <div id='component_menu_banner'>Component Menu</div>
      {
        props.componentMenu ?
          <>
            <button className="compMenuBtn" onClick={() => setLibrary('BootstrapLibrary')}>Bootstrap Library</button> { library === 'BootstrapLibrary' ? <BootstrapLibrary /> : null }
            <button className="compMenuBtn" onClick={() => setLibrary('HTMLLibrary')}>HTML Library</button> { library === 'HTMLLibrary' ? <HTMLLibrary /> : null }
            <button className="compMenuBtn" disabled={true} onClick={() => setLibrary('ReactRouterLibrary')}>React Router Library</button>{ library === 'ReactRouterLibrary' ? <ReactRouterLibrary /> : null }
            <ComSettings />
          </>
        : null
      }
    </div>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(ComponentMenu);
