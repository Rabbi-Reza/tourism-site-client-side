import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Offer from '../Offer/Offer';
import './Offerings.css';

const Offerings = () => {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        fetch('https://still-thicket-37369.herokuapp.com/offers')
        .then(res => res.json())
        .then(data => setOffers(data))
    }, []);

    return (
        <div id="offerings">
            <h2 className="text-primary mt-5"> {offers.length} Tour plans Available </h2>
            <div className="offer-container">
                {
                    offers.map(offer => <Offer
                    key={offer._id}
                    offer={offer}
                    ></Offer>)
                }
            </div>
        </div>
    );
};

export default Offerings;