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
  const [library, setLibrary] = useState('')
  
  console.log(library);
  console.log('props:\n', props);
  console.log('toggleComponentMenu', props.toggleComponentMenu);

  

  return (
    <>
      <button onClick={props.toggleComponentMenu}>Toggle Component</button>
      
      <button onClick={() => setLibrary('HTMLLibrary')}>HTML Library</button><HTMLLibrary library={library}/>
      <button onClick={() => setLibrary('BootstrapLibrary')}>Bootstrap Library</button><BootstrapLibrary library={library}/>
      <button onClick={() => setLibrary('ReactRouterLibrary')}>React Router Library</button><ReactRouterLibrary library={library}/>
      <ComSettings />
      
    </>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(ComponentMenu);
