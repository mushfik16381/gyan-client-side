import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const products = useLoaderData();
    return (
        <div>
            {
                products?.map(product => <Course
                    key={product.id}
                    product={product}
                ></Course>)
            }
        </div>
    );
};

export default Courses;