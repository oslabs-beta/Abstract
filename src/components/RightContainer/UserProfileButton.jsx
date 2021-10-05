import { useState } from 'react';
import { connect } from 'react-redux';
import ExportButton from './ExportButton';

const mapStateToProps = (state) => ({
  username: state.main.username
});

function UserProfileButton(props) {
  const [dropdown, setDropdown] = useState(false);

  function handleDropdown() {
    setDropdown(!dropdown);
  }

  return (
    <div id="profile_button_container"> 
      {
        <ExportButton handleDropdown={handleDropdown}/>
      }
      <img id='dashlogo' src='../../abstractlogo.png' alt='test'/>
      {/* <button id="profile_button" onClick={handleDropdown} > 
        <span> <b> {props.username ? props.username : "user"} </b> </span>
      </button> */}
      <h3 id='profile_button'>{ props.username ? props.username : "user"}</h3>
    </div>
  )
};

export default connect(mapStateToProps, null)(UserProfileButton);
