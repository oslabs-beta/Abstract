import React from 'react';
import NavButtons from './NavButtons.jsx';
import BodyContainer from './BodyContainer.jsx';
import UserProfileButton from './UserProfileButton.jsx';
import SizeButton from './SizeButton.jsx';

function RightContainer() {
  return (
    <div id="dashboard_right">
      <div id="dashboard_header">
        <div></div> {/* this div is required tos tyle the header correctly */}
        <h1 style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF' }}>
          <img src="https://spng.pngfind.com/pngs/s/182-1824195_hexagon-png-transparent-images-line-art-png-download.png" alt="hexagon" id="hexagon"/>
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
