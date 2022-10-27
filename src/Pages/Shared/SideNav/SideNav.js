import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SideNavProduct from '../SideNavProduct/SideNavProduct';
import './SideNav.css'

const SideNav = () => {
    const items = useLoaderData();

    return (
        <div>
            <h3>Courses:</h3>
            <div className='items-container'>
            {
                items?.map(item => <SideNavProduct
                    key={item.id}
                    item={item}
                ></SideNavProduct>)
            }
            </div>
        </div>
    );
};

export default SideNav;