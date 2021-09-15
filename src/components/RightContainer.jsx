import React from 'react';
import UserSettings from './UserSettings.jsx';
import NavButtons from './NavButtons.jsx';
import BodyContainer from './BodyContainer.jsx';
import UserProfileButton from './UserProfileButton.jsx';

function RightContainer() {
  return (
    <>
      <h1> Abstract</h1>
        <div>
          <img src="https://spng.pngfind.com/pngs/s/182-1824195_hexagon-png-transparent-images-line-art-png-download.png" alt="hexagon" id="hexagon"/>
        {/* need to find image with no background */}
      </div>
      <UserProfileButton/>
      <UserSettings></UserSettings>
      <NavButtons></NavButtons>
      <BodyContainer></BodyContainer>
    </>
  )
};




export default RightContainer;
