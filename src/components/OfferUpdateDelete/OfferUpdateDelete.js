import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const OfferUpdateDelete = () => {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        fetch('https://still-thicket-37369.herokuapp.com/offers')
        .then(res => res.json())
        .then(data => setOffers(data))
    }, []);

    // Delete an Offer
    const handleDeleteOffer = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if(proceed) {
            const url = `https://still-thicket-37369.herokuapp.com/offers/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0) {
                    alert('Deleted successfully');
                    const remainingOffers = offers.filter(offer => offer._id !== id);
                    setOffers(remainingOffers);
                    
                }
            });
        }
    }

    return (
        <div className="container mt-4">
            <h2>Offers Available: <span className="text-primary">{offers.length}</span> </h2>
            <div className='m-3 border rounded'>
                {
                    offers.map(offer => 
                    <div
                        key={offer._id}>{offer.offerName} <span className="text-primary">::</span> <span className="text-success">Price:</span> {offer.offerPrice} ||
                        <button  className="m-2 btn-danger" onClick={() => handleDeleteOffer(offer._id)}>Delete</button> 
                        <Link to={`/offerUpdate/${offer._id}`}><button className="m-2 btn-info">Update</button></Link>
                        ||
                    </div>)
                }
            </div>
            <hr className="mb-4"/>
            <Link to="/addNewOffers">
                <button className="m-3 btn btn-info">Previous Page</button>
            </Link>
        </div>
    );
};

export default OfferUpdateDelete;