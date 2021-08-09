import React, { useEffect } from 'react'
import '../styles/store.css'


export default function Store({ onGet, onAddToCart, onData, onAdd}) {
    useEffect(() => {
        console.log('data in state');
    }, [onData]);

        return (
        <div>
            <h1>Store</h1>
            <button className='btn btn-warning' onClick={() => onGet()}>Get Data</button>
            {
                onAddToCart.length !== 0 ?
                <>
                    <h3><span className='badge badge-success'>Check your cart!</span></h3>
                </>
                :
                null
            }
            {
            onData.map((item, key) => {
                const selectedItem = onAddToCart.find(s => s.id === item.id)
                return (
                    <div key={key} className="card-container">
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
        </div>
    )
}
