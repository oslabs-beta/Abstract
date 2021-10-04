import AddButton from './AddButton.jsx';
import { connect } from 'react-redux';
import { Form, Dropdown, DropdownButton } from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const mapStateToProps = (state) => ({
  selectedComponent: state.main.selectedComponent
});


function ComSettings(props) {
  const [ methods, setMethods ] = useState('')

  switch (props.selectedComponent) { 
    case 'div': 
      return (
        <div id="conditionalForm">
          <h1>Div</h1>
          <Form>
            <Form.Group>
              <Form.Label>Parent Component</Form.Label>
              <Form.Select>
                <option>1</option>
                <option>2</option>
              </Form.Select>
              <Form.Label>Component ID</Form.Label>
              <Form.Control type='component_name' placeholder='Enter Component ID'></Form.Control>
              <Form.Label>Class Name</Form.Label>
              <Form.Control type='class_name' placeholder='Class name (optional)'/>
            </Form.Group>
          </Form>
          <AddButton></AddButton>
      </div>
      )
    case 'link': 
      return (
      <div id="conditionalForm">
        <h1>Link</h1>
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
      </div>
      )
    case 'image':
      return (
        <div id="conditionalForm">
          <h1>Image</h1>
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
        </div>
      )
    case 'paragraph':
      return (
        <div id="conditionalForm">
          <h1>Paragraph</h1>
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
        </div>
      )  
    case 'button':
      return (
        <div id="conditionalForm">
          <h1>Button</h1>
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
        </div>
      )
    case 'form':
      function renderFormSettings() {
        // remove X in if statement methods when functionality works
        if (methods === 'XForm.Control') {
          return (
          <div id="conditionalForm">
            <h2 id='h2'>Form.Control</h2>
            <Form>
            <Form.Group>
              <Form.Label>Parent Component</Form.Label>
              <Form.Select>
                <option>1</option>
              </Form.Select>
              <Form.Label>Class Name</Form.Label>
              <Form.Control type='class_name' placeholder='class name (optional)'/>
              <Form.Label>Component ID</Form.Label>
              <Form.Control type='component_id' placeholder='Component ID'></Form.Control>
              <Form.Label>Type</Form.Label>
              <Form.Control type='type' placeholder='Type'/>
              <Form.Label>Value</Form.Label>
              <Form.Control type='value' placeholder='Value'/>
              <Form.Label>Placeholder Text</Form.Label>
              <Form.Control type='placeholder' placeholder='Placeholder Text'/>
              <Form.Label>Size</Form.Label>
              <Form.Control type='size' placeholder='Size of form'/>
              <Form.Check type="checkbox" label='Required'/>
            </Form.Group>
            </Form>
          <AddButton></AddButton>
          </div>
          )
        // remove X in if statement methods when functionality works
        } else if (methods === 'XForm.Group') {
          return (
            <div id="conditionalForm">
              <h2 id='h2'>Form.Group</h2>
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
            </div>
              )
        // remove X in if statement methods when functionality works
        } else if (methods === 'XForm.Label') {
            return (
              <div id="conditionalForm">
                <h2 id='h2'>Form.Label</h2>
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
              </div>
            );
          } else if (methods === 'Form') {
              return (
            <div id="conditionalForm">
              <h2 id='h2'>Form Component</h2>
              <Form>
                <Form.Group>
                  <Form.Label>Parent Component</Form.Label>
                  <Form.Select>
                    <option>1</option>
                  </Form.Select>
                </Form.Group>
              </Form>
              <AddButton component="form"></AddButton>
            </div>
            )
          }
        } return (
        <div id="conditionalForm">
          <DropdownButton id="dropdown-item-button" title='Select'>
            <Dropdown.Item as="button" onClick={() => setMethods('Form')}>Form</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => setMethods('Form.Control')}>Form.Control</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => setMethods('Form.Group')}>Form.Group</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => setMethods('Form.Label')}>Form.Label</Dropdown.Item>
          </DropdownButton>
          { renderFormSettings() }
        </div>
      )
    
      case 'navbar':
        function renderNavbarSettings() {
          if (methods === 'Navbar') {
            return (
              <div id="conditionalForm">
                <h2 id='h2'>Navbar Component</h2>
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
              </div>
            )
          } else if (methods === 'Navbar.Brand') {
            return (
              <div id="conditionalForm">
                <h2 id='h2'>Navbar.Brand </h2>
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
              </div>
            )
          } else if (methods === 'Navbar.Toggle') {
            return (
              <div id="conditionalForm">
                <h2 id='h2'>Navbar.Toggle</h2>
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
              </div>
            )
          } else if (methods === 'Navbar.Collapse') {
            return (
              <div id="conditionalForm">
                <h2 id='h2'>Navbar.Collapse </h2>
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
              </div>
            )
          }
        } 
        return (
          <div id="conditionalForm">
            <DropdownButton id="dropdown-item-button" title='Select'>
              <Dropdown.Item as="button" onClick={() => setMethods('Navbar')}>Navbar</Dropdown.Item>
              <Dropdown.Item as="button" onClick={() => setMethods('Navbar.Brand')}>Navbar.Brand</Dropdown.Item>
              <Dropdown.Item as="button" onClick={() => setMethods('Navbar.Toggle')}>Navbar.Toggle</Dropdown.Item>
              <Dropdown.Item as="button" onClick={() => setMethods('Navbar.Collapse')}>Navbar.Collapse</Dropdown.Item>
            </DropdownButton>
            { renderNavbarSettings() }
          </div>
        )
      case 'nav': 
        function renderNavSettings() {
          if (methods === 'Nav') {
            return (
              <div id="conditionalForm">
                <h2 id='h2'>Nav Component</h2>
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
            </div>
            )
          } else if (methods === 'Nav.Link') {
            return (
             <div id="conditionalForm">
                <h2 id='h2'>Navbar.Collapse</h2>
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
            </div>
            )
          } else if (methods === 'Nav.DropDown') {
            return (
              <div id="conditionalForm">
                <h2 id='h2'>Navbar.Dropdown </h2>
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
            </div>
            )
          } else if (methods === 'Nav.DropDownItem') {
            return (
              <div id="conditionalForm">
                <h2 id='h2'>Navbar.DropdownItem </h2>
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
            </div>
            )
          }
        } 
        return (
          <div id="conditionalForm">
            <DropdownButton id="dropdown-item-button" title='Select'>
              <Dropdown.Item as="button" onClick={() => setMethods('Nav')}>Nav</Dropdown.Item>
              <Dropdown.Item as="button" onClick={() => setMethods('Nav.Link')}>Nav.Link</Dropdown.Item>
              <Dropdown.Item as="button" onClick={() => setMethods('Nav.DropDown')}>Navbar.DropDown</Dropdown.Item>
              <Dropdown.Item as="button" onClick={() => setMethods('Nav.DropDownItem')}>Navbar.DropDownItem</Dropdown.Item>
            </DropdownButton>
            { renderNavSettings() }
          </div>
        )
      case 'list':
        function renderListSettings() {
          if (methods === 'List') {
            return (
              <div id="conditionalForm">
                <h2 id='h2'>List Component</h2>
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
            </div>
            )
          } else if (methods === 'List.Group') {
            return (
              <div id="conditionalForm">
                <h2 id='h2'>List.Group </h2>
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
              </div>
            )
          }
        }   
          return (
            <div id="conditionalForm">
              <DropdownButton id="dropdown-item-button" title='Select'>
                <Dropdown.Item as="button" onClick={() => setMethods('List')}>List</Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => setMethods('List.Group')}>List.Group</Dropdown.Item>

              </DropdownButton>
              { renderListSettings() }
            </div>
          )
        default: 
        return (
        <div id="conditionalForm">
        </div>
      )
      
  }
}

  
export default connect(mapStateToProps, null)(ComSettings);
