import React from 'react';
import useProducts from '../Hooks/useProducts/UseProduct';

const ManageItem = () => {

    const [products]=useProducts();
    return (
        <div>
            <h1>Manage your item</h1>

{products.map(product=> <div key={product._id}  ><h1>{product.name}</h1>  </div>) }

        </div>
    );
};

export default ManageItem;