import React from 'react';
import Carousel from '../Carousel/Carousel';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import Review from '../Reviews/Review';

const Home = () => {
    return (
        <div>
            
<Carousel></Carousel>

<div className=" my-5 text-center "> <h1 className="text-4xl">Welcome to    <span className="text-4xl text-blue-600"> Gadget Store  </span></h1>  </div>

<Review></Review>

<Feedback></Feedback>
<Footer></Footer>
        </div>
    );
};

export default Home;