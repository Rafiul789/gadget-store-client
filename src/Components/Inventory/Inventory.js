import React from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import useProducts from '../Hooks/useProducts/UseProduct';

const Inventory = () => {
   
    const navigate=useNavigate()
    const { _Id } = useParams();
    const [products]=useProducts(_Id);


    return (
        <div  className="mx-10"> <div>  {products.map(product=> <h1 key={product._id} > your item is: {product.name} </h1>)}
         </div>
            <div className="my-5  justify-center">   <button className=" inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"     onClick={() => navigate('/manageitem')}>Manage Inventory</button>   </div>
          
        </div>
    );
};

export default Inventory;