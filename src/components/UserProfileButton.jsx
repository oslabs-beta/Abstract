import { useState } from 'react';
import { connect } from 'react-redux';
import ExportButton from './ExportButton';


const mapStateToProps = (state) => ({
  username: state.main.username
});

function UserProfileButton(props) {
  const [dropdown, setDropdown] = useState(false);

  function handleDropdown() {
    // console.log('dropdown onclick happens');
    setDropdown(!dropdown);
  }

  return (
    <div id="profile_button_container"> 
      {
        dropdown ? <ExportButton handleDropdown={handleDropdown}/> : null
      }
      <button id="profile_button" onClick={handleDropdown} > 
        <span> <b> {props.username ? props.username : "user"} </b> </span>
      </button>
    </div>
  )
};

export default connect(mapStateToProps, null)(UserProfileButton);
