import React, { useState } from 'react';

const OrderForm = () => {
    const [customerName, setCustomerName] = useState('');
    const [address, setAddress] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [product1, setProduct1] = useState(false);
    const [product2, setProduct2] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <div>
            <h1>ORDER FORM</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='customerName'>Customer Name:</label>
                    <input type='text' id='customerName' value={customerName} onChange={(event) => setCustomerName(event.target.value)} />
                </div>
                <div>
                    <label htmlFor='address'>Delivery Address:</label>
                    <input type='text' id='address' value={address} onChange={(event) => setAddress(event.target.value)} />
                </div>
                <div>
                    <label htmlFor='contactNumber'>Contact Number:</label>
                    <input type='tel' id='contactNumber' value={contactNumber} onChange={(event) => setContactNumber(event.target.value)} />
                </div>
                <div>
                    <label>Products:</label>
                    <div>
                        <label htmlFor='product1'>Limited Edition V88 T-shirt</label>
                            <input id='product1' type='checkbox' value={product1} onChange={(event) => setProduct1(event.target.checked)} />
                        
                    </div>
                    <div>
                        <label htmlFor='product2'>Limited Edition V88 T-shirt Cop</label>
                            <input id='product2' type='checkbox' value={product2} onChange={(event) => setProduct2(event.target.checked)} />
                        
                    </div>
                </div>
                <button type='submit'>Place Order</button>
            </form>

            {submitted && (
                <div>
                    <h2>Order Complete</h2>
                    <p>Customer Name: {customerName}</p>
                    <p>Delivery Address: {address}</p>
                    <p>Contact Number: {contactNumber}</p>
                    <p>Order Details</p>
                    {product1 && <p>Limited Edition V88 T-shirt</p>}
                    {product2 && <p>Limited Edition V88 T-shirt Cop</p>}
                </div>
            )}
        </div>
    );
};

export default OrderForm;
