import AddButton from './AddButton.jsx';
import { connect } from 'react-redux';
import { Form, Dropdown, DropdownButton } from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
// import '../stylesheets/Dashboard.css'
const mapStateToProps = (state) => ({
  selectedComponent: state.main.selectedComponent
});


function ComSettings(props) {
  const [ methods, setMethods ] = useState('')

 

  switch (props.selectedComponent) { 
    case 'div': 
      return (
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
      )
    case 'link': 
      return (
      <>
      <h1>Link Component Settings</h1>
      <Form>
        <Form.Group>
          <Form.Label>Component ID</Form.Label>
          <Form.Control type='component_id'></Form.Control>
          <Form.Label>Parent Component</Form.Label>
          <Form.Select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </Form.Select>
          <Form.Label>Class Name</Form.Label>
          <Form.Control type='class_name' placeholder='Enter a class name (optional)'/>
          <Form.Label>Source Link</Form.Label>
          <Form.Control type='src_link'></Form.Control>
        </Form.Group>
      </Form>
      <AddButton></AddButton>
      </>
      )
    case 'image':
      return (
        <>
        <h1>Image Component Settings</h1>
        <Form>
          <Form.Group>
            <Form.Label>Component ID</Form.Label>
            <Form.Control type='component_id'></Form.Control>
            <Form.Label>Parent Component</Form.Label>
            <Form.Select>
              <option>1</option>
            </Form.Select>
            <Form.Label>Class Name</Form.Label>
            <Form.Control type='class_name' placeholder='Enter a class name (optional)'/>
            <Form.Label>Source Link</Form.Label>
            <Form.Control type='src_link'></Form.Control>
          </Form.Group>
        </Form>
        <AddButton></AddButton>
        </>
      )
    case 'paragraph':
      return (
        <>
        <h1>Paragraph Component Settings</h1>
        <Form>
          <Form.Group>
            <Form.Label>Parent Component</Form.Label>
            <Form.Select>
              <option>1</option>
            </Form.Select>
            <Form.Label>Font Size</Form.Label>
            <Form.Control type='font_size'></Form.Control>
          </Form.Group>
        </Form>
          <AddButton></AddButton>
        </>
      )  
    case 'button':
      return (
        <>
        <h1>Button Component Settings</h1>
        <Form>
          <Form.Group>
            <Form.Label>Parent Component</Form.Label>
            <Form.Select>
              <option>1</option>
            </Form.Select>
            <Form.Label>Font Size</Form.Label>
            <Form.Control type='font_size'></Form.Control>
          </Form.Group>
          </Form>
          <AddButton></AddButton>
        </>
      )
    case 'form':
      function renderFormGroup() {
        if (methods === 'form-group') {
          return (
          <>
          <h1>Form.Group Settings</h1> 
          </>
          )
          } else {
            return (
          <>
            <Form>
            <Form.Group>
              <Form.Label>Parent Component</Form.Label>
              <Form.Select>
                <option>1</option>
              </Form.Select>
              <Form.Label>Font Size</Form.Label>
              <Form.Control type='font_size'></Form.Control>
            </Form.Group>
          </Form>

          </>
            )
          }
      }
      return (
        <>
        <h1>Form Component Settings</h1>
          <DropdownButton id="dropdown-item-button" title="Dropdown button">
          <Dropdown.Item>Form</Dropdown.Item>
          <Dropdown.Item as="button" onClick={() => setMethods('form-group')}>Form.Group</Dropdown.Item>
          <Dropdown.Item as="button" onClick={() => setMethods('form-label')}>Form.Label</Dropdown.Item>
          <Dropdown.Item as="button" onClick={() => setMethods('form-control')}>Form.Control</Dropdown.Item>
          </DropdownButton>
          { renderFormGroup() }
        </>
      )
    default: 
      return (
        <>
        </>
      )
  }
}

{/* 

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
*/}

  

export default connect(mapStateToProps, null)(ComSettings);