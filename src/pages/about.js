import React from 'react';
// import hero from '../images/hero-two.jpg';

const About = () => {
    return (
        <div className='hero-about-center slide-in-bck-center'>
            <div className="about-main">
                <h1 id='center-text'>About Me</h1>
                <div className="about-second-child">
                    <div className="second-child-left">
                        <h3>A little bit about myself</h3>
                        <p className='full-width'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        
                        <div className='grid-container'>
                            <div className='grid-item'>
                                Name: <span>Raiya Shuvo</span>
                            </div>
                            <div className='grid-item'>Email: <span>raiyankhalil@gmail.com</span></div>
                            <div className='grid-item'>
                                Location: <span>Vancouver, BC</span>
                            </div>
                            <div className='grid-item'>Total Experience: <span>3+ years</span></div>
                        </div>
                        <div className='holder-download-class'>
                        <div className='shake-horizontal'>
                            <a href='/contact' className='contact-btn'>CONTACT ME</a>
                        </div>
                    </div>
                    </div>
                    <div className="second-child-right">
                        {/* <img src={hero} alt="" /> */}
                    </div>
                </div>
                <div className="about-skills">
                    <h2 id='center-text'>Skills</h2>
                    <div className='grid-container-second'>
                        <div className='grid-second-item'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-html5" width="100" height="100" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5zm-4.5 4h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path>
</svg>                      
                            <span>HTML</span>

                        </div>
                        <div className='grid-second-item'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-css3" width="100" height="100" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5zm-11.5 4h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path>
</svg>
                            <span>CSS3</span>
                        </div>
                        <div className='grid-second-item'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-sass" width="100" height="100" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0m9 -1.477c2.46 -.826 4 -.826 4 -2.155c0 -1.366 -1.347 -1.366 -2.735 -1.366c-1.91 0 -3.352 .49 -4.537 1.748c-.848 .902 -1.027 2.449 -.153 3.307c.973 .956 3.206 1.789 2.884 3.493c-.233 1.235 -1.469 1.823 -2.617 1.202c-.782 -.424 -.454 -1.746 .626 -2.512s2.822 -.992 4.1 -.24c.98 .575 1.046 1.724 .434 2.193"></path>
</svg>

                            <span>SASS</span>
                        </div>
                        <div className='grid-second-item'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-javascript" width="100" height="100" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5zm-12.5 4h3v8l-2 -1m8 -7h-2.5a0.5 .5 0 0 0 -.5 .5v3a0.5 .5 0 0 0 .5 .5h1.423a0.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5"></path>
</svg>
                            <span>JavaScript</span>
                        </div>
                        <div className='grid-second-item'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-typescript" width="100" height="100" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5m-9 -.5h4m-2 0v6m10 1v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z"></path>
</svg>
                            <span>TypeScript</span>
                        </div>
                        <div className='grid-second-item'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-react" width="100" height="100" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102m3.444 -.609c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102m-3.445 7.185c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2m1.194 -3.286c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2m4.501 -6.575c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896m2.25 2.678c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897m-2.752 4.763a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"></path>
</svg>

                            <span>React/React-Native</span>
                        </div>
                        <div className='grid-second-item'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-redux" width="100" height="100" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M16.54 7c-.805 -2.365 -2.536 -4 -4.54 -4c-2.774 0 -5.023 2.632 -5.023 6.496c0 1.956 1.582 4.727 2.512 6m-4.778 -3.513c-1.656 1.877 -2.214 4.185 -1.211 5.911c1.387 2.39 5.138 2.831 8.501 .9c1.703 -.979 2.875 -3.362 3.516 -4.798m-.503 6c2.511 0 4.523 -.438 5.487 -2.1c1.387 -2.39 -.215 -5.893 -3.579 -7.824c-1.702 -.979 -4.357 -1.235 -5.927 -1.07m-.502 .866c.48 .276 1.095 .112 1.372 -.366a1 1 0 0 0 -.367 -1.365a1.007 1.007 0 0 0 -1.373 .366a1 1 0 0 0 .368 1.365zm-.993 5.638m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0m7 -1.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
</svg>

                            <span>Redux</span>
                        </div>
                        <div className='grid-second-item'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-git" width="100" height="100" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M16 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0m-3 -4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0m1 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0m1 -1v-6m3 2l-2 -2m-2 -2l-1.9 -1.9m1.4 15.3l-6.9 -6.9c-.781 -.781 -.781 -2.219 0 -3l6.9 -6.9c.781 -.781 2.219 -.781 3 0l6.9 6.9c.781 .781 .781 2.219 0 3l-6.9 6.9c-.781 .781 -2.219 .781 -3 0z"></path>
</svg>
                            <span>Git</span>
                        </div>
                        <div className='grid-second-item'>
                            <img style={{width: "100px", height:"100px"}} src="https://nodejs.org/static/images/logo.svg" alt="nodeJS" />
                            <span>NodeJS</span>
                        </div>
                        <div className='grid-second-item'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-python" width="100" height="100" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 9h-7a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3m4 -2h7a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-3m-8 2v-4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-4a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4m-5 -9l0 .01m2 11.99l0 .01"></path>
</svg>
                            <span>Python</span>
                        </div>
                        <div className='grid-second-item'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-php" width="100" height="100" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 12m-10 0a10 9 0 1 0 20 0a10 9 0 1 0 -20 0m3.5 3l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653m9.5 2l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653m-4 -5.5l-1 5.5m.6 -3h2.4l-.5 3"></path>
</svg>
                            <span>PHP</span>
                        </div>
                        <div className='grid-second-item'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-laravel" width="100" height="100" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M3 17l8 5l7 -4v-8l-4 -2.5l4 -2.5l4 2.5v4l-11 6.5l-4 -2.5v-7.5l-4 -2.5zm8 1v4m-4 -6.5l7 -4m0 -4v4l4 2.5m-7 -1v-7.5l-4 -2.5l-4 2.5m4 2.5l4 -2.5m7 4.5l4 -2.5"></path>
</svg>
                            <span>Laravel</span>
                        </div>
                        <div className='grid-second-item'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-mysql" width="100" height="100" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M13 21c-1.427 -1.026 -3.59 -3.854 -4 -6c-.486 .77 -1.501 2 -2 2c-1.499 -.888 -.574 -3.973 0 -6c-1.596 -1.433 -2.468 -2.458 -2.5 -4c-3.35 -3.44 -.444 -5.27 2.5 -3h1c8.482 .5 6.421 8.07 9 11.5c2.295 .522 3.665 2.254 5 3.5c-2.086 -.2 -2.784 -.344 -3.5 0c.478 1.64 2.123 2.2 3.5 3m-13 -15h.01"></path>
</svg>
                            <span>MySQL</span>
                        </div>
                        <div className='grid-second-item'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-mongodb" width="100" height="100" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 3v19m6 -10.773c0 3.273 -1.812 4.77 -6 9.273c-4.188 -4.503 -6 -6 -6 -9.273c0 -4.454 3.071 -6.927 6 -9.227c2.929 2.3 6 4.773 6 9.227z"></path>
</svg>
                            <span>MongoDB</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
