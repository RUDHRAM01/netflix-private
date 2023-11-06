import React from 'react';
import "./bottom.css"

const Bottom = () => {
    return (
        <>

            <footer style={{backgroundColor:"black"}}>
                <div className='number'><a href='tel: 000-800-919-1694'>Question? Call 000-800-919-1694</a></div>
                
                <div className="content">
              
                    <div className="middle-box">
                        
                        <div><a href="/">FAQ</a></div>
                        <div><a href="/">Investor Relations</a></div>
                        <div><a href="/">Privacy</a></div>
                        <div><a href="/">Speed Test</a></div>
                        <br />
                        <br />
                        <select name="">
                            <option value="">English</option>
                            <option value="">Hindi</option>
                        </select>
                        <br />
                        <br />
                        <p>Netflix India</p>
                    </div>

                    <div className="middle-box">
                        <div><a href="/">Help Centre</a></div>
                        <div><a href="/">Jobs</a></div>
                        <div><a href="/">Cookie Preferences</a></div>
                        <div><a href="/">Legal Notices</a></div>
                    </div>

                    <div className="middle-box">
                        <div><a href="/">Account</a></div>
                        <div><a href="/">Ways to Watch</a></div>
                        <div><a href="/">Corporate Information</a></div>
                        <div><a href="/">Only on Netflix</a></div>
                    </div>

                    <div className="middle-box">
                        <div><a href="/">Media Centre</a></div>
                        <div><a href="/">Terms of Use</a></div>
                        <div><a href="/">Contact Us</a></div>
                    </div>
                </div>
            </footer>

            <footer className="footer2">
                <span>Created by <span>Rudhram</span> | &copy; <span>All rights Reserved</span></span>
            </footer>
        </>
    );
};

export default Bottom;
