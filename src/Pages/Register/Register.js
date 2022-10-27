import React from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password, name)
    }
    return (
        <div className='w-25 mx-auto login-container'>
            <h3 className='text'>Please Register Now!</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required/>
                </Form.Group>
                <Link to="/login"><span style={{ color:'#fff'}}>Already, have an account?</span></Link>
                <button className='login'>Register</button>
            </Form>
        </div>
    );
};

export default Register;