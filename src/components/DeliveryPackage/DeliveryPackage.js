import React from 'react';
import "./deliveryPackage.css";

const DeliveryPackage = () => {
    return (
        <div className="conatiner bg-light my-4 mx-auto pb-3 border rounded-2">
            <h5 className='mx-3 my-3'>Choose Delivery package</h5>
            <div class="form-check mx-3 d-flex flex-row">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label ms-2" htmlFor="flexRadioDefault1">
                    Delivery Package
                </label>
                <label className="form-check-label fw-bold ms-auto" htmlFor="flexRadioDefault1" style={{ color: "#52057B" }}>
                    ₹2
                </label>
            </div>
            <p className='m-0 p-0 mx-3 fs-6 fw-light' style={{ color: "#828282" }}>7 days delivery test</p>
            <div class="form-check mt-3 mx-3 d-flex flex-row">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label ms-2" htmlFor="flexRadioDefault1">
                    Delivery Package
                </label>
                <label className="form-check-label fw-bold ms-auto" htmlFor="flexRadioDefault1" style={{ color: "#52057B" }}>
                    ₹2
                </label>
            </div>
            <p className='m-0 p-0 mx-3 fs-6 fw-light' style={{ color: "#828282" }}>3 days delivery test</p>
            <div class="form-check mt-3 mx-3 d-flex flex-row">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label ms-2" htmlFor="flexRadioDefault1">
                    Delivery Package
                </label>
                <label className="form-check-label fw-bold ms-auto" htmlFor="flexRadioDefault1" style={{ color: "#52057B" }}>
                    ₹2
                </label>
            </div>
            <p className='m-0 p-0 mx-3 fs-6 fw-light' style={{ color: "#828282" }}>1 day delivery test</p>
        </div>
    )
}

export default DeliveryPackage