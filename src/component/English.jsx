import React from 'react'
import { Link } from 'react-router-dom'

export default function English() {
  return (
    <>
        <div className="container mt-3 mb-3">
        <h4 className='text-center text-light bg-success p-2 rounded'>Welcome To English Notes</h4>
            <div className='d-flex mb-3'>
                <div className='text-center border w-50 p-3'>Class12</div>
                <div className='text-center border w-50 p-3'><Link to='/class12'  style={{textDecoration:'none',color:'red'}}>Go to Download</Link></div>
            </div>
            <div className='d-flex mb-3'>
                <div className='text-center border w-50 p-3'>Class11</div>
                <div className='text-center border w-50 p-3'><Link to='/class12'  style={{textDecoration:'none',color:'red'}}>Go to Download</Link></div>
            </div>
            <div className='d-flex mb-3'>
                <div className='text-center border w-50 p-3'>Class10</div>
                <div className='text-center border w-50 p-3'><Link to='/class12'  style={{textDecoration:'none',color:'red'}}>Go to Download</Link></div>
            </div>
            <div className='d-flex mb-3'>
                <div className='text-center border w-50 p-3'>Class9</div>
                <div className='text-center border w-50 p-3'><Link to='/class12'  style={{textDecoration:'none',color:'red'}}>Go to Download</Link></div>
            </div>
        </div>
    </>
  )
}
