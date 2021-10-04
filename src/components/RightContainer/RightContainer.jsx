import React from 'react';
import { Icon } from '@iconify/react';
import NavButtons from './NavButtons.jsx';
import BodyContainer from './BodyContainer.jsx';
import UserProfileButton from './UserProfileButton.jsx';
import SizeButton from './SizeButton.jsx';


function RightContainer() {
  return (
    <div id="dashboard_right">
      {/* <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: '70px', width: '100%'}}>
        <img id='dashlogo' src='../../logo.svg' alt='test'/>
      </div> */}
      <UserProfileButton/>
      {/* right-side buttons */}
      <SizeButton/>
      <NavButtons></NavButtons>
      {/* main body */}
      <BodyContainer></BodyContainer>
    </div>
  )
};




export default RightContainer;
