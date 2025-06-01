import { Button, Col, Container, Form, Image, InputGroup, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo/logo.png";
import { HouseDoorFill, BookFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <Col>
        <Navbar expand="md" className="fixed-left justify-content-between" id="sidebar">
          <Container className="flex-column align-items-start">
            <Navbar.Brand href="#home" className="navbar-brand">
              <Image src={logo} alt="Spotify Logo" width={131} height={40} />
            </Navbar.Brand>
            <Navbar.Toggle
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            />
            <Navbar.Collapse id="navbarNavAltMarkup" className="navbar-collapse">
              <Nav className="d-flex flex-column">
                <Link to={"/"} className="nav-item nav-link d-flex align-items-center">
                  <HouseDoorFill className="me-2 icons" />
                  Home
                </Link>
                <Link to={"/favourites"} className="nav-link nav-item d-flex align-items-center ">
                  <BookFill className="me-2 icons" />
                  Your Favourites
                </Link>
                <InputGroup className="mt-3">
                  <Form.Control type="text" placeholder="Search" aria-label="Search" />
                  <Button variant="outline-secondary" id="button-addon2" className="btn-sm ">
                    GO
                  </Button>
                </InputGroup>
              </Nav>
            </Navbar.Collapse>
          </Container>
          <div className="nav-btn">
            <Button className="signup-btn">Sign Up</Button>
            <Button className="login-btn">Login</Button>
            <a href="#"> Cookie Policy</a> |<a href="#"> Privacy</a>
          </div>
        </Navbar>
      </Col>
    </>
  );
};

export default Sidebar;
