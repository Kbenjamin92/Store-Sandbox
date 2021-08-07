import React, { useEffect } from 'react'


export default function Home({ onGet, onAddToCart, onData, onAdd}) {
    useEffect(() => {
        console.log('data in state');
    }, [onData]);

    

    console.log(onData.length);
    return (
        <div>
            <h1>Home Component!</h1>
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
                        <div key={key}>
                            <p>{item.title}</p>
                            <p>{item.description}</p>
                            <p>${item.price}</p>
                            <img src={item.image} alt="item" style={{width: '200px', height: '200px'}} />
                            {
                                item === selectedItem ?
                                <>
                                    <h1 className="badge badge-success badge-lg"><i className="fa fa-check" aria-hidden="true"></i></h1>
                                </>
                                :
                                <>
                                    <button className='btn btn-success btn-sm' onClick={() => onAdd(item.id)}>Add Item</button>
                                </>
         
                            }
                        </div>
                    ); 
                })
            }
        </div>
    )
}
