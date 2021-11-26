import React from 'react';
import Rating from 'react-rating';

const CustomerReview = () => {
    return (
        <div className="container">
            <h2 className="text-primary">Customer Reviews</h2>
            <div className="card-deck">
                <div className="card m-3 d-flex">
                    <div className="p-2">
                        <img className="card-img-top w-25" src="https://i.ibb.co/Q99Pj3R/people1.png" alt="Card image cap"/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Ajay Agarwal</h5>
                        <Rating
                            className="text-warning"
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                            initialRating={4.5}
                            readonly
                        ></Rating>
                        <p className="card-text p-4">My friends & I stayed at a gorgeous villa with a private pool & all modern comforts. Clean and tidy rooms, helpful staff & easily accessible property. Booked it through Ghurtey Jabo during their sale & I couldn't have made a better decision.</p>
                        <p className="card-text"><small className="text-muted">Posted 5 days ago</small></p>
                    </div>
                </div>
                <div className="card m-3 d-flex">
                    <div className="p-2">
                        <img className="card-img-top w-25" src="https://i.ibb.co/SmMccFh/people2.png" alt="Card image cap"/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Rajib Rahman</h5>
                        <Rating
                            className="text-warning"
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                            initialRating={4}
                            readonly
                        ></Rating>
                        <p className="card-text">I have been to Cox's Bazar before but haven't stayed at a homestay until my friend recommended one. This beautiful cottage overlooking hills took my breath away, and my fiance's. The setting only added to our romantic experience. Thank you Ghurtey Jabo for helping us book this cottage, even on a very short notice.</p>
                        <p className="card-text"><small className="text-muted">Posted 15 days ago</small></p>
                    </div>
                </div>
                <div className="card m-3 d-flex">
                    <div className="p-2">
                        <img className="card-img-top w-25" src="https://i.ibb.co/gyVtJDX/people3.png" alt="Card image cap"/>
                    </div>
                    <div className="card-body p-4">
                        <h5 className="card-title">John Smith</h5>
                        <Rating
                            className="text-warning"
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                            initialRating={4.5}
                            readonly
                        ></Rating>
                        <p className="card-text">Travelled to Sylhet 3 months back with my wife and son, and had the most amazing time in the town. Stayed amid coffee plantation at a homestay we booked through Ghurtey Jabo.</p>
                        <p className="card-text"><small className="text-muted">Posted 1 months ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;