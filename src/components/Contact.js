import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Contact.css'

export default function Contact() {
    return (

        <div>
            <Container>
                <Row>
                    <Col className="col-sm"></Col>
                    <Col className="col-8 text-center">
                        <div className="title mb-3 mt-5">
                        Please feel free to contact me:
                        </div>
                        <div className="content my-3">
                            StephHeinsDev@gmail.com
                        </div>
                        <div className="content my-3">
                            206.914.2621
                        </div>
                        <div className="content my-3">
                        <a href="https://www.linkedin.com/in/stephanieheins/">
                            LinkedIn
                        </a>
                        </div>
                        <div className="content mt-3 mb-5">
                        <a href="https://github.com/StephanieHeins">
                            Github
                        </a>
                        </div>
                    </Col>
                    <Col className="col-sm"></Col>
                </Row>
            </Container>
        </div>

)}