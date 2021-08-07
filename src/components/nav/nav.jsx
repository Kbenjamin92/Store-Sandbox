import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav({ onTotal }) {
   const total = onTotal.length;
   const renderTotal = total ? total : null
    return (
        <nav className="navbar navbar-light bg-light">
            <h1 className="navbar-brand">Store<span className='badge badge-primary'>{renderTotal}</span></h1>
            <div className='navbar'>
                <ul className='navbar nav'>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/'><p>Home</p></Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/cart'><p>Cart</p></Link>
                    </li>
                </ul>
            </div>
           
        </nav>
    )
}
