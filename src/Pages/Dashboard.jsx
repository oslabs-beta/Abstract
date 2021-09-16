// import logo from './logo.svg';
import React from 'react';
import '../stylesheets/Login.css';
import RightContainer from '../components/RightContainer';
import ComponentMenu from '../components/ComponentMenu';

function Dashboard() {
  return (
      <>
        <h1>Dashboard</h1>
        <ComponentMenu></ComponentMenu>
        <RightContainer></RightContainer>
      </>
  )
};

export default Dashboard;