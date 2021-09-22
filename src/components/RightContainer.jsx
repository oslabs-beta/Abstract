import React from 'react';
import NavButtons from './NavButtons.jsx';
import BodyContainer from './BodyContainer.jsx';
import UserProfileButton from './UserProfileButton.jsx';
import SizeButton from './SizeButton.jsx';
import { Icon } from '@iconify/react';


function RightContainer() {
  return (
    <div id="dashboard_right">
      {/* header */}
      <h1 id="abstract_title" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF' }}>
        <Icon icon="mdi:hexagon-outline" rotate={1} />
        Abstract
      </h1>
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
