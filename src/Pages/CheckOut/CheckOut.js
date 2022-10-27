import React from 'react';
import { Form } from 'react-bootstrap';
import './Cheackout.css'

const CheckOut = () => {
    return (
        <div className=''>
            <div className='checkout-container'>
            <h3 className='text-check'>Payment Details</h3>
            <h4 className='text-out'>Complete your purchase by providing payment Details</h4>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Card Details</Form.Label>
                    <Form.Control type="text" name="password" placeholder="Card Number" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Billing Address</Form.Label>
                    <Form.Control type="text" name="password" placeholder="City/State" required/>
                </Form.Group>
                <button className='login'>Pay</button>
            </Form>
        </div>
        </div>
    );
};

export default CheckOut;