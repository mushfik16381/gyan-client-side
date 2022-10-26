import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Course = ({product}) => {
    const {name, image_url, total_class, total_fee, duration} = product;
    console.log(image_url);
    return (
        <div>
            <Card>
                {/* <Card.Img variant="top" src={image_url} /> */}
                <img src={image_url} alt="" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Link><Button variant="primary">Go somewhere</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Course;