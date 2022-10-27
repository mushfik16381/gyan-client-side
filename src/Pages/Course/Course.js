import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './course.css';

const Course = ({product}) => {
    const {name, details, image_url, total_class, total_fee, duration} = product;
    let detail = details.slice(0, 178);
    return (
        <div className='course-container'>
            <Card className='card-container'>
                <img className='img-fluid' src={image_url} alt="" />
                <Card.Body>
                    <Card.Title className='card_text'>
                        <h3>{name}</h3>
                    </Card.Title>
                    <Card.Text>
                        <span>
                            {detail}.. <Link>Read More</Link>
                        </span>
                    </Card.Text>
                    <div className='d-flex justify-content-between card-details'>
                        <div >
                            <p className='cor'>Courses:</p>
                            <p className='dur'> {total_class} Months</p>
                        </div>
                        <div>
                            <p className='cor'>Courses Fee:</p>
                            <p className='dur'>{total_fee} USD</p>
                        </div>
                    </div>
                    <div className='btn-enroll'>
                    <Link ><Button variant="primary">Enroll Now</Button></Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Course;