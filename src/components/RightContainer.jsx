import React from 'react';
import NavButtons from './NavButtons.jsx';
import BodyContainer from './BodyContainer.jsx';
import UserProfileButton from './UserProfileButton.jsx';
import SizeButton from './SizeButton.jsx';
import { Icon } from '@iconify/react';


function RightContainer() {
  return (
    <div id="dashboard_right">
      <div id="dashboard_header">
        <div></div> {/* this div is required tos tyle the header correctly */}
        <h1 style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF' }}>
          <Icon icon="mdi:hexagon-outline" rotate={1} />
          Abstract
        </h1>
        {/* need to find image with no background */}
        <UserProfileButton/>
      </div>
      <SizeButton/>
      <NavButtons></NavButtons>
      <BodyContainer></BodyContainer>
    </div>
  )
};




export default RightContainer;
