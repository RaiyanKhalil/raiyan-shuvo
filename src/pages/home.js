import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import ReactGA from 'react-ga';




const Home = () => {
    
    useEffect(() => {
        ReactGA.initialize('G-BT7QS340V0');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    function handleButtonClick() {
        ReactGA.event({
          category: 'Button',
          action: 'Click',
          label: 'Homepage'
        });
      }
    

    //   G-BT7QS340V0
    return (
        <div className='hero-center'>
            <div className="scale-in-center">
                <div className="hero-text">
                    <h1>Raiyan Khalil Shuvo</h1>
                    <p>Software Engineer</p>
                    <div className='holder-class'>
                        <div className='shake-horizontal'>
                            <Link to='/contact' className='contact-btn' onClick={handleButtonClick}>CONTACT ME</Link>
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



