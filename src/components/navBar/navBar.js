import React from 'react';
import "./navBar.scss";

export default function navBar() {
    return (
        <nav className="navBar">
            <div className="logo">
            Ancient World <span>Tours</span>   
            </div> 
            <ul className="nav-links">
                <li>
                    <a href="/" className="nav-link">home</a>
                </li>
                <li>
                    <a href="/" className="nav-link">about</a>
                </li>
                <li>
                    <a href="/" className="nav-link">tours</a>
                </li>
            </ul>
        </nav>
    )
}
