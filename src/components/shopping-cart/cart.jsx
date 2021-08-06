import React from 'react'

export default function Cart({ onData, onDelete }) {
    const splicedArr = onData.splice(0, 5);

    return (
        <div>
            <h1>Cart Component</h1>
            {
                 onData.length === 0 ?
                 <>
                     <h1 className='badge badge-success'>No items in the cart yet!</h1>
                 </>
                 :
                 null
            }
            {
                splicedArr.map((item, key) => {
                    return (
                        <div key={key}>
                            <p>{item.title}</p>
                            <button className='btn btn-danger btn-sm' onClick={() => onDelete(item.id)}>Delete</button>
                        </div>
                    ); 
                })
            }
        </div>
    )
}
