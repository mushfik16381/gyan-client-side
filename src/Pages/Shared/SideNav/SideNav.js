import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SideNavProduct from '../SideNavProduct/SideNavProduct';

const SideNav = () => {
    const items = useLoaderData();
    console.log(items);

    return (
        <div>
            <h3>SideNavProduct</h3>
            <div>
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