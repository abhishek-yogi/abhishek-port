import React from 'react';
import { Col } from 'react-bootstrap';

const ProjectCard = ({title, imgUrl}) => {
    return (
        <>
            <Col className="d-flex flex-wrap justify-content-center">
                <div className="proj-imgbx">
                    <img src={imgUrl} alt="" />
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                    </div>
                </div>
            </Col>
        </>
    );
}

export default ProjectCard;