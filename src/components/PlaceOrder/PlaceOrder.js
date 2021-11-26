import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = () => {
    const [offers, setOffers] = useState([]);
    const {id} = useParams();
    const { user } = useAuth();

    const userAddressRef = useRef();
    const userPhoneRef = useRef();

    useEffect(() => {
        const url = `https://still-thicket-37369.herokuapp.com/offers/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setOffers(data))
    }, [])

    const handlePlaceOrder = e => {

        const userName = user?.displayName;
        const userEmail = user?.email;
        const userAddress = userAddressRef.current.value;
        const userPhone = userPhoneRef.current.value;
        const orderName = offers.offerName;
        const orderPrice = offers.offerPrice;
        const orderStatus = 'Pending';
            
        const newOrder = { id, userName, userEmail, userAddress, userPhone, orderName, orderPrice, orderStatus };

        const proceed = window.confirm('Are you sure, you want to Confirm Order ?');
        if(proceed) {
            fetch('https://still-thicket-37369.herokuapp.com/placeOrder', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newOrder)
            })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Order added Successfully.');
                    e.target.reset();
                    window.location.href = "/myOrders";
                }
            })
            e.preventDefault();
        }
    }
    
    return (
        <div className='container p-2'>
            <h1>Welcome <span className="text-success">{user?.displayName}</span> </h1>
            <h2>Place Order</h2>

            <hr />
            <div class="row">
                <div class="col-12 col-md-7 col-lg-7 d-flex align-items-start flex-column">
                    <h3 className="text-success">Offer Name: <span className="text-primary">{offers.offerName}</span> </h3>
                    <h4 className="text-success">Offer Price: <span className="text-primary">{offers.offerPrice}</span> </h4>
                    <h4 className="text-success">Offer Description: <span className="text-primary">{offers.offerDescription}</span> </h4>
                </div>
                <div class="col-12 col-md-5 col-lg-5 d-flex align-items-start flex-column">
                    <h4 className="text-success">User Name: <span className="text-primary">{user?.displayName}</span> </h4>
                    <h4 className="text-success">User Email: <span className="text-primary">{user?.email}</span> </h4>

                    <hr className="mb-4"/>
                    <form onSubmit={handlePlaceOrder} >
                        <label className="text-primary">User Address</label>
                        <textarea ref={userAddressRef} className="form-control" placeholder="Input Address Here" rows="3" required></textarea>

                        <label  className="text-primary">User Phone Number</label>
                        <input ref={userPhoneRef} step="any" type="number" className="form-control" placeholder="Input Phone Number" required/>

                        <div className="form-group m-3">
                            <input className='btn-success p-2 rounded' type="submit" value="Confirm Order" />
                        </div>
                    </form>
                </div>
            </div>
            <hr className="mb-4"/>
        </div>
    );
};

export default PlaceOrder;