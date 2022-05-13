import React,{useState,useEffect} from 'react';
import CustomLink from '../CustomLink/CustomLink';
import {onAuthStateChanged,signOut} from 'firebase/auth';
import {auth} from '../Firebase/firebase.init';

const Navbar = () => {

  const [user,setUser] =useState({})
  useEffect(() => {
    const subs= onAuthStateChanged(auth, (user) => {
       if (user) {
        
        setUser(user)
         
       } else {
        setUser({})
       } 
     });return ()=>   subs;
    },[])


     const handleSignout = () => {

      signOut(auth).then(() => {
       
      }).catch((error) => {
        // An error happened.
      });
    }


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
      
       to='/contact'
     >
       Contact 
     </CustomLink>
     <CustomLink
      
      to='/signup'
    >
      Sign Up
    </CustomLink>

    {user?.uid? (<button onClick={handleSignout}   >Log Out</button> ):(<CustomLink
           
           to='/login'
         >
           Login
         </CustomLink>)}
        
        
    {user?.uid?( <CustomLink
      
      to='/additem'
    >
      Add Item
    </CustomLink>):("" )}    
    
   {user?.uid?( <CustomLink
      
      to='/manageitem'
    >
      Manage Item
    </CustomLink>):("")} 
   

       
   </div>
 </nav>
   </div>
    );
};

export default Navbar;