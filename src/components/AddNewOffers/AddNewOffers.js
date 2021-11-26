import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const AddNewOffers = () => {
    const offerNameRef = useRef();
    const offerDescriptionRef = useRef();
    const offerPriceRef = useRef();
    const offerImageRef = useRef();

    const handleAddOffers = e => {
        const offerName = offerNameRef.current.value;
        const offerDescription = offerDescriptionRef.current.value;
        const offerPrice = offerPriceRef.current.value;
        const offerImage = offerImageRef.current.value;

        const newOffer = { offerName, offerDescription, offerPrice, offerImage };
        
        fetch('https://still-thicket-37369.herokuapp.com/offers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOffer)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                alert('Offer added Successfully.')
                e.target.reset();
            }
        })
        e.preventDefault();
    }

    return (
        <div className="container w-50">
            <h2>Add a New Offer</h2>
            <hr />
            <form onSubmit={handleAddOffers}>
                <div className="form-group  p-2">
                    <label className="text-primary" htmlFor="exampleFormControlInput1">Offer Name</label>
                    <input ref={offerNameRef} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Offer name" required/>
                </div>
                <div className="form-group p-2">
                    <label className="text-primary" htmlFor="exampleFormControlTextarea1">Offer Description</label>
                    <textarea ref={offerDescriptionRef} className="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
                </div>
                <div className="form-group p-2">
                    <label  className="text-primary" htmlFor="exampleFormControlInput1">Offer Price</label>
                    <input ref={offerPriceRef} step="any" type="number" className="form-control" id="exampleFormControlInput1" placeholder="Offer price" required/>
                </div>
                <div className="form-group p-2">
                    <label  className="text-primary" htmlFor="exampleFormControlInput1">Offer Image URL</label>
                    <input ref={offerImageRef} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Offer Image URL" required/>
                </div>
                <div className="form-group m-3">
                    <input className='btn-success p-2 rounded' type="submit" value="Add Offering" />
                </div>
            </form>
            <hr className="mb-4"/>
                <Link to="/offerUpdateDelete">
                    <button className="m-3 btn btn-danger">Delete or Update Any Offer</button>
                </Link>
            <hr className="mb-4"/>
        </div>
    );
};

export default AddNewOffers;