import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            {/* navbar */}

            <nav className="navbar navbar-expand-lg background sticky-top p-2" style={{fontSize:'18px', fontFamily:'sans-serif'}}>
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" to="/">Adarsh Coaching Center</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav text-light me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-light active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item parent-nav">
                                <Link className="nav-link text-light">About</Link>
                                <ul className='child-nav'>
                                    <li><Link to="/aboutdir">About Directors</Link></li>
                                    <li><Link to="/aboutpri">About Principle</Link></li>
                                    <li><Link to="/ourschool">About our School</Link></li>
                                    <li><Link to='/mission&vision'>Mission & Vision</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item parent-nav">
                                <Link className="nav-link text-light" to='faculty'>Faculty</Link>
                                {/* <ul className='child-nav'>
                                    <li><a href="#">Science</a></li>
                                    <li><a href="#">Arts</a></li>
                                    <li><a href="#">Commerce</a></li>
                                    <li><a href="#">English</a></li>
                                    <li><a href="#">Hindi</a></li>
                                    <li><a href="#">Mathematics</a></li>
                                </ul> */}
                            </li>
                            <li className="nav-item parent-nav">
                                <Link className="nav-link text-light">Notes</Link>
                                {/* <ul className='child-nav'>
                                    <li><a href="#">Class 12th</a></li>
                                    <li><a href="#">Class 11th</a></li>
                                    <li><a href="#">Class 10th</a></li>
                                    <li><a href="#">Class 9th</a></li>
                                    <li><a href="#">Class 8th</a></li>
                                    <li><a href="#">Class 7th</a></li>
                                    <li><a href="#">Class 6th</a></li>
                                    <li><a href="#">Class 5th</a></li>
                                </ul> */}

                                <ul className='child-nav'>
                                    <li><Link to="science">Science</Link></li>
                                    <li><Link to="socal-science">Socal Science</Link></li>
                                    <li><Link to="sankrit">Sankrit</Link></li>
                                    <li><Link to="english">English</Link></li>
                                    <li><Link to="hindi">Hindi</Link></li>
                                    <li><Link to="math">Mathematics</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="notice">Notice</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to='gallery'>Gallery</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="contact">Contact</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            {/* end navbar */}
        </>
    )
}
