import React from 'react';
import UserProfile from './UserProfile/UserSettings.jsx';
import NavButtons from './Buttons/NavButtons.jsx';
import BodyContainer from '../Body/BodyContainer.jsx';

function rightContainer() {
  <>
    <UserProfile></UserProfile>
    <NavButtons></NavButtons>
    <BodyContainer></BodyContainer>
  </>
};

export default rightContainer;
