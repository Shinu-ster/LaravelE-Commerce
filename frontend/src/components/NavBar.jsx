import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Link to="/" className="Heading">
            <h3>Home</h3>
          </Link>
          <Nav className="me-auto navbar_wrapper">
            <Link to="/add">
              <div>Add Product</div>
            </Link>
            <Link to="/update">
              <div className="nav-bar">Update</div>
            </Link>
            <Link to="/login">
              <div className="nav-bar">Login</div>
            </Link>
            <Link to="/register">
              <div className="nav-bar">Register</div>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
