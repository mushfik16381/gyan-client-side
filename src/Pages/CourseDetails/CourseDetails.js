import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import './CourseDetails.css';


const CourseDetails = () => {
    const products =useLoaderData();
    const {name, title, details, image_url, total_class, duration, total_project} = products;
    return (
        <div>
             <div className='mt-5 mb-5'>
                <Container>
                <Row>
                    <Col lg="6">
                        <h2 className='title'>{title}</h2>
                        <h3 className='name'>{name}</h3>
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
                        <h1 className='over-text'>Course Overview</h1>
                        <p className='details'>{details}</p>
                    </Col>
                    <Col lg="6">
                        <img className='img img-fluid' src={image_url} alt="" />
                    </Col>
                    <div className='btn-detail '>
                    <Link to='/checkout'><button className='btn-enroll-detail'>Enroll Now</button></Link>
                    </div>
                </Row>
                </Container>
             </div>
        </div>
    );
};
export default CourseDetails;