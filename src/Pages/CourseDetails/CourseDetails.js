import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './CourseDetails.css'

const CourseDetails = () => {
    const products =useLoaderData();
    const {name, title, details, image_url, total_class, duration, total_project} = products;
    console.log(products)
    return (
        <div className='mt-5 mb-5'>
            <Container>
                <Row>
                    <Col lg="5">
                        <h2 className='title'>{title}</h2>
                        <h3>{name}</h3>
                        <div className='d-flex '>
                            <div className='info'>
                                <p className='cor'>Course Duration</p>
                                <p className='dur'> {duration} Hours</p>
                            </div>
                            <div className='info'>
                                <p className='cor'>Total Class</p>
                                <p className='dur'>{total_class} USD</p>
                            </div>
                            <div className='info'>
                                <p className='cor'>Projects:</p>
                                <p className='dur'>{total_project} USD</p>
                            </div>
                        </div>
                        <h1>Course Overview</h1>
                        <p>{details}</p>
                    </Col>
                    <Col lg="7">
                        <img src={image_url} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CourseDetails;