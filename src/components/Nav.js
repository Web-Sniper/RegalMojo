import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <div className="nav-wrapper white">
                <Link to="#" className="brand-logo">Logo</Link>
                <ul id="nav-mobile" className="right">
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav