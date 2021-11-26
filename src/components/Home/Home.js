import React from 'react';
import Banner from '../Banner/Banner';
import CustomerReview from '../CustomerReview/CustomerReview';
import Followers from '../Followers/Followers';
import Offerings from '../Offerings/Offerings';


const Home = () => {
    return (
        <div className="m-4">
            <Banner></Banner>
            <hr />
            <Offerings></Offerings>
            <hr />
            <CustomerReview></CustomerReview>
            <hr />
            <Followers></Followers>
            <hr />

        </div>
    );
};

export default Home;