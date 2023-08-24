import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbarr() {
  return (
    <div className="d-flex justify-content-center bg-body-tertiary">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="pt-0 pe-5">
            E-Online
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              <Nav.Link href="#home" className="px-4 d-flex align-items-center">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className="px-4 d-flex align-items-center">
                About
              </Nav.Link>
              <Nav.Link href="#link" className="px-4 d-flex align-items-center">
                Courses
              </Nav.Link>
              <Nav.Link href="#link" className="px-4 d-flex align-items-center">
                Blog
              </Nav.Link>
              <Nav.Link href="#link" className="px-4 d-flex align-items-center">
                Contact
              </Nav.Link>
              <Nav.Link href="#link" className="d-flex align-items-center ps-5">
                <button className="btn themeColor">Get Started</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbarr;
