import { Badge, FormControl, Dropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoppingCart</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <FormControl className="m-auto" style={{ width: 600 }} placeholder="Search" />
          <Nav>
            <Dropdown align="end">
              <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ display: "flex", alignItems: "center" }}>
                <FaShoppingCart color="black" size={20} style={{ marginRight: 6 }} />
                <Badge>{10}</Badge>
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ minWidth: 370 }}>
                <span style={{ padding: 10 }}>Cart is Empty</span>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
