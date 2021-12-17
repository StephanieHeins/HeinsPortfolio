import { Navbar, Container, Nav } from 'react-bootstrap';
import '../styles/NavTabs.css';

export default function Footer() {
    return (
        <div id="footer">
              <Navbar bg="dark" variant="dark">
                <Container className="justify-content-center">
                    <Nav>
                        <Nav.Link>©2021</Nav.Link>
                        <Nav.Link href="https://github.com/StephanieHeins" id="github">Github</Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/stephanieheins/" id="linkedin">LinkedIn</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
)};