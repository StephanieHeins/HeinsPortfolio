import Headshot1 from '../images/Headshot1.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/About.css'

export default function About() {
  return (
      <div>
          <Container className="py-4" id="container">
            <Row className="text-center align-items-center">
                <Col>
                <img 
                className="img-responsive rounded center-block d-block mx-auto rounded-circle"
                style={{width: 280}}
                src={Headshot1}
                alt="Headshot"
                />
                </Col>
                <Col>
                <h3 className="mb-3">
                About Me
                </h3>
                <p id="about"> 
                With Seattle being both one of the biggest art and tech capitols, it's no question
                how I ended up in software development.
                
                Since starting out in the tech industry in 2016, I’ve pursued an education in 
                Cybersecurity and Digital Forensics while working in IT support for business 
                environments. Having recently graduated an accelerated Full Stack Web Development 
                program through the University of Washington, I’ve been able to find the ability 
                to combine my passion for art/design and my background in technology — I’m driven 
                to continue expanding my knowledge and ideas through the field of development.
                </p>
                </Col>
            </Row>
            </Container>
      </div>
  )};