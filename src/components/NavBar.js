import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavBar(props){
    return(
        <Navbar bg="light" expand="lg">
        <Container>
        <Navbar.Brand><Link className='nav-link' to="/">Home </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="Catalogue" id="basic-nav-dropdown-1">
              <NavDropdown.Item as={Link} to="/category">Overview</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/category/loseweight/menus">Lose weight</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/buildmuscle/menus"> Build muscles</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/lazy/menus"> I hate cooking!</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Private Area" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/user/wishlist">Wishlist</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/user/shoppingcart">Shopping Cart</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/user/account"> My account</NavDropdown.Item>
            </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}
export default NavBar;