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
          <AddButton component="button"></AddButton>
        </>
      )
    case 'form':
      function renderFormSettings() {
        if (methods === 'Form.Control') {
          return (
          <>
            <h2>Form.Control Component Settings</h2>
            <Form>
            <Form.Group>
              <Form.Label>Parent Component</Form.Label>
              <Form.Select>
                <option>1</option>
              </Form.Select>
              <Form.Label>Class Name</Form.Label>
              <Form.Control type='class_name' placeholder='class name (optional)'/>
              <Form.Label>Component ID</Form.Label>
              <Form.Control type='component_id' placeholder='Component identifier'></Form.Control>
              <Form.Label>Type</Form.Label>
              <Form.Control type='type' placeholder='Type'/>
              <Form.Label>Value</Form.Label>
              <Form.Control type='value' placeholder='Value'/>
              <Form.Label>Placeholder Text</Form.Label>
              <Form.Control type='placeholder' placeholder='Placeholder'/>
              <Form.Label>Size</Form.Label>
              <Form.Control type='size' placeholder='size of form'/>
              <Form.Check type="checkbox" label='Required'/>
            </Form.Group>
            </Form>
          <AddButton></AddButton>
          </>
          )
        } else if (methods === 'Form.Group') {
          return (
            <>
              <h2>Form.Group Component Settings</h2>
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
                </Form.Group>
              </Form>
              <AddButton></AddButton>
            </>
              )
          } else if (methods === 'Form.Label') {
            return (
              <>
                <h2>Form.Label Component Settings</h2>
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
                  </Form.Group>
                </Form>
                <AddButton></AddButton>
              </>
            );
          } else if (methods === 'Form') {
              return (
            <>
              <h2>Form Component Settings</h2>
              <Form>
                <Form.Group>
                  <Form.Label>Parent Component</Form.Label>
                  <Form.Select>
                    <option>1</option>
                  </Form.Select>
                </Form.Group>
              </Form>
              <AddButton component="form"></AddButton>
            </>
            )
          }
        } return (
        <>
          <DropdownButton id="dropdown-item-button" title='Select'>
            <Dropdown.Item as="button" onClick={() => setMethods('Form')}>Form</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => setMethods('Form.Control')}>Form.Control</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => setMethods('Form.Group')}>Form.Group</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => setMethods('Form.Label')}>Form.Label</Dropdown.Item>
          </DropdownButton>
          { renderFormSettings() }
        </>
      )
    
      case 'navbar':
        function renderNavbarSettings() {
          if (methods === 'Navbar') {
            return (
              <>
                <h2>Navbar Component Settings</h2>
                <Form>
                  <Form.Group>
                    <Form.Label>Parent Component</Form.Label>
                    <Form.Select>
                      <option>1</option>
                    </Form.Select>
                    <Form.Label>Class Name</Form.Label>
                    <Form.Control type='class_name' placeholder='class name (optional)'/>
                    <Form.Label>Component ID</Form.Label>
                    <Form.Control type='component_id' placeholder='Component identifier'></Form.Control>
                    <Form.Label>Fixed</Form.Label>
                    <Form.Select>
                      <option>top</option>
                      <option>bottom</option>
                    </Form.Select>
                    <Form.Check type='sticky' label='Sticky'/>
                    <Form.Label>Variant</Form.Label>
                    <Form.Select>
                      <option>light</option>
                      <option>dark</option>
                    </Form.Select>
                    <Form.Label>href</Form.Label>
                    <Form.Control type=''placeholder='#home'/>
                    <Form.Label>Background Color</Form.Label>
                    <Form.Select>
                      <option>light</option>
                      <option>dark</option>
                    </Form.Select>
                    <Form.Label>Expand</Form.Label>
                    <Form.Select>
                      <option>sm</option>
                      <option>md</option> 
                      <option>lg</option> 
                      <option>xl</option> 
                      <option>xxl</option>  
                    </Form.Select>
                  </Form.Group>
                </Form>
                <AddButton></AddButton>
              </>
            )
          } else if (methods === 'Navbar.Brand') {
            return (
              <>
                <h2>Navbar.Brand Component Settings</h2>
                <Form>
                  <Form.Group>
                    <Form.Label>Parent Component</Form.Label>
                    <Form.Select>
                      <option>1</option>
                    </Form.Select>
                    <Form.Label>href</Form.Label>
                    <Form.Control type='href' placeholder='#home'/>
                    <Form.Label>Navbar Brand Text</Form.Label>
                    <Form.Control type='brand_text' placeholder='brand link'></Form.Control>
                  </Form.Group>
              </Form>
              <AddButton></AddButton>
              </>
            )
          } else if (methods === 'Navbar.Toggle') {
            return (
              <>
                <h2>Navbar.Toggle Component Settings</h2>
                <Form>
                  <Form.Group>
                    <Form.Label>Parent Component</Form.Label>
                    <Form.Select>
                      <option>1</option>
                    </Form.Select>
                    <Form.Label>Aria Controls</Form.Label>
                    <Form.Select>
                      <option>basic</option>
                      <option>responsive</option>
                    </Form.Select>
                  </Form.Group>
              </Form>
              <AddButton></AddButton>
              </>
            )
          } else if (methods === 'Navbar.Collapse') {
            return (
              <>
                <h2>Navbar.Collapse Component Settings</h2>
                <Form>
                  <Form.Group>
                    <Form.Label>Parent Component</Form.Label>
                    <Form.Select>
                      <option>1</option>
                    </Form.Select>
                    <Form.Label>Class Name</Form.Label>
                    <Form.Control type='class_name' placeholder='class name (optional)'></Form.Control>
                  </Form.Group>
              </Form>
              <AddButton></AddButton>
              </>
            )
          }
        } 
        return (
          <>
            <DropdownButton id="dropdown-item-button" title='Select'>
              <Dropdown.Item as="button" onClick={() => setMethods('Navbar')}>Navbar</Dropdown.Item>
              <Dropdown.Item as="button" onClick={() => setMethods('Navbar.Brand')}>Navbar.Brand</Dropdown.Item>
              <Dropdown.Item as="button" onClick={() => setMethods('Navbar.Toggle')}>Navbar.Toggle</Dropdown.Item>
              <Dropdown.Item as="button" onClick={() => setMethods('Navbar.Collapse')}>Navbar.Collapse</Dropdown.Item>
            </DropdownButton>
            { renderNavbarSettings() }
          </>
        )
      case 'nav': 
        function renderNavSettings() {
          if (methods === 'Nav') {
            return (
              <>
                <h2>Nav Component Settings</h2>
                <Form>
                  <Form.Group>
                    <Form.Label>Parent Component</Form.Label>
                    <Form.Select>
                      <option>1</option>
                    </Form.Select>
                    <Form.Label>Class Name</Form.Label>
                    <Form.Control type='class_name' placeholder='class name (optional)'></Form.Control>
                    <Form.Label>Nav Text</Form.Label>
                    <Form.Control type='nav_text' placeholder='nav text'></Form.Control>
                  </Form.Group>
              </Form>
              <AddButton></AddButton>
            </>
            )
          } else if (methods === 'Nav.Link') {
            return (
             <>
                <h2>Navbar.Collapse Component Settings</h2>
                <Form>
                  <Form.Group>
                    <Form.Label>Parent Component</Form.Label>
                    <Form.Select>
                      <option>1</option>
                    </Form.Select>
                    <Form.Label>Class Name</Form.Label>
                    <Form.Control type='class_name' placeholder='class name (optional)'></Form.Control>
                    <Form.Label>href</Form.Label>
                    <Form.Control type='href' placeholder='#home'/>
                  </Form.Group>
              </Form>
              <AddButton></AddButton>
            </>
            )
          } else if (methods === 'Nav.DropDown') {
            return (
              <>
                <h2>Navbar.Dropdown Component Settings</h2>
                <Form>
                  <Form.Group>
                    <Form.Label>Parent Component</Form.Label>
                    <Form.Select>
                      <option>1</option>
                    </Form.Select>
                    <Form.Label>Class Name</Form.Label>
                    <Form.Control type='class_name' placeholder='class name (optional)'></Form.Control>
                    <Form.Label>title</Form.Label>
                    <Form.Control type='title' placeholder='Action'/>
                  </Form.Group>
              </Form>
              <AddButton></AddButton>
            </>
            )
          } else if (methods === 'Nav.DropDownItem') {
            return (
              <>
                <h2>Navbar.DropdownItem Component Settings</h2>
                <Form>
                  <Form.Group>
                    <Form.Label>Parent Component</Form.Label>
                    <Form.Select>
                      <option>1</option>
                    </Form.Select>
                    <Form.Label>Class Name</Form.Label>
                    <Form.Control type='class_name' placeholder='class name (optional)'></Form.Control>
                    <Form.Label>href</Form.Label>

                  </Form.Group>
              </Form>
              <AddButton></AddButton>
            </>
            )
          }
        } 
        return (
          <>
            <DropdownButton id="dropdown-item-button" title='Select'>
              <Dropdown.Item as="button" onClick={() => setMethods('Nav')}>Nav</Dropdown.Item>
              <Dropdown.Item as="button" onClick={() => setMethods('Nav.Link')}>Nav.Link</Dropdown.Item>
              <Dropdown.Item as="button" onClick={() => setMethods('Nav.DropDown')}>Navbar.Toggle</Dropdown.Item>
              <Dropdown.Item as="button" onClick={() => setMethods('Nav.DropDownItem')}>Navbar.Toggle</Dropdown.Item>
            </DropdownButton>
            { renderNavSettings() }
          </>
        )
      case 'list':
        function renderListSettings() {
          if (methods === 'List') {
            return (
              <>
                <h2>List Component Settings</h2>
                <Form>
                  <Form.Group>
                    <Form.Label>Parent Component</Form.Label>
                    <Form.Select>
                      <option>1</option>
                    </Form.Select>
                    <Form.Label>Class Name</Form.Label>
                    <Form.Control type='class_name' placeholder='class name (optional)'></Form.Control>
                    <Form.Label>Nav Text</Form.Label>
                    <Form.Control type='nav_text' placeholder='nav text'></Form.Control>
                  </Form.Group>
              </Form>
              <AddButton></AddButton>
            </>
            )
          } else if (methods === 'List.Group') {
            return (
              <>
                <h2>List.Group Component Settings</h2>
                <Form>
                  <Form.Group>
                    <Form.Label>Parent Component</Form.Label>
                      <Form.Select>
                        <option>1</option>
                      </Form.Select>
                      <Form.Label>Class Name</Form.Label>
                      <Form.Control type='class_name' placeholder='class name (optional)'></Form.Control>
                  </Form.Group>
                </Form>
              </>
            )
          }
        }   
          return (
            <>
              <DropdownButton id="dropdown-item-button" title='Select'>
                <Dropdown.Item as="button" onClick={() => setMethods('List')}>List</Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => setMethods('List.Group')}>List.Group</Dropdown.Item>

              </DropdownButton>
              { renderListSettings() }
            </>
          )
        default: 
        return (
        <>
        </>
      )
      
  }
}

  
export default connect(mapStateToProps, null)(ComSettings);
