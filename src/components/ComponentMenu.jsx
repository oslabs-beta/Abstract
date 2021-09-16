import { React, useState } from 'react';
import HTMLLibrary from './HTMLLibrary.jsx';
import ReactRouterLibrary from './ReactRouterLibrary.jsx';
import BootstrapLibrary from './BootstrapLibrary.jsx';
import ComSettings from './ComSettings.jsx';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

const mapStateToProps = (state) => ({
  componentMenu: state.main.componentMenu
});

const mapDispatchToProps = (dispatch) => ({
  toggleComponentMenu: (componentMenu) => dispatch(actions.toggleComponentMenu(componentMenu))
});

function ComponentMenu (props) {
  // declaring library state to decide which dropdown (HTML, Bootstrap) to render
  const [library, setLibrary] = useState('');

  console.log('props:\n', props);
  console.log('toggleCOmponentMenu', props.toggleComponentMenu);

  return (
    <>
      <button onClick={props.toggleComponentMenu}>Toggle Component</button>
      <HTMLLibrary />
      <BootstrapLibrary />
      <ReactRouterLibrary />
      <ComSettings />
    </>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(ComponentMenu);
