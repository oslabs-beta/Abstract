import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';
import Canvas from './Canvas.jsx';
import Preview from './Preview.jsx';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { Form, Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const mapStateToProps = (state) => ({
  bodyView: state.main.bodyView,
  renderedComponents: state.main.renderedComponents,
});

const mapDispatchToProps = (dispatch) => ({
  selectComponent: (component) => dispatch(actions.selectComponent(component))
});

function BodyContainer(props) {

  const scope = { Form, Button, Navbar, Container, Nav, NavDropdown };

  const componentCode = `
  `;

  const renderCode = `
  render(
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
  `;

  return (
    <>
      {props.bodyView}
      <LiveProvider code={ componentCode + renderCode } scope={scope} noInline={true}>
        { props.bodyView === 'Code Preview' ? <Preview><LiveEditor /></Preview> : null }
        <LiveError />
        { props.bodyView === 'Canvas' ? <Canvas><LivePreview /></Canvas> : null }
      </LiveProvider>
    </>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(BodyContainer);