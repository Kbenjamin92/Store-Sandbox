import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav({ onTotal }) {
    const total = onTotal.length;
    const renderTotal = total ? total : null

    return (
        <nav className="navbar navbar-light bg-light">
            <h1 className="navbar-brand">Clothes & Stuff</h1>
            <ul className="nav justify-content-center">
                <li className="nav-item breadcrumb-item">
                    <Link to='/'><button className="nav-link btn" style={{marginRight: '20px'}} href="#">Store</button></Link>
                </li>
                <li className="nav-item">
                    <Link to='/cart'><button className="nav-link btn" href="#">Cart<span className='badge badge-primary' style={{ marginLeft: '5px'}}>{renderTotal}</span></button></Link>
                </li>
            </ul>
        </nav>
    )
}
