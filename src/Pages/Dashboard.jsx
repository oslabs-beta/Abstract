// import logo from './logo.svg';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';
import '../stylesheets/Login.css';
import RightContainer from '../components/RightContainer';
import ComponentMenu from '../components/ComponentMenu';

const mapDispatchToProps = (dispatch) => ({
  setUser: (username) => dispatch(actions.setUser(username)),
});

function Dashboard(props) {
  // useParams parses the url and outputs the params. Using slice on username to extract just the username
  const username = useParams().username.slice(9);
  // destructure setUser action from props to use inside useEffect (so that useEffect doesn't render on every prop change
  const { setUser } = props;

  // invoke setUser action whenever the user changes
  useEffect(() => {
    setUser(username)
  }, [username, setUser])

  return (
      <>
        <h1>Dashboard</h1>
        <ComponentMenu></ComponentMenu>
        <RightContainer></RightContainer>
      </>
  )
};

export default connect(null, mapDispatchToProps)(Dashboard);