import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
const Navbar = () => {
    return (
        <div>
        <nav  className="md:flex bg-gray-800   sticky   gap-2 justify-center md:justify-between  py-5 px-5">
   <div className='text-4xl font-bold text-white'>
     <h1>Gadget Store</h1>
   </div>
   <div className='text-xl text-white md:flex gap-3'>
     <CustomLink
       to='/'          >
       Home
     </CustomLink>
     <CustomLink
                 to='/blogs'
     >
       Blogs
     </CustomLink>
     <CustomLink
      
      to='/inventory'
    >
      Inventory
    </CustomLink>

     <CustomLink
      
       to='/about'
     >
       About 
     </CustomLink>
     <CustomLink
      
      to='/signup'
    >
      Sign Up
    </CustomLink>

    <CustomLink
      
      to='/login'
    >
      Login
    </CustomLink>
       
   </div>
 </nav>
   </div>
    );
};

export default Navbar;