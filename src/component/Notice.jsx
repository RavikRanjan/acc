import React from 'react'
import { Link } from 'react-router-dom'
export default function Notice() {
  return (
    <>
        <div className="container mt-3 mb-3">
            <div className="row">
                <div className="col-lg-6">
                    <h5 className='text-center text-light bg-success p-1 rounded' style={{fontWeight:'bold'}}>Mock Test</h5>

                    <div className="d-flex mb-3">
                        <div className="border w-50 p-3 text-center">
                            class 12 Test
                        </div>
                        <div className="border w-50 p-3 text-center">
                            <Link to='/test12' style={{textDecoration:'none'}}>View Test</Link>
                        </div>
                    </div>
                    <div className="d-flex mb-3">
                        <div className="border w-50 p-3 text-center">
                            class 11 Test
                        </div>
                        <div className="border w-50 p-3 text-center">
                            <Link to='/test12' style={{textDecoration:'none'}}>View Test</Link>
                        </div>
                    </div>
                    <div className="d-flex mb-3">
                        <div className="border w-50 p-3 text-center">
                            class 10 Test
                        </div>
                        <div className="border w-50 p-3 text-center">
                            <Link to='/test12' style={{textDecoration:'none'}}>View Test</Link>
                        </div>
                    </div>
                    <div className="d-flex mb-3">
                        <div className="border w-50 p-3 text-center">
                            class 09 Test
                        </div>
                        <div className="border w-50 p-3 text-center">
                            <Link to='/test12' style={{textDecoration:'none'}}>View Test</Link>
                        </div>
                    </div>
                    <div className="d-flex mb-3">
                        <div className="border w-50 p-3 text-center">
                            class 08 Test
                        </div>
                        <div className="border w-50 p-3 text-center">
                            <Link to='/test12' style={{textDecoration:'none'}}>View Test</Link>
                        </div>
                    </div>
                    <div className="d-flex mb-3">
                        <div className="border w-50 p-3 text-center">
                            class 07 Test
                        </div>
                        <div className="border w-50 p-3 text-center">
                            <Link to='/test12' style={{textDecoration:'none'}}>View Test</Link>
                        </div>
                    </div>
                    <div className="d-flex mb-3">
                        <div className="border w-50 p-3 text-center">
                            class 06 Test
                        </div>
                        <div className="border w-50 p-3 text-center">
                            <Link to='/test12' style={{textDecoration:'none'}}>View Test</Link>
                        </div>
                    </div>
                    <div className="d-flex mb-3">
                        <div className="border w-50 p-3 text-center">
                            class 05 Test
                        </div>
                        <div className="border w-50 p-3 text-center">
                            <Link to='/test12' style={{textDecoration:'none'}}>View Test</Link>
                        </div>
                    </div>
                    

                </div>
                <div className="col-lg-6">
                <h5 className='text-center text-light bg-success p-1 rounded' style={{fontWeight:'bold'}}>Notices</h5>
                <marquee behavior="scroll" direction="up" className="text-center" height="400px">
                            <a href="#" style={{ textDecoration: "none" }}><p><img src="assets/images/new.gif" alt="" /> Lorem ipsum dolor sit amet.</p></a>
                            <a href="#" style={{ textDecoration: "none" }}><p><img src="assets/images/new.gif" alt="" />Lorem ipsum dolor sit amet consectetur.</p></a>
                            <a href="#" style={{ textDecoration: "none" }}><p><img src="assets/images/new.gif" alt="" />Lorem ipsum dolor sit amet consectetur adipisicing.</p></a>
                            <a href="#" style={{ textDecoration: "none" }}><p><img src="assets/images/new.gif" alt="" /> Lorem ipsum dolor sit.</p></a>
                            <a href="#" style={{ textDecoration: "none" }}><p><img src="assets/images/new.gif" alt="" />Lorem ipsum dolor sit amet.</p></a>
                            <a href="#" style={{ textDecoration: "none" }}><p><img src="assets/images/new.gif" alt="" />Lorem ipsum dolor sit amet consectetur.</p></a>
                            <a href="#" style={{ textDecoration: "none" }}><p><img src="assets/images/new.gif" alt="" />Lorem, ipsum dolor.</p></a>
                        </marquee>
                </div>
            </div>
        </div>  
    </>
  )
}
