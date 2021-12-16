import About from './About'
import '../styles/Portfolio.css'
import { fullstackprojects } from './FullStackProjects';
import { otherprojects } from './OtherProjects';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Portfolio() {
    return (
        <div>
        <About />
        
        <Container>

        <Row className="text-center align-items-center py-3">

            <Col>
            <h4 className="py-2">
                Full Stack
            </h4>
            {fullstackprojects.map(fullstackprojects => (
                <Card>
                    <Card.Body>
                        <Card.Title>
                            {fullstackprojects.name}
                        </Card.Title>
                        <Card.Text>
                            About
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
            </Col>

            <Col>
            <h4 className="py-2">
                Other Apps
            </h4>
            {otherprojects.map(otherprojects => (
                <Card>
                    <Card.Body>
                        <Card.Title>
                            {otherprojects.name}
                        </Card.Title>
                        <Card.Text>
                            About
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
            </Col>

        </Row>
    </Container>

     </div>
)};