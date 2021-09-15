import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  username: state.username
});

function UserProfileButton(props) {
  return (
    <div> 
      <button id="gitProfileName"> 
        <span> <b> {props.username ? props.username : "oakj"} </b> </span>
      </button>
    </div>
  )
};

export default connect(mapStateToProps, null)(UserProfileButton);
