import React from 'react';
import { Link } from 'react-router-dom';

const SideNavProduct = ({item}) => {
    const {name} = item
    return (
        <div className='pb-4'>
            <Link>{name}</Link>
        </div>
    );
};

export default SideNavProduct;