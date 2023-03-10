import React from 'react'

const DeliveryPackage = () => {
    return (
        <div className="card h-25 m-0 me-3 mt-4">
            <div className="card-body">
                <h5 className="card-title">Choose Delivery package</h5>
                <div class="form-check mt-4">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Delivery Package
                    </label>
                    <label className="form-check-label fw-bold ms-5" htmlFor="flexRadioDefault1" style={{color: "#52057B"}}>
                        ₹2
                    </label>
                </div>
                <p className='m-0 p-0 me-3 fs-6 fw-light' style={{color: "#828282"}}>7 days delivery test</p>
                <div class="form-check mt-4">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" style={{border: "2px solid #52057B", backgroundColor: "#52057B"}}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Delivery Package
                    </label>
                    <label className="form-check-label fw-bold ms-5" htmlFor="flexRadioDefault1" style={{color: "#52057B"}}>
                        ₹2
                    </label>
                </div>
                <p className='m-0 p-0 me-3 fs-6 fw-light' style={{color: "#828282"}}>3 days delivery test</p>
                <div class="form-check mt-4">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" style={{border: "2px solid #52057B", backgroundColor: "#52057B"}}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Delivery Package
                    </label>
                    <label className="form-check-label fw-bold ms-5" htmlFor="flexRadioDefault1" style={{color: "#52057B"}}>
                        ₹2
                    </label>
                </div>
                <p className='m-0 p-0 me-3 fs-6 fw-light' style={{color: "#828282"}}>1 day delivery test</p>
            </div>
        </div>
    )
}

export default DeliveryPackage