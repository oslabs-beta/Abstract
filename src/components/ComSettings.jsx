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
              <Form.Label>Parent Component</Form.Label>
              <Form.Select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </Form.Select>
              <Form.Label>Component ID</Form.Label>
              <Form.Control type='component_name'></Form.Control>
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
            <Form.Label>Parent Component</Form.Label>
            <Form.Select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Select>
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
              <Form.Label>Parent Component</Form.Label>
              <Form.Select>
                <option>1</option>
              </Form.Select>
              <Form.Label>Class Name</Form.Label>
              <Form.Control type='class_name' placeholder='Enter a class name (optional)'/>
              <Form.Label>Component ID</Form.Label>
              <Form.Control type='component_id'></Form.Control>
              <Form.Label>Source Link</Form.Label>
              <Form.Control type='src_link'></Form.Control>
              <Form.Label>Alt Text</Form.Label>
              <Form.Control type='alt_text'></Form.Control>
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
              <Form.Label>Class Name</Form.Label>
              <Form.Control type='class_name' placeholder='Enter a class name (optional)'/>
              <Form.Label>Component ID</Form.Label>
              <Form.Control type='component_id'></Form.Control>
              <Form.Label>Font Size</Form.Label>
              <Form.Control type='font_size'></Form.Control>
            </Form.Group>
            </Form>
          <AddButton></AddButton>
        </>
      )
    case 'form':
      function renderFormSettings() {
        if (methods === 'form') {
          return (
          <>
            <h1>Form Component Settings</h1> 
            <Form>
            <Form.Group>
              <Form.Label>Parent Component</Form.Label>
              <Form.Select>
                <option>1</option>
              </Form.Select>
              <Form.Label>Class Name</Form.Label>
              <Form.Control type='class_name' placeholder='Enter a class name (optional)'/>
              <Form.Label>Component ID</Form.Label>
              <Form.Control type='component_id'></Form.Control>
              <Form.Label>Font Size</Form.Label>
              <Form.Control type='font_size'></Form.Control>
            </Form.Group>
            </Form>
          <AddButton></AddButton>
          </>
          )
        } else if (methods === 'form-group') {
          return (
            <>
              <h1>Form.Group Component Settings</h1>
              <Form>
                <Form.Group>
                <Form.Label>Parent Component</Form.Label>
                <Form.Select>
                  <option>1</option>
                </Form.Select>
                <Form.Label>Class Name</Form.Label>
                <Form.Control type='class_name' placeholder='(optional)'/>
                <Form.Label>Component ID</Form.Label>
                <Form.Control type='component_id' placeholder='Enter an ID'/>
                <Form.Label>Font Size</Form.Label>
                <Form.Control type='font_size' placeholder='Enter a number'/>
                <Form.Label>Placeholder Text</Form.Label>
                <Form.Control type='placeholder' placeholder='Placeholder'/>
                <Form.Label>Rows</Form.Label>
                <Form.Control type='rows' placeholder='# of Rows'/>
                <Form.Label>Size</Form.Label>
                <Form.Control type='size' placeholder='size of form'/>
                <Form.Label>Type</Form.Label>
                <Form.Control type='type' placeholder='Type'/>
                <Form.Label>Default Value</Form.Label>
                <Form.Control type='default_value' placeholder='Default Value'/>
                <Form.Label>Value</Form.Label>
                <Form.Control type='value' placeholder='Value'/>
                <Form.Label>Title</Form.Label>
                <Form.Control type='title' placeholder='Title'/>
                <Form.Label>Label</Form.Label>
                <Form.Control type='label' placeholder='Label'/>
                </Form.Group>
              </Form>
              <AddButton></AddButton>
            </>
              )
          } else if (methods === 'form-label') {
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
                <AddButton></AddButton>
              </>
            );
          } else return (
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
              <AddButton></AddButton>
            </>
            )
        } return (
        <>
          <h1>Form Component Settings</h1>
            <DropdownButton id="dropdown-item-button" title="Form">
            <Dropdown.Item as="button" onClick={() => setMethods('form')}>Form</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => setMethods('form-group')}>Form.Group</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => setMethods('form-label')}>Form.Label</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => setMethods('form-control')}>Form.Control</Dropdown.Item>
            </DropdownButton>
            { renderFormSettings() }
        </>
      )
      default: 
      return (
        <>
        </>
      )
  }
}

{/* BootstrapElements
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

