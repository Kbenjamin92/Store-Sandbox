import React from 'react'

export default function Cart({ onData }) {
    const splicedArr = onData.splice(0, 5);

    return (
        <div>
            <h1>Cart Component</h1>
            {
                splicedArr.map((item, key) => {
                    return (
                        <div key={key}>
                            <p>{item.title}</p>
                        </div>
                    );
                })
            }
        </div>
    )
}
