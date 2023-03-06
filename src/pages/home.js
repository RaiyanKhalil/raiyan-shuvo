import React from 'react';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

const Home = () => {
    
    const location = useLocation();
    useEffect(() => {
        // console.log("fire")
        ReactGA.initialize('G-BT7QS340V0');
        ReactGA.pageview(location.pathname + location.search);
    }, [location]);


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



