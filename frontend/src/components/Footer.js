import React from 'react';
import {Link} from 'react-router-dom'
function Footer(props) {
    return (
        <div className="Footer">
            this is the footer
            <Link to="/about-us">About Us</Link>
        </div>
    );
}

export default Footer;