import React, { useEffect } from 'react'
import '../styles/store.css'


export default function Store({ onGet, onAddToCart, onData, onAdd }) {
    const dataLength = onData.length === 0 ? false : true;
    
    useEffect(() => {
        onGet();
    }, [dataLength]);

        return (
        <div>
            <h1>Store</h1>
            { onAddToCart.length !== 0 && <h3><span className='badge badge-secondary'>Check your cart!</span></h3> }
            <section className="card-container">
            {
            onData.map((item, key) => {
                const selectedItem = onAddToCart.find(s => s.id === item.id)
                return (
                    <div key={key} >
                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src={item.image} alt="item" />
                            <div className="card-body">
                                <h4 className="card-title">{item.title}</h4>
                                <hr/>
                                <p className="card-text">{item.description}</p>
                                <p className="card-text"><strong>Price: </strong>${item.price}</p>
                                {
                                item === selectedItem ?
                                <>
                                <h5 className="badge badge-success icon"><i className="fa fa-check fa-3x"></i></h5>
                                </>
                                :
                                <>
                                <button className='btn btn-success btn-sm' onClick={() => onAdd(item.id)}>Add Item</button>
                                </>
            
                                }
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
