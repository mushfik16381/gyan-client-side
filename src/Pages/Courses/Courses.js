import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import { Col, Container, Row } from 'react-bootstrap';
import './courses.css'
import SideNav from '../Shared/SideNav/SideNav';

const Courses = () => {
    const products = useLoaderData();
    return (
        <div className='courses-container'>
            <Container>
              <Row>
                  <Col lg="3">
                        <SideNav></SideNav>
                  </Col>
                  <Col lg="9">
                    <div className='cart-container'>
                        {
                            products?.map(product => <Course
                            key={product.id}
                            product={product}
                            ></Course>)
                        }
                    </div>
                  </Col>
              </Row>
            </Container>
        </div>
    );
};

export default Courses;