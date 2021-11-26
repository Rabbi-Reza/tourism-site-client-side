import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user, logOut} = useAuth();

    return (
        <>
            <Navbar bg="dark"  variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><h2>Ghurtey Jabo</h2></Navbar.Brand>
                    <Navbar.Toggle className="items"/>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} className="items" to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} className="items" to="/home#offerings">Offerings</Nav.Link>
                        
                            { 
                                user?.email ? 
                                    <>
                                        <Nav.Link as={Link} className="items" to="/myOrders">My Orders</Nav.Link>
                                        <Nav.Link as={Link} className="items" to="/manageAllOrders">Manage All Orders</Nav.Link>
                                        <Nav.Link as={Link} className="items" to="/addNewOffers">Add A New Offers</Nav.Link>
                                        <Button onClick={logOut} className="me-3" variant="light">Logout</Button>
                                    </>
                                :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                        <Navbar.Text>
                            {
                                user?.email ?
                                <div className="d-flex justify-content-center align-items-center">
                                    {/* <img className="rounded-circle w-25" src={user?.photoURL} alt="" /> */}
                                    <p>{user?.displayName}</p>
                                </div> :
                                ''
                            }
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;