import React from 'react';
import { Link } from "react-router-dom";


const Home = () => {
    
    return (
        <div className='hero-center'>
            <div className="scale-in-center">
                <div className="hero-text">
                    <h1>Raiyan Khalil Shuvo</h1>
                    <p>Software Engineer</p>
                    <div className='holder-class'>
                        <div className='shake-horizontal'>
                            <Link to='/contact' className='contact-btn'>CONTACT ME</Link>
                            {/* <Link className="na v-basic nav-home" to="/">Home</Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
// text-flicker-in-glow
export default Home;



