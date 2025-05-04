import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="footer-item">
                            <div className="company-brand">
                                <img
                                    src="/src/images/main-logo.png"
                                    alt="logo"
                                    className="footer-logo"
                                />
                                <p>
                                    Stepping into a bookstore is like entering a sanctuary for the mind.
                                    Soft murmurs of turning pages and the occasional rustle of a plastic bag create a gentle, contemplative ambiance. 
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="footer-menu">
                            <h5>About Us</h5>
                            <ul className="menu-list">
                                <li className="menu-item">
                                    <Link to="/about">About</Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="/cart">Cart</Link>
                                </li>
                                <li className="menu-item">
                                    <a href="https://maps.app.goo.gl/RqM9b87rg5SBoWmj6">Location</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="footer-menu">
                            <h5>Discover</h5>
                            <ul className="menu-list">
                                <li className="menu-item">
                                    <Link to="/home">Home</Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="/shop">Books</Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="/authors">Authors</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col-md-2">
                        <div className="footer-menu">
                            <h5>Help</h5>
                            <ul className="menu-list">
                                <li className="menu-item">
                                    <Link to="/contact">Help center</Link>
                                </li> 
                                <li className="menu-item">
                                    <Link to="/contact">Contact us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
