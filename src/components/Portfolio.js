import About from './About'
import '../styles/Portfolio.css'
import { fullstackprojects } from './FullStackProjects';
import { otherprojects } from './OtherProjects';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function Portfolio() {
    return (
        <div>
        <About />
        
        <Container>

        <Row className="text-center py-3">

            <Col>
            <h4 className="py-2">
                Full Stack
            </h4>
            {fullstackprojects.map(fullstackprojects => (
                <Card className="mt-2 mb-4" id="card1">
                    <Card.Body>
                        <Card.Title className="cardtitle">
                            {fullstackprojects.name}
                        </Card.Title>
                        <Card.Text>
                            {fullstackprojects.about}
                        </Card.Text>
                        <Card.Img src={fullstackprojects.image}></Card.Img>
                        <Button href={fullstackprojects.livelink} className="mx-2 mt-3" id="livelink1">
                            Live Link
                        </Button>
                        <Button href={fullstackprojects.repo} className="mx-2 mt-3" id="ghrepo1">
                            Github Repo
                        </Button>
                    </Card.Body>
                </Card>
            ))}
            </Col>

            <Col>
            <h4 className="py-2">
                Other Apps
            </h4>
            {otherprojects.map(otherprojects => (
                <Card className="mt-2 mb-4" id="card2">
                <Card.Body>
                    <Card.Title className="cardtitle">
                        {otherprojects.name}
                    </Card.Title>
                    <Card.Text>
                        {otherprojects.about}
                    </Card.Text>
                    <Card.Img src={otherprojects.image}></Card.Img>
                    <Button href={otherprojects.livelink} className="mx-2 mt-3" id="livelink2">
                        Live Link
                    </Button>
                    <Button href={otherprojects.repo} className="mx-2 mt-3" id="ghrepo2">
                        Github Repo
                    </Button>
                </Card.Body>
            </Card>
            ))}
            </Col>

        </Row>
    </Container>

     </div>
)};