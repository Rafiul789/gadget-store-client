import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import Blog from './Components/Blog/Blogs';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';


import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound';
import Signup from './Components/Signup/Signup';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div >
    <Navbar></Navbar>
    <Toaster></Toaster>
    <Routes> <Route path='/' element={<Home></Home>}> </Route> <Route path='/blogs' element={<Blog></Blog>} ></Route>  <Route path='/login' element={<Login></Login>} ></Route> <Route path='/signup' element={<Signup></Signup>}></Route> <Route path='/contact' element={<Contact></Contact>}></Route>    <Route path='*' element={<NotFound></NotFound>} ></Route>    </Routes>

    </div>
  );
}

export default App;
