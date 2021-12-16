import { Navbar, Container, Nav } from 'react-bootstrap';
import '../styles/NavTabs.css';

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <div>
              <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand id="navbrand">Stephanie Heins</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link 
                                id="portfolio"
                                href="#portfolio"
                                onClick={() => handlePageChange('Portfolio')}
                                >Portfolio
                            </Nav.Link>
                            <Nav.Link 
                                id="resume"
                                href="#resume"
                                onClick={() => handlePageChange('Resume')}
                                >Resume
                            </Nav.Link>
                            <Nav.Link 
                            id="contact"
                            href="#contact"
                            onClick={() => handlePageChange('Contact')}
                            >Contact
                            </Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavTabs;