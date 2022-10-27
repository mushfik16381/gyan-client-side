import React from 'react';
import { Link } from 'react-router-dom';

const SideNavProduct = ({item}) => {
    const {name, id} = item
    return (
        <div className='pb-4'>
            <Link to={`${id}`}>{name}</Link>
        </div>
    );
};

export default SideNavProduct;