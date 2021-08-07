import React from 'react'

export default function Cart({ onAddToCart, onDelete }) {
    return (
        <div>
            <h1>Cart Component</h1>
            {
                 onAddToCart.length === 0 ?
                 <>
                     <h1 className='badge badge-danger'>No items in the cart yet!</h1>
                 </>
                 :
                 null
            }
            {
                onAddToCart.map((item, key) => {

                    return (
                        <div key={key}>
                            <p>{item.title}</p>
                            <p>{item.description}</p>
                            <p>{item.price}</p>
                            <img src={item.image} alt="item" style={{width: '200px', height: '200px'}} />
                            <button className='btn btn-danger btn-sm' onClick={() => onDelete(item.id)}>Delete</button>
                        </div>
                    ); 
                })
            }
        </div>
    )
}
