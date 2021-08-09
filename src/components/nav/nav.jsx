import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav({ onTotal }) {
    const total = onTotal.length;
    const renderTotal = total ? total : null

    return (
        <nav className="navbar navbar-light bg-light">
            <h1 className="navbar-brand"><i className="fa fa-codiepie fa-2x"style={{marginRight: '10px'}}></i>Clothes & Stuff</h1>
            <ul className="nav justify-content-center">
                <li className="nav-item breadcrumb-item">
                    <Link to='/'><button className="nav-link btn" style={{marginRight: '20px'}} href="#">Store</button></Link>
                </li>
                <li className="nav-item">
                    <Link to='/cart'><button className="nav-link btn" href="#"><i className="fa fa-shopping-bag" style={{ marginRight: '5px'}}></i>Cart<span className='badge badge-warning' style={{ marginLeft: '5px'}}>{renderTotal}</span></button></Link>
                </li>
            </ul>
        </nav>
    )
}
