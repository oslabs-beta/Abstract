import AddButton from './AddButton.jsx';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';

const mapStateToProps = (state) => ({
  selectedComponent: state.main.selectedComponent
});


function ComSettings(props) {

   return ( props.selectedComponent === 'div' ? 
  <>
  <h1>Div Component Settings</h1>
    <Form>
      <Form.Group>
        <Form.Label>Component Name</Form.Label>
        <Form.Control type='component_name'></Form.Control>
        <Form.Label>Parent Component</Form.Label>
        <Form.Select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </Form.Select>
        <Form.Label>Class Name</Form.Label>
        <Form.Control type='class_name' placeholder='Enter a class name (optional)'/>
      </Form.Group>
    </Form>
    <AddButton></AddButton>
 </>
 : 
  <>
    <h1>Component Settings</h1>
    <AddButton></AddButton>
  </>
)
  /* 
HTMLElements
  div
    parent component
    class
    id
  link
    parent
    source
  img
    parent component
    class
    id
  paragraph
    parent component
    font size
BootstrapElements
  button
    parent component
    variant
    size
    class
    id
  form
    method*
    parent component
    class
    id
    placeholder
    rows
    size
    type
    default value
    value
    title
    label 
  navbar
    method*
    parent component
    class
    id
    fixed
    sticky
    on toggle
    on select
    variant
    href
    background
    expand
    collapse
  list
    method*
    parent component  
    variant
    class name
    event key
    action

  */
};
export default connect(mapStateToProps, null)(ComSettings);