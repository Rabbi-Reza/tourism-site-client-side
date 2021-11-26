import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const OfferUpdate = () => {
    const [offers, setOffers] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const url = `https://still-thicket-37369.herokuapp.com/offers/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setOffers(data))
    }, [])

    // Update Offer
    const handleOfferNameChange = e => {
        const updatedOfferName = e.target.value;
        const updatedOffer = { 
            offerName: updatedOfferName, 
            offerDescription: offers.offerDescription,
            offerPrice: offers.offerPrice, 
            offerImage: offers.offerImage  
        }
        setOffers(updatedOffer);
    }

    const handleOfferDescriptionChange = e => {
        const updatedOfferDescription = e.target.value;
        const updatedOfferName = {
            offerName: offers.OfferName, 
            offerDescription: updatedOfferDescription,
            offerPrice: offers.offerPrice, 
            offerImage: offers.offerImage
        }
        setOffers(updatedOfferName);
    }

    const handleOfferPriceChange = e => {
        const updatedOfferPrice = e.target.value;
        const updatedOffer = {
            offerName: offers.OfferName, 
            offerDescription: offers.OfferDescription,
            offerPrice: updatedOfferPrice, 
            offerImage: offers.offerImage
        }
        setOffers(updatedOffer);
    }

    const handleOfferImageChange = e => {
        const updatedOfferImage = e.target.value;
        const updatedOffer = {
            offerName: offers.OfferName, 
            offerDescription: offers.OfferDescription,
            offerPrice: offers.OfferPrice, 
            offerImage: updatedOfferImage
        }
        setOffers(updatedOffer);
    }

    const handleUpdateOffer = e => {
        
        const url = `https://still-thicket-37369.herokuapp.com/offers/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(offers)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0) {
                alert('Updated Successfully.');
                setOffers({});
                window.location.href = "/offerUpdateDelete";
            }
        })

        e.preventDefault();
    }

    return (
        <div className='container p-2'>
            <h2>Update <span className="text-danger">{id}</span> </h2>

            <hr />
            <form onSubmit={handleUpdateOffer}>
                <div className="form-group p-2">
                    <label className="text-primary" htmlFor="exampleFormControlInput1">Offer Name</label>
                    <input value={offers.offerName } onChange={handleOfferNameChange} type="text" className="form-control" id="exampleFormControlInput1" required/>
                </div>
                <div className="form-group p-2">
                    <label className="text-primary" htmlFor="exampleFormControlTextarea1">Offer Description</label>
                    <textarea value={offers.offerDescription } onChange={handleOfferDescriptionChange} className="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
                </div>
                <div className="form-group p-2">
                    <label  className="text-primary" htmlFor="exampleFormControlInput2">Offer Price</label>
                    <input value={offers.offerPrice } onChange={handleOfferPriceChange} step="any" type="number" className="form-control" id="exampleFormControlInput2" required/>
                </div>
                <div className="form-group p-2">
                    <label  className="text-primary" htmlFor="exampleFormControlInput3">Offer Image URL</label>
                    <input value={offers.offerImage } onChange={handleOfferImageChange} type="text" className="form-control" id="exampleFormControlInput3" required/>
                </div>
                <div className="form-group m-3">
                    <input className='btn-success p-2 rounded' type="submit" value="Update Offering" />
                </div>
            </form>
            <hr className="mb-4"/>
            <Link to="/offerUpdateDelete">
                <button className="m-3 btn btn-info">Previous Page</button>
            </Link>
        </div>
    );
};

export default OfferUpdate;