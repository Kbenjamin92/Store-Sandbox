import React from 'react'


export default function Home({ onIncrement, onValue, onGet }) {
    return (
        <div>
            <h1>Home Component!</h1>
            <button className='btn btn-primary' onClick={() => onIncrement()}>Increment</button>
            <button className='btn btn-warning' onClick={() => onGet()}>Get Data</button>
        </div>
    )
}
