import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import html_1 from '../Images/html.png';
import css_1 from '../Images/css.png';
import react_1 from '../Images/react.png';
import javascript_1 from '../Images/Javascript.png';
import adobe_xd from '../Images/Adobe_XD.png';
import bootstrap_1 from '../Images/bootstrap.png';
import git_1 from '../Images/Git.png';
import jquery_1 from '../Images/jquery.png';
import photoshop_1 from '../Images/photoshop.png';
import php_1 from '../Images/php.png';
import seo_1 from '../Images/seo.png';

const Skills = () => {

    const responsive = {
        superLargerDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    
    return (
        <>
            <section className='skill' id='skills'>
                <Container>
                    <Row>
                        <Col>
                            <div className="skill-bx">
                                <h2>Skills</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt beatae accusamus ipsum nihil, ad laudantium eveniet amet praesentium, modi nostrum in? Vitae error sint officia sequi, iure quod eligendi consequatur.</p>
                                <Carousel className="skill-slider" responsive={responsive} infinite={true}>
                                    <div className="item">
                                        <img src={html_1} alt="Image" />
                                        <h5>HTML 5</h5>
                                    </div>
                                    <div className="item">
                                        <img src={css_1} alt="Image" />
                                        <h5>CSS</h5>
                                    </div>
                                    <div className="item">
                                        <img src={react_1} alt="Image" />
                                        <h5>React JS</h5>
                                    </div>
                                    <div className="item">
                                        <img src={javascript_1} alt="Image" />
                                        <h5>JavaScript</h5>
                                    </div>
                                    <div className="item">
                                        <img src={jquery_1} alt="Image" />
                                        <h5>jQuery</h5>
                                    </div>
                                    <div className="item">
                                        <img src={bootstrap_1} alt="Image" />
                                        <h5>Bootstrap</h5>
                                    </div>
                                    <div className="item">
                                        <img src={git_1} alt="Image" />
                                        <h5>Git & GitHub</h5>
                                    </div>
                                    <div className="item">
                                        <img src={photoshop_1} alt="Image" />
                                        <h5>PhotoShop</h5>
                                    </div>
                                    <div className="item">
                                        <img src={adobe_xd} alt="Image" />
                                        <h5>Adobe Xd</h5>
                                    </div>
                                    <div className="item">
                                        <img src={php_1} alt="Image" />
                                        <h5>PHP & MySQL</h5>
                                    </div>
                                    <div className="item">
                                        <img src={seo_1} alt="Image" />
                                        <h5>SEO</h5>
                                    </div>
                                </Carousel>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Skills;