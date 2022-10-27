import React from 'react';
import Form from 'react-bootstrap/Form';
import './Login.css'

const Login = () => {
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
    }
    return (
        <div className='w-25 mx-auto login-container'>
            <h3 className='text'>Please Login Now!</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required/>
                </Form.Group>
                <button className='login'>Login</button>
            </Form>
        </div>
    );
};
export default Login;