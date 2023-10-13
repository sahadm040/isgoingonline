import { Badge } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector } from "react-redux";

function NavBar() {
  const count = useSelector((state) => state.post.value);
  return (
    <div style={{ position: "sticky", top: "0", zIndex: "10" }}>
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="/">
              <div className="mx-3 p-1 d-flex flex-column align-items-center justify-content-between">
                <div className="icon">
                  <h5 className="mt-2">
                    SH
                    <span>opne</span>ST
                  </h5>
                </div>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <div className="my-2 p-3 d-flex flex-column align-items-center justify-content-between">
                    <div className="icon ">
                      <h5>
                        SH
                        <span>opne</span>ST
                      </h5>
                    </div>
                  </div>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-around flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <NavDropdown
                    title="user"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">
                      My Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action3">Orders</NavDropdown.Item>
                    <NavDropdown.Item href="#action3">
                      Wish List
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/cart">
                      <div className="d-flex align-items-center">Cart</div>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/cart">
                    <div className="d-flex align-items-center">
                      Cart
                      <div className="position-relative">
                        <i
                          className="fa fa-shopping-cart p-2"
                          aria-hidden="true"
                        ></i>
                        <Badge
                          size="sm"
                          pill
                          bg="danger"
                          className="small-text position-absolute top-0 start-100 translate-middle"
                        >
                          {count}
                        </Badge>
                      </div>
                    </div>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default NavBar;
