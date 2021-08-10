import React from 'react'

export default function Cart({ onTotalPrice, onAddToCart, onDelete }) {

    const priceArr = [];

    for (let item of onTotalPrice) {
         priceArr.push(item.price);
    }
    const sum = priceArr.reduce((accumulator, element) => {
        return accumulator + element;
    }, 0);

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
                    <h2><span className="badge badge-light">Total: ${sum.toFixed(2)}</span></h2>
                </>
            }
            <section className="card-container">
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
            </section>
        </div>
    )
}
