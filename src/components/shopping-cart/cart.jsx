import React from 'react'

export default function Cart({ onAddToCart, onDelete }) {
    return (
        <div>
            <h1>Cart Component</h1>
            {
                 onAddToCart.length === 0 ?
                 <>
                     <h1 className='badge badge-danger badge-lg'>No items in the cart yet!</h1>
                 </>
                 :
                 null
            }
            {
                onAddToCart.map((item, key) => {

                    return (
                        <div key={key} className="card-container">
                            <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src={item.image} alt="item" />
                            <div className="card-body">
                                <h4 className="card-title">{item.title}</h4>
                                <hr/>
                                <p className="card-text">{item.description}</p>
                                <p className="card-text"><strong>Price:</strong> ${item.price}</p>
                                <button className='btn btn-danger btn-sm' onClick={() => onDelete(item.id)}>Remove</button>
                            </div>
                        </div>
                        </div>
                        
                    ); 
                })
            }
        </div>
    )
}
