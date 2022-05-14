import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../Hooks/useProducts/UseProduct';

const ManageItem = () => {
const navigate=useNavigate();
    const [products,setProducts]=useProducts();

const handleDelete=id=>{

const proceed=window.confirm('Are you sure you want to delete?');
if(proceed){
    const url=`http://localhost:5000/service/${id}`;
    fetch(url,{
        method: 'DELETE',

    }).then(res=>res.json())
    .then(data=>{console.log(data)
    const remaining=products.filter(product=>product._id!==id);
    setProducts(remaining);
    })

}


}

    return (
        <div> <h1  className="text-3xl text-center ">Manage your item</h1>    <div className="grid grid-cols-3 my-5"  > {products.map(product=> <div key={product._id}  ><h1>{product.name} </h1>   <button  onClick={()=>handleDelete(product._id)} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Delete</button>   </div>) }


         </div>
            <div  className="my-5  items-center 
justify-center "> <button   onClick={()=>navigate('/additem')} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Add New Item</button> </div>
 

    

       
       
       
       
       
        </div>
    );
};

export default ManageItem;