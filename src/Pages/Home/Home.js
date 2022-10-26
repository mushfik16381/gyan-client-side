import React from 'react';
import { Link } from 'react-router-dom';
// import banner from '../../../images/banner.png'
import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <div className="overlay">
                <h3>Let’s Learn</h3>
                <h4> For Bright Future</h4>
                <p>With experienced mentors and updated curriculum, the gyan institute is ready to advance your career. Choose your favorite course today from our trendy courses.</p>
                <Link to={'/courses'}><button className='btn-course'>Start a Course</button></Link>
            </div>
        </div>
    );
};

export default Home;