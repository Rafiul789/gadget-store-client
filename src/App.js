import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';


import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div >
    <Navbar></Navbar>
    <Routes> <Route path='/' element={<Home></Home>}> </Route>   <Route path='*' element={<NotFound></NotFound>} ></Route>    </Routes>

    </div>
  );
}

export default App;
