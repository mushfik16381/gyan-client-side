import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SideNavProduct from '../SideNavProduct/SideNavProduct';
import './SideNav.css'

const SideNav = () => {
    const items = useLoaderData();

    return (
        <div >
            <div className='items-container'>
            <h3 className='title-items'>Courses:</h3>
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