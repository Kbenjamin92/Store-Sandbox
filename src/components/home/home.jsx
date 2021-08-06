import React from 'react'


export default function Home({ onIncrement, onValue, onGet, onMsg, onData }) {
    console.log(onData.length)
    return (
        <div>
            <h1>Home Component!</h1>
            <button className='btn btn-primary' onClick={() => onIncrement()}>Increment</button>
            <button className='btn btn-warning' onClick={() => onGet()}>Get Data</button>
            {
                onData.length !== 0 ?
                <>
                    <h1 className='badge badge-success'>{onMsg}</h1>
                </>
                :
                null
            }
        </div>
    )
}
