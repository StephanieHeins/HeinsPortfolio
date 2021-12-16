import { Navbar, Container, Nav } from 'react-bootstrap';
import '../styles/NavTabs.css';

function NavTabs() {
    return (
        <div>
              <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand id="navbrand">Stephanie Heins</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link id="portfolio">Portfolio</Nav.Link>
                            <Nav.Link id="resume">Resume</Nav.Link>
                            <Nav.Link id="contact">Contact</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavTabs;