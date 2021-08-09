import React from 'react'

export default function Cart({ onTotalPrice, onAddToCart, onDelete }) {

    // figure out logic for the total price of the items in the cart 
    // also figure out the logic to reduce the total as the user deletes items from their cart.

    // const sum = onTotalPrice.reduce((accumulator, element) => {
    //     return accumulator + element;
    //  }, 0);

    //  console.log(sum);

    // const reducePrice = onTotalPrice.reduce((accumulator, element) => {
    //     return accumulator - element;
    // }, 0);
    // console.log(reducePrice);

    return (
        <div>
            <h1>Cart</h1>
            {
                 onAddToCart.length === 0 ?
                 <>
                     <h3><span className="badge badge-danger">No items in the cart yet!</span></h3>
                 </>
                 :
                <>
                    <h2><span className="badge badge-success">Total: $place holder</span></h2>
                </>
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
