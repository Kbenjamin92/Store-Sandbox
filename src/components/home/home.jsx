import React, { useEffect } from 'react'


export default function Home({ onGet, onMsg, onData, onAdd}) {
    useEffect(() => {
        console.log('data in state');
    }, [onData]);

    console.log(onData.length)
    return (
        <div>
            <h1>Home Component!</h1>
            <button className='btn btn-warning' onClick={() => onGet()}>Get Data</button>
            {
                onData.length !== 0 ?
                <>
                    <h1 className='badge badge-success'>{onMsg}</h1>
                </>
                :
                null
            }
            {
                onData.map((item, key) => {
                    return (
                        <div key={key}>
                            <p>{item.title}</p>
                            <p>{item.description}</p>
                            <p>${item.price}</p>
                            <img src={item.image} alt="item" style={{width: '200px', height: '200px'}} />
                            <button className='btn btn-success btn-sm' onClick={() => onAdd(item.id)}>Add Item</button>
                        </div>
                    ); 
                })
            }
        </div>
    )
}
