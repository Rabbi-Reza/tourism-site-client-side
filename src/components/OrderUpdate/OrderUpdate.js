import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const OfferUpdate = () => {
    const [order, setOrder] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const url = `https://still-thicket-37369.herokuapp.com/orders/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setOrder(data))
    }, []);

    // Update Offer
    const handleOrderStatusChange = e => {
        const selectedStatus = document.getElementById("selectStatus");
        const selectedStatusValue = selectedStatus.value;
        const updatedOrder = {
            id: order.id, 
            userName: order.userName,
            userEmail: order.userEmail,
            userAddress: order.userAddress,
            userPhone: order.userPhone,
            orderName: order.orderName,
            orderPrice: order.orderPrice,
            orderStatus: selectedStatusValue
        }
        setOrder(updatedOrder);
    }

    let otherStatus = '';
    if(order.orderStatus === 'Pending') {
            otherStatus = 'Approved';
        }
    else {
        otherStatus = 'Pending';
    }
    const handleUpdateOrder = e => {
        const url = `https://still-thicket-37369.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0) {
                alert('Updated Successfully.');
                setOrder({});
                window.location.href = "/manageAllOrders";
            }
        })
        e.preventDefault();
    }

    return (
        <div className='container p-2'>
            <h2>Update <span className="text-danger">{id}</span></h2>
            <hr />
            <form onSubmit={handleUpdateOrder}>
                <div className="form-group p-2">
                    <h3 className="text-success">Order Name: <span className="text-primary">{order.orderName }</span></h3>
                    <h3 className="text-success">Order Price: <span className="text-primary">{order.orderPrice }</span></h3>
                </div>
                <hr />
                <div className="form-group p-2">
                    {/* <div className="form-group p-2">
                        <label className="text-primary" htmlFor="exampleFormControlInput1">Offer Name</label>
                        <input value={order.offerName } onChange={handleUserNameChange} type="text" className="form-control" id="exampleFormControlInput1" required/>
                    </div> */}
                    <h4 className="text-success">User Name: <span className="text-primary">{order.userName}</span></h4>
                    <h4 className="text-success">User Email: <span className="text-primary">{order.userEmail}</span></h4>
                    <h4 className="text-success">User Phone: <span className="text-primary">{order.orderPrice}</span></h4>
                    <h4 className="text-success">User Address: <span className="text-primary">{order.userPhone}</span></h4>
                </div>
                <hr/>
                <div className="form-group m-3">
                    <h3 className="text-danger">Select Status</h3>
                    <select onChange={handleOrderStatusChange} class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" id="selectStatus">
                        <option value={order.orderStatus} selected>{order.orderStatus}</option>
                        <option value={otherStatus}>{otherStatus}</option>
                    </select>
                </div>
                <hr />
                <div className="form-group m-3">
                    <input className='btn-primary p-2 rounded' type="submit" value="Update Order Status" />
                </div>
            </form>
            <hr className="mb-4"/>
            <Link to="/manageAllOrders">
                <button className="m-3 btn btn-success">Go to Manage All Orders</button>
            </Link>
        </div>
    );
};

export default OfferUpdate;