import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/add">
              <div>Add Product</div>
            </Link>
            <Link to="/update">
              <div className="nav-bar">Update</div>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
