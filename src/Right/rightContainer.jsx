import React from 'react';
import UserProfile from './UserProfile/userSettings.jsx';
import NavButtons from './Buttons/navButtons.jsx';
import BodyContainer from '../Body/bodyContainer.jsx';

function rightContainer() {
    <>
    <UserProfile></UserProfile>
    <NavButtons></NavButtons>
    {/* <Body></Body> */}
    </>
}

export default rightContainer;