// import logo from './logo.svg';
import React from 'react';
import '../stylesheets/Login.css';
import LeftContainer from '../Left/leftContainer';
import RightContainer from '../Right/rightContainer';
function Dashboard() {
  return (
      <>
      <h1>Dashboard</h1>
      <LeftContainer></LeftContainer>
      <RightContainer></RightContainer>
      </>
  );
}

export default Dashboard;