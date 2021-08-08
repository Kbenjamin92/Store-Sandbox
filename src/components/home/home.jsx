import React, { useEffect } from 'react'
import '../styles/home.css'


export default function Home({ onGet, onAddToCart, onData, onAdd}) {
    useEffect(() => {
        console.log('data in state');
    }, [onData]);

        return (
        <div>
            <h1 className="test">Shopping Store</h1>
            <button className='btn btn-warning' onClick={() => onGet()}>Get Data</button>
            {
                onAddToCart.length !== 0 ?
                <>
                    <h1 className='badge badge-success'>Check your cart!</h1>
                </>
                :
                null
            }
            {
                onData.map((item, key) => {
                    const selectedItem = onAddToCart.find(s => s.id === item.id)
                    return (
                        <div key={key} className="item-container">
                            <div className="card" style={{width: "18rem;"}}>
                            <img className="card-img-top" src={item.image} alt="item" />
                            <hr/>
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <hr/>
                                <p className="card-text">{item.description}</p>
                                <p className="card-text"><strong>Price: </strong>${item.price}</p>
                                {
                                item === selectedItem ?
                                <>
                                    <h1 className="badge badge-success badge"><i className="fa fa-check" aria-hidden="true"></i></h1>
                                </>
                                :
                                <>
                                    <button className='btn btn-success btn-lg' onClick={() => onAdd(item.id)}>Add Item</button>
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
