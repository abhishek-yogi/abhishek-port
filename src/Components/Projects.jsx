import React from 'react';
import { Col, Row, Container, Nav, Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import projImg1 from '../Images/project-3.jpg';
import projImg2 from '../Images/project-2.jpg';
import projImg3 from '../Images/project-4.png';
import projImg4 from '../Images/project-5.png';
import projImg5 from '../Images/project-6.png';

const Projects = () => {

    const projects = [
        {
            title: "ABx Todo",
            imgUrl: projImg1,
        },
        {
            title: "Inventory Control System",
            imgUrl: projImg2,
        },
        {
            title: "ABx Cart",
            imgUrl: projImg3,
        },
        {
            title: "ABx Calculator",
            imgUrl: projImg4,
        },
        {
            title: "ABx Digital Clock",
            imgUrl: projImg5,
        },
    ]

    return (
        <>
            <section className="project" id='projects'>
                <Container>
                    <Row>
                        <Col>
                            <h2>Projects</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eaque quo dicta repellendus iusto. Eius explicabo quidem fugiat blanditiis soluta cupiditate quis alias odio iusto inventore, minus, modi, odit ea.</p>
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className='nav-pills mb-5' id='pills-tab'>
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Tab One</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            {
                                                projects.map((project, index) => {
                                                    return (
                                                        <ProjectCard key={index} {...project} />
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">Success is Loading...</Tab.Pane>
                                    <Tab.Pane eventKey="third">Success is Loading...</Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Projects;