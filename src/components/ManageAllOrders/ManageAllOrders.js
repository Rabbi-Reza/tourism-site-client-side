import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch('https://still-thicket-37369.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, []);

    // Delete an Offer
    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if(proceed) {
            const url = `https://still-thicket-37369.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0) {
                    alert('Deleted successfully');
                    const remainingOrders = orders.filter(order => order._id !== id);
                    setOrders(remainingOrders);
                }
            });
        }
    }
    
    return (
        <div className="container mt-4">
            <h2>Total <span className="text-danger">{orders.length}</span> Orders Found <span className="text-primary"></span> </h2>
            <div className=' border rounded'>
                <table className="table">
                <thead>
                    <tr>
                        <th scope="col">User Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Address</th>
                        <th scope="col">Order Name</th>
                        <th scope="col">Price</th>

                        <th scope="col">Status</th>
                        <th scope="col">Change Status</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                {
                    orders.map(order =>
                    <tbody key={order._id}>
                        <tr>
                            <td>{order.userName}</td>
                            <td>{order.userPhone}</td>
                            <td>{order.userAddress}</td>
                            <td>{order.orderName}</td>
                            <td>{order.orderPrice}</td>
                            <td className="text-primary">{order.orderStatus}</td>
                            <td>
                                <Link to={`/orderUpdate/${order._id}`}><button className="m-2 btn-info">Update</button></Link>
                            </td>
                            <td>
                                <button  className="m-2 btn-danger" onClick={() => handleDeleteOrder(order._id)}>Delete</button> 
                            </td>
                        </tr>
                    </tbody>
                    )
                }
            </table>
            <Link  as={HashLink} className="items" to="/home#offerings">
                <button className="m-3 btn btn-primary">Find More Offerings</button>
            </Link>
            <Link to="/myOrders">
                <button className="m-3 btn btn-success">Go to My Orders</button>
            </Link>
            </div>
        </div>
    );
};

export default ManageAllOrders;
