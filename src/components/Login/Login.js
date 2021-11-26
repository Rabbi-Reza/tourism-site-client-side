import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri)
        })
    }

    return (
        <div className="m-4">
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card border-0 shadow rounded-3 my-5">
                            <div className="card-body p-4 p-sm-5">
                            <h4 className="card-title text-center mb-5 text-primary ">Login</h4>
                                
                                <hr className="my-4"></hr>
                                <div className="d-grid mb-2">
                                    <button onClick={handleGoogleLogin} className="btn btn-google btn-login text-uppercase fw-bold" type="submit">
                                        <i className="fab fa-google me-2"></i> Sign in with Google
                                    </button>
                                </div>
                                <hr className="my-4"></hr>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>  
        </div>
    );
};

export default Login;