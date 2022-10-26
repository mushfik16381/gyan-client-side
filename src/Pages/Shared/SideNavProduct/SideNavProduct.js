import React from 'react';
import { Link } from 'react-router-dom';

const SideNavProduct = ({item}) => {
    const {name} = item
    return (
        <div>
            <Link>{name}</Link>
        </div>
    );
};

export default SideNavProduct;