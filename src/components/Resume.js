import HeinsDevResume from '../images/HeinsDevResume.pdf';
import { Container, Col, Row } from 'react-bootstrap';
import '../styles/Resume.css';

export default function Resume() {
    return (
        <div>
            
            <Container>
                <Row>

                    <Col className="col-sm"></Col>

                    <Col className="col-8">
                        <div className="resumetitle my-3">
                            Summary
                        </div>
                            <div className="resumecontent">
                                I started out in the technology field in 2016 selling computers at a Microsoft store. 
                                Since then, I’ve continued my education through Cybersecurity and Digital Forensics while 
                                working in IT support in business environments. Having recently taken an accelerated Full 
                                Stack Web Development program through the University of Washington, I’ve been able to 
                                combine my passion for art/design and background in computers — I hope to continue to expand 
                                my knowledge and ideas through the field of web development. 
                            </div>
                        <div className="resumetitle my-3">
                            Education
                        </div>
                            <div className="resumecontent">
                                <div className="my-2">
                                Full Stack Web Development 
                                | University of Washington 2021
                                </div>
                                <div className="my-2">
                                Information Security 
                                | Edmonds College 2020
                                </div>
                                <div className="my-2">
                                Cybersecurity Forensic Analyst 
                                | Cybersecurity Institute 2017
                                </div>
                            </div>
                        <div className="resumetitle my-3">
                            Skills
                        </div>
                        <Row className="resumecontent">
                            <Col className="col-sm">
                                <div>MERN Stack</div>
                                <div>MongoDB</div>
                                <div>Express.js</div>
                                <div>React.js</div>
                                <div>Node.js</div>
                            </Col>
                            <Col className="col-sm">
                                <div>Dev</div>
                                <div>APIs</div>
                                <div>CSS/Frameworks</div>
                                <div>Javascript</div>
                                <div>Handlebars.js</div>
                                <div>MySQL</div>
                                <div>Git</div>
                            </Col>
                            <Col className="col-sm">
                                <div>Tools</div>
                                <div>VS Code</div>
                                <div>MySQL Workbench</div>
                                <div>Insomnia</div>
                                <div>Robo3T</div>
                                <div>Heroku</div>
                            </Col>
                        </Row>
                        <div className="resumetitle my-3">
                            Projects
                        </div>
                            <div className="resumecontent">
                                See Portfolio
                            </div>
                        <div className="resumetitle my-3">
                            Experience
                        </div>
                            <div className="resumecontent my-2">
                            Digital Forensics Lab Manager
                            | Edmonds College 2017-Present
                            </div> 
                            <div className="resumecontent my-2">
                            Technical Specialist 
                            | Apple Nov 2019 - Jan 2021
                            </div>  
                            <div className="resumecontent my-2">
                            IT Support 
                            | Blueprint Technologies Dec 2017 - July 2019
                            </div>  
                    </Col>

                    <Col className="col-sm"></Col>

                </Row>
            </Container>

            <Col>
                <Row className="justify-content-center">
                    <a
                        href={HeinsDevResume} 
                        className="btn my-4"
                        id="downloadbtn"
                        style={{width:200}}
                        download
                        >Download PDF
                    </a>
                </Row>
            </Col>

        </div>
)}