import React from 'react';
import { Link } from 'react-router-dom';

const Offer = ({offer}) => {
    const { _id, offerName,  offerDescription, offerPrice, offerImage } = offer;

    return (
        <div className="container">
            <div className="offer p-3 border rounded ">
                <img className="border rounded mb-2 img-fluid" src={offerImage} alt="" />
                <hr />
                <h3 className="text-success">{offerName}</h3>
                <p className="px-3">{offerDescription}</p>
                <h5 className="px-3 text-primary">Price: {offerPrice}</h5>
                <Link to={`/placeOrder/${_id}`}>
                <button className="btn btn-warning">Purchase Offer</button>
                </Link>
            </div>
        </div>
    );
};

export default Offer;