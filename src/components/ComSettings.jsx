import AddButton from './AddButton.jsx';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  selectedComponent: state.main.selectedComponent
});


function ComSettings(props) {
  return (
    <AddButton></AddButton>
  )
};

export default connect(mapStateToProps, null)(ComSettings);