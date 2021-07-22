import React from 'react';
import {Link} from 'react-router-dom'
function Footer(props) {
    return (
        <div className="Footer">
        <footer>
            this is the footer
            <Link to="/about-us">About Us</Link>
        </footer>
        </div>
    );
}

export default Footer;