import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import Blog from './Components/Blog/Blogs';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';


import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound';
import Signup from './Components/Signup/Signup';
import Contact from './Components/Contact/Contact';
import Inventory from './Components/Inventory/Inventory';
import AddItem from './Components/AddItem/addItem';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import ManageItem from './Components/ManageItem/ManageItem';

function App() {
  return (
    <div >
    <Navbar></Navbar>
    <Toaster></Toaster>
    <Routes> <Route path='/' element={<Home></Home>}> </Route> <Route path='/blogs' element={<Blog></Blog>} ></Route>
    <Route path='/inventory' element={<RequireAuth>  <Inventory></Inventory> </RequireAuth>  }></Route> <Route path='/additem' element={<RequireAuth> <AddItem></AddItem>  </RequireAuth>  }></Route>  <Route path='/manageitem' element={<RequireAuth> <ManageItem></ManageItem>  </RequireAuth>  }></Route>
      <Route path='/login' element={<Login></Login>} ></Route> <Route path='/signup' element={<Signup></Signup>}></Route> <Route path='/contact' element={<Contact></Contact>}></Route>    <Route path='*' element={<NotFound></NotFound>} ></Route>    </Routes>

    </div>
  );
}

export default App;
