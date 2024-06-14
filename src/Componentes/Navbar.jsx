import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link } from "react-router-dom"
import '../Estilos/navbar.css';


const NavbarExample = () => {
    return(
        <>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/" ><img src="logo.png" className="logo-tamaño" alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/" >Inicio</Nav.Link>
                    <Nav.Link as={Link} to="/ofertas" >Ofertas</Nav.Link>
                    <Nav.Link as={Link} to="/pedidos" >Pedidos</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link as={Link} to="/registrate" >Regístrate</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <section>
            <Outlet></Outlet>
        </section>
        </>
    );
}
export default NavbarExample